import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/common/services/alert.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Subject} from 'rxjs';
import { Task } from 'src/app/api/models/doubtfire-model';

@Component({
  selector: 'task-assessment-modal',
  templateUrl: './task-assessment-modal.component.html',
  styleUrls: ['./task-assessment-modal.component.scss'],
})
export class TaskAssessmentModalComponent implements OnInit {
  @Input() task: Task;
  noDataFlag: boolean;
  refreshTrigger: Subject<boolean> = new Subject();

  constructor(
    public dialogRef: MatDialogRef<TaskAssessmentModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(AlertService) private alerts: any, ) { }

  ngOnInit() {
    this.task = this.data;
  }

  setNoDataFlag($event) {
    this.noDataFlag = $event;
  }

  resfreshChildComponent(){
    this.refreshTrigger.next(true);
  }
}
