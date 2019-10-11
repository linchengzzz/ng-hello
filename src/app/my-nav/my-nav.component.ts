import {
    AfterContentInit, AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ComponentFactoryResolver,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { EventBusService } from '../event-bus.service';
import { MyChildComponent } from '../my-child/my-child.component';

@Component({
    selector: 'app-my-nav',
    templateUrl: './my-nav.component.html',
    styleUrls: ['./my-nav.component.less']
})
export class MyNavComponent implements OnInit, AfterContentInit, AfterViewInit {

    constructor(
        private breakpointObserver: BreakpointObserver,
        private eventBusService: EventBusService,
        private resolver: ComponentFactoryResolver
    ) {
    }

    @ViewChild('divElement', { static: false, read: ViewContainerRef })
    divElement: ViewContainerRef;

    @ViewChild(MyChildComponent, { static: false })
    myChildComponent: MyChildComponent;

    comp1: ComponentRef<MyChildComponent>;
    comp2: ComponentRef<MyChildComponent>;

    curStr: string;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches),
            shareReplay()
        );

    ngOnInit(): void {
        this.eventBusService.eventBus.subscribe(value => this.curStr = value);
    }

    ngAfterContentInit(): void {
    }

    ngAfterViewInit(): void {
        console.log(this.myChildComponent);
        this.myChildComponent.testFunc.subscribe(data => console.log(data));
    }
}
