import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MyTableDataSource, MyTableItem } from './my-table-datasource';

@Component({
    selector: 'app-my-table',
    templateUrl: './my-table.component.html',
    styleUrls: ['./my-table.component.less']
})
export class MyTableComponent implements AfterViewInit, OnInit {

    @ViewChild(MatPaginator, { static: false })
    paginator: MatPaginator;

    @ViewChild(MatSort, { static: false })
    sort: MatSort;

    @ViewChild(MatTable, { static: false })
    table: MatTable<MyTableItem>;

    dataSource: MyTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name'];

    ngOnInit() {
        this.dataSource = new MyTableDataSource();
    }

    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }
}
