import { Routes } from '@angular/router';
import { RequestPage } from './request-page/request-page';
import { About } from './about/about';
import { NotFound } from './not-found/not-found';
import { HomePage } from './home-page/home-page';
import { DetailPage } from './detail-page/detail-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'request', component: RequestPage },
  { path: 'about', component: About },
  { path: 'cart/:id', component: DetailPage },
  { path: '**', component: NotFound },
];
