import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { TestMenuComponent } from './test-menu.component';
import { MenuService, ClassloggerService, MenuItem } from 'qbm';

@NgModule({
  // declarations: [TestMenuComponent],
  imports: [CommonModule],
})
export class MyNewMenu {
  constructor(private readonly menuService: MenuService, logger: ClassloggerService) {
    logger.info(this, '▶️ CUSTOOOOMM loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      const items: MenuItem[] = [];

      if (preProps.includes('ITSHOP')) {
        items.push({
          id: 'CCC_Responsibilities_Delegation',
          route: 'delegation',
          title: '#LDS#My New Sub Menu',
          sorting: '40-10',
        });
      }

      if (items.length === 0) {
        return null;
      }
      return {
        id: 'ROOT_My New Menu',
        title: '#LDS#My New Menu',
        sorting: '40',
        items,
      };
    });
  }
}
