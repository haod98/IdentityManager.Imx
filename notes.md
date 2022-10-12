# Notes
[IdentityManger Repo](https://github.com/OneIdentity/IdentityManager.Imx)

### How to add new menu category

Go to ``./imxweb/projects/qer/src/lib`` folder. Generate a new module and call the ``setupMenu()`` method in the constructor. For example:

  ```private setupMenu(): void {
    this.menuService.addMenuFactories((preProps: string[], groups: string[]) => {
      const items: MenuItem[] = [];

      if (preProps.includes('ITSHOP') {
        // The subitems of the main menu
        items.push({
          id: 'CCC_MySubItems',
          route: 'myRouteOfTheSubItems',
          title: '#LDS#MyNewSubItemName',
          sorting: '40-10',
        });
        // If you want to add more subitems add new object with items.push
      }

      if (items.length === 0) {
        return null;
      }
      // The main menu
      return {
        id: 'ROOT_MyNewMenu',
        title: '#LDS#MyNewMenu',
        sorting: '40',
        items,
      };
    });
  }

  ```

Now go to ``./imxweb/projects/qer/src/public_api.ts`` file and add your module to the exports. Once done, go to ``./imxweb/projects/qer-app-portal/src/app/app.module.ts`` file, import your module from ``qer`` and also add it in the ``@NgModule`` imports array. 
  
**IMPORTANT** 
In order to see the changes you have to rebuild everything again. In our example we need to rebuild ``qbm``, ``qer`` (The order is also important). Like so: ``npm run build qbm && npm run build qer``. If everything works you should see a new menu item. 

---