import { fakeAsync, tick } from '@angular/core/testing';
import { of, Subject, throwError } from 'rxjs';
import { delay, switchMap, tap } from 'rxjs/operators';
import { DynamicPsSelectDataSource, PsSelectLoadTrigger } from './dynamic-select-data-source';

describe('DynamicPsSelectDataSource', () => {
  it('should work with array data', fakeAsync(() => {
    const dataSource = new DynamicPsSelectDataSource([createOption('item', 1)]);

    let currentRenderOptions;
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.selectedValuesChanged([]);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.searchTextChanged('hallo');
    tick(300);
    expect(currentRenderOptions).toEqual([createOption('item', 1, true)]);

    dataSource.searchTextChanged('item');
    tick(300);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.panelOpenChanged(true);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.disconnect();
  }));

  it('should work with observable data', fakeAsync(() => {
    const dataSource = new DynamicPsSelectDataSource(of([createOption('item', 1)]));

    let currentRenderOptions;
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.selectedValuesChanged([]);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.searchTextChanged('hallo');
    tick(300);
    expect(currentRenderOptions).toEqual([createOption('item', 1, true)]);

    dataSource.searchTextChanged('item');
    tick(300);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.panelOpenChanged(true);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.disconnect();
  }));

  it('should subscribe only when connection to data, when it is an observable and no load trigger is configured', fakeAsync(() => {
    let loadDataCallCount = 0;
    const dataSource = new DynamicPsSelectDataSource(
      of([]).pipe(
        tap(() => {
          ++loadDataCallCount;
        })
      )
    );

    dataSource.connect().subscribe();
    expect(loadDataCallCount).toBe(1);
    dataSource.selectedValuesChanged([]);
    dataSource.searchTextChanged('hallo');
    dataSource.panelOpenChanged(true);
    expect(loadDataCallCount).toBe(1);

    dataSource.disconnect();
  }));

  it('should update loading flag', fakeAsync(() => {
    const dataSource = new DynamicPsSelectDataSource(() => of([]).pipe(delay(1000)), { loadTrigger: PsSelectLoadTrigger.All });
    expect(dataSource.loading).toBe(false);

    dataSource.connect().subscribe();
    expect(dataSource.loading).toBe(true);

    tick(1001);
    expect(dataSource.loading).toBe(false);

    dataSource.searchTextChanged('hello');
    expect(dataSource.loading).toBe(false);
    tick(150); // debounce time / 2
    expect(dataSource.loading).toBe(false);
    tick(150); // debounce time / 2
    expect(dataSource.loading).toBe(false);

    dataSource.panelOpenChanged(true);
    expect(dataSource.loading).toBe(true);
    tick(1001);
    expect(dataSource.loading).toBe(false);

    dataSource.panelOpenChanged(false);
    dataSource.panelOpenChanged(true);
    expect(dataSource.loading).toBe(true);
    tick(1001);
    expect(dataSource.loading).toBe(false);

    dataSource.disconnect();
  }));

  it('should filter for searchText and ignore casing', fakeAsync(() => {
    const halloWeltItem = createOption('Hallo Welt', 1);
    const halloItem = createOption('Hallo', 2);
    const weltItem = createOption('Welt', 3);
    const halloWeltItemHidden = createOption('Hallo Welt', 1, true);
    const halloItemHidden = createOption('Hallo', 2, true);
    const weltItemHidden = createOption('Welt', 3, true);
    const dataSource = new DynamicPsSelectDataSource(of([halloWeltItem, halloItem, weltItem]), { searchDebounceTime: 50 });

    let currentRenderOptions;

    // Beim connecten darf das debounce das laden nicht verzögern
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });
    expect(currentRenderOptions).toEqual([halloItem, halloWeltItem, weltItem]);

    // Testen, ob exakt übereinstimmender Text gefunden wird
    dataSource.searchTextChanged('Hallo Welt');
    tick(50);
    expect(currentRenderOptions).toEqual([halloItemHidden, halloWeltItem, weltItemHidden]);

    // Testen, partieller Text mit anderem casing gefunden wird
    dataSource.searchTextChanged('eL');
    tick(50);
    expect(currentRenderOptions).toEqual([halloItemHidden, halloWeltItem, weltItem]);

    // Testen, ob es funktioniert, wenn nichts gefunden wird
    dataSource.searchTextChanged('asdf');
    tick(50);
    expect(currentRenderOptions).toEqual([halloItemHidden, halloWeltItemHidden, weltItemHidden]);

    dataSource.disconnect();
  }));

  it('should debounce searchText', fakeAsync(() => {
    const dataSource = new DynamicPsSelectDataSource(of([createOption('item', 1)]), { searchDebounceTime: 50 });

    let currentRenderOptions;

    // Beim connecten darf das debounce das laden nicht verzögern
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    // Testen, das die options wirklich erst nach der debounce time neu geladen werden
    dataSource.searchTextChanged('debounce search');
    tick(49);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]); // debounce time noch nicht rum
    tick(1);
    expect(currentRenderOptions).toEqual([createOption('item', 1, true)]); // debounce time erreicht

    // Testen, das das debounce bei mehreren eingaben functoniert
    dataSource.searchTextChanged('i');
    tick(49);
    expect(currentRenderOptions).toEqual([createOption('item', 1, true)]);
    dataSource.searchTextChanged('it');
    tick(49);
    expect(currentRenderOptions).toEqual([createOption('item', 1, true)]);
    dataSource.searchTextChanged('item');
    tick(49);
    expect(currentRenderOptions).toEqual([createOption('item', 1, true)]);
    tick(1);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.disconnect();
  }));

  it('should not refresh options when searchText changes to the same value', fakeAsync(() => {
    const dataSource = new DynamicPsSelectDataSource(of([createOption('item', 1)]), { searchDebounceTime: 50 });

    let optionsRefreshTime = 0;
    dataSource.connect().subscribe(() => {
      ++optionsRefreshTime;
    });

    // Search Text setzen, warten bis reloaded wurde und den call count resetten
    dataSource.searchTextChanged('text');
    tick(50);
    optionsRefreshTime = 0;

    // Suchtext ändern und innerhalb der debounceTime zurück ändern
    dataSource.searchTextChanged('i');
    tick(49);
    dataSource.searchTextChanged('text');
    tick(50);
    expect(optionsRefreshTime).toEqual(0);

    dataSource.disconnect();
  }));

  it('should work with array data', fakeAsync(() => {
    const dataSource = new DynamicPsSelectDataSource([createOption('item', 1)]);

    let currentRenderOptions;
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.selectedValuesChanged([]);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.searchTextChanged('hallo');
    tick(300);
    expect(currentRenderOptions).toEqual([createOption('item', 1, true)]);

    dataSource.searchTextChanged('item');
    tick(300);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.panelOpenChanged(true);
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.disconnect();
  }));

  it('should by default only load options when connecting', fakeAsync(() => {
    let loadDataCallCount = 0;
    const dataSource = new DynamicPsSelectDataSource(() => {
      ++loadDataCallCount;
      return of([createOption('item', loadDataCallCount)]);
    });

    let currentRenderOptions;
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });
    expect(currentRenderOptions).toEqual([createOption('item', 1)]);

    dataSource.selectedValuesChanged([]);
    dataSource.selectedValuesChanged([7]);
    dataSource.selectedValuesChanged([7, 13]);
    dataSource.panelOpenChanged(true);
    dataSource.panelOpenChanged(true);
    dataSource.searchTextChanged('item');
    tick(300);
    dataSource.searchTextChanged('');
    tick(300);

    expect(loadDataCallCount).toBe(1);

    dataSource.disconnect();
  }));

  it('should only load options on first panel open if loadTrigger is FirstPanelOpen', fakeAsync(() => {
    let loadDataCallCount = 0;
    const dataSource = new DynamicPsSelectDataSource(
      () => {
        ++loadDataCallCount;
        return of([createOption('item', loadDataCallCount)]);
      },
      { loadTrigger: PsSelectLoadTrigger.FirstPanelOpen }
    );

    dataSource.connect().subscribe();

    dataSource.selectedValuesChanged([]);
    dataSource.selectedValuesChanged([7]);
    dataSource.selectedValuesChanged([7, 13]);
    dataSource.searchTextChanged('item');
    tick(300);
    dataSource.searchTextChanged('');
    tick(300);

    expect(loadDataCallCount).toBe(0);

    dataSource.panelOpenChanged(true);
    expect(loadDataCallCount).toBe(1);

    dataSource.panelOpenChanged(true);
    expect(loadDataCallCount).toBe(1);

    dataSource.disconnect();
  }));

  it('should load options on every panel open if loadTrigger is EveryPanelOpen', fakeAsync(() => {
    let loadDataCallCount = 0;
    const dataSource = new DynamicPsSelectDataSource(
      () => {
        ++loadDataCallCount;
        return of([createOption('item', loadDataCallCount)]);
      },
      { loadTrigger: PsSelectLoadTrigger.EveryPanelOpen }
    );

    dataSource.connect().subscribe();

    dataSource.selectedValuesChanged([]);
    dataSource.selectedValuesChanged([7]);
    dataSource.selectedValuesChanged([7, 13]);
    dataSource.searchTextChanged('item');
    tick(300);
    dataSource.searchTextChanged('');
    tick(300);

    expect(loadDataCallCount).toBe(0);

    dataSource.panelOpenChanged(true);
    expect(loadDataCallCount).toBe(1);

    dataSource.panelOpenChanged(false);
    expect(loadDataCallCount).toBe(1);

    dataSource.panelOpenChanged(true);
    expect(loadDataCallCount).toBe(2);

    dataSource.panelOpenChanged(false);
    expect(loadDataCallCount).toBe(2);

    dataSource.panelOpenChanged(true);
    expect(loadDataCallCount).toBe(3);

    dataSource.disconnect();
  }));

  it('should add selected values to loaded options, if they are missing', fakeAsync(() => {
    const items$ = new Subject<any[]>();
    const dataSource = new DynamicPsSelectDataSource<number>(() => {
      return items$;
    });

    let currentRenderOptions: any[];
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });

    // Selected Items sollten sofort gerendert werden, obwohl die options noch laden (items$ subject is noch leer)
    dataSource.selectedValuesChanged([1, 5]);
    expect(currentRenderOptions).toEqual([createOption('??? (ID: 1)', 1), createOption('??? (ID: 5)', 5)]);

    items$.next([createOption('item', 1)]);
    expect(currentRenderOptions).toEqual([createOption('??? (ID: 5)', 5), createOption('item', 1)]);

    dataSource.selectedValuesChanged([7]);
    expect(currentRenderOptions).toEqual([createOption('??? (ID: 7)', 7), createOption('item', 1)]);

    dataSource.selectedValuesChanged([9, 10]);
    expect(currentRenderOptions).toEqual([createOption('??? (ID: 10)', 10), createOption('??? (ID: 9)', 9), createOption('item', 1)]);

    items$.next([createOption('item', 1), createOption('item 9', 9)]);
    expect(currentRenderOptions).toEqual([createOption('??? (ID: 10)', 10), createOption('item 9', 9), createOption('item', 1)]);

    // Sollte auch mit custom compareWith function gehen (value 9 und value 11 identisch)
    dataSource.compareWith = (a: number, b: number) => (a === 11 && b === 9) || (a === 9 && b === 11);
    items$.next([createOption('item', 1), createOption('9', 11)]);
    expect(currentRenderOptions).toEqual([createOption('9', 11), createOption('??? (ID: 10)', 10), createOption('item', 1)]);

    dataSource.disconnect();
    items$.complete();
  }));

  it('should handle errors', fakeAsync(() => {
    let shouldThrow = true;
    const dataSource = new DynamicPsSelectDataSource(
      () => {
        let items$ = of([createOption('item', 1)]).pipe(delay(5));
        if (shouldThrow) {
          items$ = items$.pipe(switchMap(() => throwError('test error')));
        }
        return items$;
      },
      { loadTrigger: PsSelectLoadTrigger.All }
    );

    let currentRenderOptions: any[];
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });
    expect(currentRenderOptions).toEqual([]);
    expect(dataSource.error).toBeNull();
    expect(dataSource.errorMessage).toBeNull();

    tick(5);
    expect(currentRenderOptions).toEqual([]);
    expect(dataSource.error).toBeDefined();
    expect(dataSource.errorMessage).toEqual('test error');

    dataSource.selectedValuesChanged([5]);
    expect(currentRenderOptions).toEqual([createOption('??? (ID: 5)', 5)]);
    expect(dataSource.error).toBeDefined();
    expect(dataSource.errorMessage).toEqual('test error');

    shouldThrow = false;
    dataSource.panelOpenChanged(true);
    tick(5);
    expect(currentRenderOptions).toEqual([createOption('??? (ID: 5)', 5), createOption('item', 1)]);
    expect(dataSource.error).toBeNull();
    expect(dataSource.errorMessage).toBeNull();

    dataSource.disconnect();
  }));

  it('should sort selected options to the top after panel close', fakeAsync(() => {
    const dataSource = new DynamicPsSelectDataSource(() => {
      return of([createOption('item 1', 1), createOption('item 2', 2), createOption('item 3', 3)]);
    });

    let currentRenderOptions;
    dataSource.connect().subscribe(options => {
      currentRenderOptions = options;
    });
    expect(currentRenderOptions).toEqual([createOption('item 1', 1), createOption('item 2', 2), createOption('item 3', 3)]);

    // Wenn Panel offen, nicht umsortieren
    dataSource.panelOpenChanged(true);
    dataSource.selectedValuesChanged([3]);
    expect(currentRenderOptions).toEqual([createOption('item 1', 1), createOption('item 2', 2), createOption('item 3', 3)]);

    // Beim Schließen dann umsortieren
    dataSource.panelOpenChanged(false);
    expect(currentRenderOptions).toEqual([createOption('item 3', 3), createOption('item 1', 1), createOption('item 2', 2)]);

    // Wenn geschlossen und value ändert sich, umsortieren
    dataSource.selectedValuesChanged([2, 3]);
    expect(currentRenderOptions).toEqual([createOption('item 2', 2), createOption('item 3', 3), createOption('item 1', 1)]);

    dataSource.disconnect();
  }));

  it('should emit data only when needed', fakeAsync(() => {
    const dataSource = new DynamicPsSelectDataSource(
      () => {
        return of([createOption('item 1', 1)]);
      },
      { loadTrigger: PsSelectLoadTrigger.All }
    );

    let dataEmitCount = 0;
    dataSource.connect().subscribe(() => {
      ++dataEmitCount;
    });
    expect(dataEmitCount).toBe(1);

    dataSource.panelOpenChanged(true);
    dataSource.panelOpenChanged(true);
    expect(dataEmitCount).toBe(2);

    dataSource.panelOpenChanged(false);
    dataSource.panelOpenChanged(false);
    expect(dataEmitCount).toBe(3);

    dataSource.panelOpenChanged(true);
    dataSource.panelOpenChanged(true);
    expect(dataEmitCount).toBe(4);

    dataSource.selectedValuesChanged(['item 1', 'x']);
    dataSource.selectedValuesChanged(['item 1', 'x']);
    expect(dataEmitCount).toBe(5);

    dataSource.searchTextChanged('te');
    dataSource.searchTextChanged('test');
    expect(dataEmitCount).toBe(5);
    tick(300);
    expect(dataEmitCount).toBe(6);

    dataSource.disconnect();
  }));
});

function createOption(label: string, value: any, hidden = false): { label: string; value: any; hidden: boolean } {
  return { label, value, hidden };
}
