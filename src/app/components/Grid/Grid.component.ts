
import { SelectionModel } from '@angular/cdk/collections';
import { Input, ViewChild, OnChanges } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SidebarService } from '../../services/sidebar.service';

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-grid',
  styleUrls: ['Grid.component.scss'],
  templateUrl: 'Grid.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms ease-in-out')),
    ]),
  ],
})
export class GridComponent implements OnChanges {
    constructor(
        public sidebarService: SidebarService,
    ) {
      
    }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input() title = 'Grid Title';
  @Input() notFoundText = 'No Results Found Matching Your Criteria';
  @Input() notFoundIcon;
  @Input() rowActions = []; // actions under elipsis, if column 'actions' is provided
  @Input() gridActions = []; // action buttons above the mat-table
  @Input() tableDef = []; // table definition with header labels
  @Input() isLoading = false;
  @Input() sortable = true;
  @Input() showPagination = true;
  @Input() displayedColumns: string[]; // columns to show
  @Input() selectRowOnClick = true; // either to select row on click
  @Input() dataSource = new MatTableDataSource();
  @Input() onDblClick: any;
  @Input() showSearch = true;
  selection = new SelectionModel(true, []);
  expandedElement;
  ngOnChanges() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  selectRow(row) {
      this.selection.toggle(row);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  dblClickRow = row => {
    this.selection = new SelectionModel(true, []);
    this.onDblClick(row);
  }
  editRow = () => {
    this.selection = new SelectionModel(true, []);
    this.sidebarService.rightPanelOpened = !this.sidebarService.rightPanelOpened;
  }
  /** The label for the checkbox on the passed row */
  checkboxLabel(row?): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}