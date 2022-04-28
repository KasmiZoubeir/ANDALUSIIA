import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home1Page } from './home1.page';

const routes: Routes = [
  {
    path: '',
    component: Home1Page,
    children :[
     
     
      {
        path:'Homme',
        children:[{
          path:'',
          loadChildren:() => import('../home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)
        }]
  
      },
      {
        path:'Homme/:id',
        children:[{
          path:'',
          loadChildren:() => import('../detail-formation/detail-formation.module').then(m => m.DetailFormationPageModule)
        }]
  
      },
      
      {
        path:'Shopping',
        children:[{
          path:'',
          loadChildren:() => import('../shopping/shopping.module').then(m => m.ShoppingPageModule)
        }]
  
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Home1PageRoutingModule {}
