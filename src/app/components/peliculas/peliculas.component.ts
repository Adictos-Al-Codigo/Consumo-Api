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

  constructor(private apiTheMoviesDBService:ApiTheMoviesDBService){
    this.Lista_Peliculas = null;
  }


  ObtenerPeliculasPorNombre(data:any){
    let newData;

    if(data == "Doraemon"){
       newData = 'Doraemon';
    }else{
      newData = data.value;
    }

    this.apiTheMoviesDBService.ObtenerPeliculasPorNombre(newData).subscribe({
      next: (s:any) =>{
        this.Lista_Peliculas = s.results;
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
