import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from './sub-menu.component';
import { Routes, RouterModule } from '@angular/router';
import { MenuService, ClassloggerService, MenuItem } from 'qbm';
const routes: Routes = [{ path: 'sub-menu', component: SubMenuComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SubMenuModule {
  constructor(private readonly menuService: MenuService, logger: ClassloggerService) {
    logger.info(this, '▶️ custom item loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      const items: MenuItem[] = [];

      if (preProps.includes('ITSHOP')) {
        items.push({
          id: 'CCC_Sub_menu',
          route: 'sub-menu',
          title: '#LDS#My New Sub Menu',
          sorting: '40-20',
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
