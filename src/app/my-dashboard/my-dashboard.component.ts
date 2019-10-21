import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-my-dashboard',
    templateUrl: './my-dashboard.component.html',
    styleUrls: ['./my-dashboard.component.less']
})
export class MyDashboardComponent implements OnInit {

    userName: string;

    constructor() {
    }

    ngOnInit(): void {
    }

    handleUserNameChange($event) {
        this.userName = $event.target.value;
    }
}
