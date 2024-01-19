import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiTheMoviesDBService {

  ApiKey:string = '435a680aac6331beaf591ad78cfc73f9';

  constructor(private httpClient:HttpClient) {

  }

  ObtenerPeliculasPorNombre(Data:String, page:number){
    return this.httpClient.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.ApiKey + '&language=es-ES&query=' + Data + '&page=' +  page + '&include_adult=true');
  }

  DetallePelicula(idString:String){
    return this.httpClient.get('https://api.themoviedb.org/3/movie/' + idString + '?api_key=' + this.ApiKey  + '&language=es-ES');
  }

  ConsultarAutor(nombreAutor:String){
    return this.httpClient.get('https://api.themoviedb.org/3/search/person?api_key=' + this.ApiKey + '&language=es-ES&query=' + nombreAutor + '&page=1&include_adult=true')
  }
}
