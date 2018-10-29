import { SubredditComponent } from './subreddit/subreddit.component';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { AddPostComponent } from './add-post/add-post.component';


const appRoutes: Routes = [
  {
    path: '', component: SubredditComponent
  },
  {
    path: 'r/:id', component: HomePageComponent
  },
  {
    path: 'edit', component: EditPostComponent
  },
  { path: 'add', component: AddPostComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);