import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExecutiveBodyComponent } from './executive-body/executive-body.component';
import { StudentBodyComponent } from './student-body/student-body.component';
import { GalleryComponent } from './gallery/gallery.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'executive-body',
    component: ExecutiveBodyComponent
  },
  {
    path: 'student-body',
    component: StudentBodyComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
