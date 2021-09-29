import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/account',
        pathMatch: 'full',
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../avatar/avatar.module').then((m) => m.AvatarPageModule),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('../list/list.module').then((m) => m.ListPageModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('../infinite-scroll/infinite-scroll.module').then(
            (m) => m.InfiniteScrollPageModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
