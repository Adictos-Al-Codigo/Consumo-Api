import { Component } from '@angular/core';
import { ApiTheMoviesDBService } from 'src/app/services/api-the-movies-db.service';


@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.scss']
})
export class AutorComponent {
  DataAutor:any;

  constructor(private apiTheMoviesDBService:ApiTheMoviesDBService){
    
  }


  ConsultarAutor(NombreAutor:String){
    this.apiTheMoviesDBService.ConsultarAutor(NombreAutor).subscribe({
      next: (s:any) =>{
        this.DataAutor = s.results;
      },
      error: (err) =>{
        console.error(err);
      }
    })
  }

  ngOnInit():void{
    if(!this.DataAutor){
      this.ConsultarAutor("Mr Bean");
    }
  }
}
