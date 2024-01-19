import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiTheMoviesDBService {

  ApiKey:string = '435a680aac6331beaf591ad78cfc73f9';

  constructor(private httpClient:HttpClient) {

  }

  ObtenerPeliculasPorNombre(Data:String){
    return this.httpClient.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.ApiKey + '&language=es-ES&query=' + Data + '&page=1&include_adult=true');
  }
}
