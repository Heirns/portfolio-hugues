import { Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: "", redirectTo: "/gallery", pathMatch: "full"},
    {path: "gallery", component: GalleryComponent},
    {path: "about", component: AboutComponent}
];
