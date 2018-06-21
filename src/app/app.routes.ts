import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent, AboutComponent, PortafolioComponent, ContactoComponent } from './components/index.paginas';

const app_routes: Routes = [
    {path: 'home', component: PortafolioComponent },
    {path: 'about', component: AboutComponent },
    {path: 'producto', component: ProductoComponent },
    {path: 'contacto', component: ContactoComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}

];
export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
