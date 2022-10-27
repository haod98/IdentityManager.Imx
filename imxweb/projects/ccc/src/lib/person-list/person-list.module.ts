import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonListComponent } from './person-list.component';

import { IdentitiesModule, DataExplorerIdentitiesComponent } from 'qer';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'person-list', component: DataExplorerIdentitiesComponent }];

@NgModule({
  declarations: [PersonListComponent],
  imports: [CommonModule, IdentitiesModule, RouterModule.forChild(routes)],
})
export class PersonListModule {}
