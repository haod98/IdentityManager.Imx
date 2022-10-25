import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService, ClassloggerService, MenuItem } from 'qbm';
import { Routes, RouterModule } from '@angular/router';
import { NewRequestComponent } from './new-request.component';
import { ServiceItemsModule } from '../../service-items/service-items.module';

const routes: Routes = [{ path: 'new-request-item', component: NewRequestComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ServiceItemsModule],
  declarations: [NewRequestComponent],
})
export class NewRequest {
  constructor(private readonly menuService: MenuService, logger: ClassloggerService) {
    logger.info(this, '▶️ new request item loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      const items: MenuItem[] = [];

      if (preProps.includes('ITSHOP')) {
        items.push({
          id: 'CCC_New_Request',
          route: 'new-request-item',
          title: '#LDS# New Request Item Works',
          sorting: '10-30',
        });
      }

      if (items.length === 0) {
        return null;
      }
      return {
        id: 'ROOT_Request',
        title: '#LDS#My CCC New Menu',
        sorting: '10',
        items,
      };
    });
  }
}
