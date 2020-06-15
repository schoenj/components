import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { MatSpinner } from '@angular/material/progress-spinner';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PsBlockUiComponent } from './block-ui.component';
import { PsBlockUiModule } from './block-ui.module';

@Component({
  selector: 'ps-test-component',
  template: `
    <ps-block-ui [blocked]="blocked" [spinnerText]="spinnerText">
      <div id="content">test text</div>
    </ps-block-ui>
  `,
})
export class TestComponent {
  public blocked = false;
  public spinnerText: string = null;

  @ViewChild(PsBlockUiComponent, { static: true }) blockui: PsBlockUiComponent;

  constructor(public cd: ChangeDetectorRef) {}
}

describe('PsBlockUiComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CommonModule, PsBlockUiModule],
      declarations: [TestComponent],
    }).compileComponents();
  }));

  it('should work', async(() => {
    const fixture = TestBed.createComponent(TestComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
    fixture.detectChanges();

    const contentDebugEl = fixture.debugElement.query(By.css('#content'));
    expect(contentDebugEl).not.toBe(null);
    expect(contentDebugEl.nativeElement.textContent).toBe('test text');
    expect(fixture.debugElement.query(By.directive(MatSpinner))).toBe(null);

    component.blocked = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.directive(MatSpinner))).not.toBe(null);
    const containerEl = fixture.debugElement.query(By.css('.ps-block-ui__overlay-content'));
    expect(containerEl.nativeElement.children.length).toBe(1);

    component.spinnerText = 'spinner text';
    fixture.detectChanges();
    expect(containerEl.nativeElement.children.length).toBe(2);
    expect(containerEl.nativeElement.children[1].textContent).toBe('spinner text');
  }));
});