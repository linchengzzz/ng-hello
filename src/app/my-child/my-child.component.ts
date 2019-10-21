import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    OnInit,
    Output,
    QueryList
} from '@angular/core';
import {flyIn} from './fly-in';
import {MyChildOneComponent} from '../my-child-one/my-child-one.component';

@Component({
    selector: 'app-my-child',
    templateUrl: './my-child.component.html',
    styleUrls: ['./my-child.component.less'],
    animations: [flyIn]
})
export class MyChildComponent implements OnInit, AfterContentInit {

    @Input()
    title: string;

    @Input()
    state: boolean;

    @ContentChildren(MyChildOneComponent)
    myChildOneComponent: QueryList<MyChildOneComponent>;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterContentInit(): void {
        console.log(this.myChildOneComponent);
    }

    handleClick() {
    }
}
