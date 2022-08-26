import { Routes } from "@angular/router";
import { SearchPhotosComponent } from "./search-photos/search-photos.component";

export const allAppRoutes: Routes = [
    {
        path: '',
        component: SearchPhotosComponent
    }
];