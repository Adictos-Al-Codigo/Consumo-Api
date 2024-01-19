import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './components/autor/autor.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  {
    path: "Autor",
    component: AutorComponent
  },
  {
    path: "Peliculas",
    component: PeliculasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
