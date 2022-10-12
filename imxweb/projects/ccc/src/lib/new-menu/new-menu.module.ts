import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService, ClassloggerService, MenuItem } from 'qbm';
import { NewMenuComponent } from './new-menu.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'ccc-test', component: NewMenuComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [NewMenuComponent],
})
export class NewMenu {
  constructor(private readonly menuService: MenuService, logger: ClassloggerService) {
    logger.info(this, '▶️ CCC loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      const items: MenuItem[] = [];

      if (preProps.includes('ITSHOP')) {
        items.push({
          id: 'CCC_Responsibilities_Delegation_CCC',
          route: 'ccc-test',
          title: '#LDS#My New CCC Sub Menu',
          sorting: '40-10',
        });
      }

      if (items.length === 0) {
        return null;
      }
      return {
        id: 'ROOT_My New CCC Menu',
        title: '#LDS#My CCC New Menu',
        sorting: '40',
        items,
      };
    });
  }
}
