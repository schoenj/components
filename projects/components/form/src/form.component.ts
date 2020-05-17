import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { distinctUntilChanged, startWith } from 'rxjs/operators';

import { IPsFormButton, IPsFormDataSource, IPsFormDataSourceConnectOptions, IPsFormException } from './form-data-source';
import { PsFormSavebarContentDirective, PsFormSavebarContentDirective2 } from './form-savebar-content.directive';

export const dependencies = {
  IntersectionObserver: IntersectionObserver,
};

@Component({
  selector: 'ps-form-savebar-content-wrapper',
  template: `
    <ng-content></ng-content>
  `,
})
export class PsFormSavebarContentWrapperComponent {}

@Component({
  selector: 'ps-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class PsFormComponent implements AfterViewInit, OnDestroy {
  PsFormSavebarContentWrapperComponent = PsFormSavebarContentWrapperComponent;

  getSavebarContentNodes(name: string) {
    return [[this._contentNodeMap.get(name)]];
  }

  @Input() public set dataSource(value: IPsFormDataSource) {
    if (this._dataSource) {
      this._dataSource.disconnect();
      this._dataSourceSub.unsubscribe();
    }

    this._dataSource = value;

    this.updateErrorCardObserver();

    if (this._dataSource) {
      this.activateDataSource();
    }
  }
  public get dataSource(): IPsFormDataSource {
    return this._dataSource;
  }
  private _dataSource: IPsFormDataSource;

  @ContentChildren(PsFormSavebarContentDirective)
  public customRightContent: QueryList<PsFormSavebarContentDirective>;

  @ContentChildren(PsFormSavebarContentDirective2)
  public customRightContent2: QueryList<PsFormSavebarContentDirective2>;

  public get autocomplete() {
    return this.dataSource.autocomplete;
  }

  public get form(): FormGroup {
    return this.dataSource.form;
  }

  public get savebarItems(): (IPsFormButton | string)[] {
    return this.dataSource.savebarItems;
  }

  public get savebarMode(): string {
    return this.dataSource.savebarMode || 'auto';
  }

  public get savebarHidden(): boolean {
    return this.savebarMode === 'hide';
  }

  public get savebarSticky(): boolean {
    if (this.savebarMode === 'auto') {
      return this.form.dirty || this.form.touched;
    }
    return this.savebarMode === 'sticky';
  }

  public get contentVisible(): boolean {
    return this.dataSource.contentVisible;
  }

  public get contentBlocked(): boolean {
    return this.dataSource.contentBlocked;
  }

  public get exception(): IPsFormException {
    return this.dataSource.exception;
  }

  @ViewChild('errorCardWrapper', { static: false }) public errorCardWrapper: ElementRef | null;

  private _dataSourceSub = Subscription.EMPTY;
  private _errorCardObserver: IntersectionObserver;
  private _viewReady = false;
  private _errrorInView$ = new BehaviorSubject<boolean>(false);
  private _contentNodeMap = new Map<string, ElementRef>();

  constructor(private cd: ChangeDetectorRef) {}

  public ngAfterViewInit() {
    this._viewReady = true;
    this.updateErrorCardObserver();
    this.activateDataSource();

    this.customRightContent2.changes
      .pipe(startWith(this.customRightContent2.toArray()))
      .subscribe((children: PsFormSavebarContentDirective2[]) => {
        this._contentNodeMap.clear();
        children.forEach(element => {
          this._contentNodeMap.set(element.name, element.elementRef.nativeElement);
        });
      });
  }

  public ngOnDestroy() {
    this._contentNodeMap.clear();

    if (this._errorCardObserver) {
      this._errorCardObserver.disconnect();
      this._errorCardObserver = null;
    }

    this._errrorInView$.complete();

    this._dataSourceSub.unsubscribe();
    if (this._dataSource) {
      this._dataSource.disconnect();
    }
  }

  private activateDataSource() {
    if (!this._viewReady || !this._dataSource) {
      return;
    }

    const options = {
      errorInView$: this._errrorInView$.pipe(distinctUntilChanged()),
      scrollToError: () => {
        this.errorCardWrapper.nativeElement.scrollIntoView({ behavior: 'smooth' });
      },
    } as IPsFormDataSourceConnectOptions;

    this._dataSourceSub = this._dataSource.connect(options).subscribe(() => {
      this.cd.markForCheck();
    });
  }

  private updateErrorCardObserver() {
    if (!this._errorCardObserver && this._dataSource && this._viewReady) {
      const options = {
        root: null as any, // relative to document viewport
        rootMargin: '-100px', // margin around root. Values are similar to css property. Unitless values not allowed
        threshold: 0, // visible amount of item shown in relation to root
      } as IntersectionObserverInit;

      this._errorCardObserver = new dependencies.IntersectionObserver((changes, _) => {
        const isErrorCardInView = changes[0].intersectionRatio > 0;
        this._errrorInView$.next(isErrorCardInView);
        this.cd.markForCheck();
      }, options);

      this._errorCardObserver.observe(this.errorCardWrapper.nativeElement);
    } else if (this._errorCardObserver && !this._dataSource) {
      this._errorCardObserver.disconnect();
      this._errorCardObserver = null;
    }
  }
}
