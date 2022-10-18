import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService, ClassloggerService, MenuItem } from 'qbm';
import { NewMenuComponent } from './new-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

const routes: Routes = [{ path: 'new-menu', component: NewMenuComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [NewMenuComponent, SubMenuComponent],
})
export class NewMenu {
  constructor(private readonly menuService: MenuService, logger: ClassloggerService) {
    logger.info(this, '▶️ custom item loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      const items: MenuItem[] = [];

      if (preProps.includes('ITSHOP')) {
        items.push({
          id: 'CCC_Responsibilities_Delegation',
          route: 'new-menu',
          title: '#LDS#My New CCC Sub Menu',
          sorting: '40-10',
        });
      }

      if (items.length === 0) {
        return null;
      }
      return {
        id: 'ROOT_My_New_CCC_Menu',
        title: '#LDS#My CCC New Menu',
        sorting: '40',
        items,
      };
    });
  }
}
