import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appViews]'
})
export class ViewsDirective {

  @Input() viewTitle :string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.view(this.viewTitle);
  }

  private view(title: string) {
    this.el.nativeElement.title = title;
  }
}
