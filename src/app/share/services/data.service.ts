import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFollowers } from '../interface/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  endPoint: string = 'https://api.github.com/search/users?q=YOUR_NAME';/* se define variable de donde se van a extraer los datos */
  endPointFollowers:string = 'https://api.github.com/users/Mateus-Brito/followers'/* seguidores */

  constructor(private http: HttpClient) {}
  getData():Observable<any>{/* metodo get para obtener la data*/
    return this.http.get(this.endPoint);
  }
  getFollowers():Observable<IFollowers[]> {/* metodo get para obtener la data*/
    return this.http.get<IFollowers[]>(this.endPointFollowers);
  }
}

