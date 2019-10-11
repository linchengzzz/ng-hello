import { AfterContentInit, Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-my-child-one',
    templateUrl: './my-child-one.component.html',
    styleUrls: ['./my-child-one.component.less']
})
export class MyChildOneComponent implements OnInit, AfterContentInit {
    @Input()
    highlightColor: string;

    private containerElement: any;

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        console.log(this.elementRef.nativeElement);
        console.log(this.elementRef.nativeElement.childNodes);
        console.log(this.elementRef.nativeElement.childNodes[0]);
        console.log(this.elementRef.nativeElement.innerHTML);

        this.containerElement = this.elementRef.nativeElement.childNodes[0];
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
        this.containerElement.style.backgroundColor = color;
    }
}
