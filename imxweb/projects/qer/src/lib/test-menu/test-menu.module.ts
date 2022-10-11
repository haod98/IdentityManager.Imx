import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestMenuComponent } from './test-menu.component';
import { MenuService, ClassloggerService, MenuItem } from 'qbm';

@NgModule({
  declarations: [TestMenuComponent],
  imports: [CommonModule],
})
export class TestMenuModule {
  constructor(private readonly menuService: MenuService, logger: ClassloggerService) {
    logger.info(this, '▶️ CUSTOOOOMM loaded');
    this.setupMenu();
  }

  private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      const items: MenuItem[] = [];

      if (preProps.includes('ITSHOP') && preProps.includes('DELEGATION')) {
        items.push({
          id: 'CCC_Responsibilities_Delegation',
          route: 'delegation',
          title: '#LDS#Menu Entry Delegation',
          sorting: '40-10',
        });
      }

      if (items.length === 0) {
        return null;
      }
      return {
        id: 'ROOT_Responsibilitiesssss',
        title: '#LDS#Responsibilitiesssss',
        sorting: '40',
        items,
      };
    });
  }
}
