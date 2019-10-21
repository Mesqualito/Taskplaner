import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TasksAppMongoSharedModule } from 'app/shared/shared.module';
import { TaskComponent } from './task.component';
import { TaskDetailComponent } from './task-detail.component';
import { TaskUpdateComponent } from './task-update.component';
import { TaskDeleteDialogComponent, TaskDeletePopupComponent } from './task-delete-dialog.component';
import { taskPopupRoute, taskRoute } from './task.route';

const ENTITY_STATES = [...taskRoute, ...taskPopupRoute];

@NgModule({
  imports: [TasksAppMongoSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [TaskComponent, TaskDetailComponent, TaskUpdateComponent, TaskDeleteDialogComponent, TaskDeletePopupComponent],
  entryComponents: [TaskDeleteDialogComponent]
})
export class TasksAppMongoTaskModule {}
