import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { FormularioComponent } from './form/formulario/formulario.component';

const routes: Routes = [
{
  path:"", component: HomeComponent
},
{
  path:"formulario",
  component: FormularioComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
