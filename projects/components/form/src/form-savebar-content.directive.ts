import { Directive, Input, TemplateRef, ElementRef } from '@angular/core';

@Directive({
  selector: '[psFormSavebarContent]',
})
export class PsFormSavebarContentDirective {
  constructor(public templateRef: TemplateRef<any>) {}
  @Input() public psFormSavebarContent: string;
}
@Directive({
  selector: 'ps-form-savebar-content', // TODO: *ngComponentOutlet testen
})
export class PsFormSavebarContentDirective2 {
  constructor(public elementRef: ElementRef<any>) {}
  @Input() public name: string;
}
