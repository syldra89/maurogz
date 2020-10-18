//imports necesarios
import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//importar componentes
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
/*import { CoursesComponent } from './components/courses/courses.component';*/
import { ErrorComponent } from './components/error/error.component';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';

//definir las rutas
const appRoutes: Routes = [
	{path: ''					, component: HomeComponent},
	{path: 'home'				, component: HomeComponent},
	{path: 'contact'			, component: ContactComponent},
	{path: 'about'				, component: AboutComponent},
	/*{path: 'courses'			, component: CoursesComponent},*/
	{path: 'portfolio'			, component: ProjectsComponent},
	{path: 'services'			, component: ServicesComponent},
	{path: '404'				, component: ErrorComponent},
	{path: 'assets'				, redirectTo: '404'},
	{path: 'projects'			, redirectTo: '404'},
	{path: '**'					, redirectTo: '404'}
];

//exportar la config
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);