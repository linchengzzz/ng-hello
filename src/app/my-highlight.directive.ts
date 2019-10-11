import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[appMyHighlight]'
})
export class MyHighlightDirective {
    @Input()
    highlightColor: string;

    constructor(private elementRef: ElementRef) {
    }

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.highlightColor);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.elementRef.nativeElement.style.backgroundColor = color;
    }

}
