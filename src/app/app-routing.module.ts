import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListViewsComponent } from './list-views/list-views.component';
import { LoginComponent } from './login/login.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'posts/:variable',
        component:PostDetailComponent
    },
    {
        path:'list-videos',
        component:ListViewsComponent
    },
    {
        path: 'login',
        component:LoginComponent
      }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}