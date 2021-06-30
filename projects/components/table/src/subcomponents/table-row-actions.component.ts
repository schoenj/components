import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';

import { PsTableDataSource } from '../data/table-data-source';
import { PsTableAction } from '../models';

@Component({
  selector: 'ps-table-row-actions',
  templateUrl: './table-row-actions.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsTableRowActionsComponent implements OnChanges {
  @Input() public actions: PsTableAction<any>[];
  @Input() public actionsTemplate: TemplateRef<any> | null = null;
  @Input() public dataSource: PsTableDataSource<{ [key: string]: any }>;
  @Input() public moreMenuThreshold: number;
  @Input() public item: any;

  public itemAsArray: any[];

  public ngOnChanges(changes: SimpleChanges) {
    if (changes.item) {
      this.itemAsArray = [this.item];
    }
  }
}
