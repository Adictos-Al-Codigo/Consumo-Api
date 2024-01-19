import { Component } from '@angular/core';
import { ApiTheMoviesDBService } from 'src/app/services/api-the-movies-db.service';



@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {
  Lista_Peliculas:any;
  InfoPelicula:any;
  public page: number = 1;
  Paginacion: number = 1;
  public newData!:string;
  public newPaginacion!:number;

  setPaginacion():void{
    this.Paginacion +=  1;
    this.ObtenerPeliculasPorNombre(this.newData);
  }

  atrasPaginacion():void{
    if(this.Paginacion==1){
      this.Paginacion = 1;
    }else{
      this.Paginacion -= 1;
          this.ObtenerPeliculasPorNombre(this.newData);
    }
  }

  constructor(private apiTheMoviesDBService:ApiTheMoviesDBService){
    this.Lista_Peliculas = null;
  }


  ObtenerPeliculasPorNombre(data:any){

    if(data == "Doraemon"){
      this.newData = 'Doraemon';
    }else{
      this.newData = data.value;
    }

    this.apiTheMoviesDBService.ObtenerPeliculasPorNombre(this.newData,this.Paginacion).subscribe({
      next: (s:any) =>{
        this.Lista_Peliculas = s.results;
        this.newPaginacion = s.total_pages;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  DetallePelicula(idPelicula:number){
    let idPeliculaS = idPelicula.toString();

    this.apiTheMoviesDBService.DetallePelicula(idPeliculaS).subscribe({
      next: (s) =>{
        this.InfoPelicula = s;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  ngOnInit():void{
    if(this.Lista_Peliculas == null){
      this.ObtenerPeliculasPorNombre("Doraemon");
      debugger;
    }
  }
}
