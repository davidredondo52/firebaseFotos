import {RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';
export const App_Routes: Routes = [
    { path: 'fotos', component: FotosComponent },
	{ path: 'carga', component: CargaComponent },
	{ path: '**', pathMatch:'full',redirectTo: 'home' }
] 

export const APP_ROUTING = RouterModule.forRoot(App_Routes);