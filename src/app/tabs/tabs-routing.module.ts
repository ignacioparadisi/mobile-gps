import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'routes',
        children: [
          {
            path: '',
            loadChildren: () => import('../routes/routes.module').then(m => m.RoutesPageModule)
          },
          { 
            path: ':id', 
            loadChildren: () => import('../route-detail/route-detail.module').then( m => m.RouteDetailPageModule)
          }
        ]
        
      },
      {
        path: 'tracker',
        loadChildren: () => import('../tracker/tracker.module').then(m => m.TrackerPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/routes',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
