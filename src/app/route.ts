import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from "./gallery/gallery.component";

export const routes: Routes = [
    {
        path: '',
        component: GalleryComponent
    }
];

export const routing = RouterModule.forRoot(routes);