import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFollowers, IRepos } from '../interface/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  endPoint: string = 'https://api.github.com/search/users?q=YOUR_NAME';/* se define variable de donde se van a extraer los datos */
  endPointFollowers:string = 'https://api.github.com/users';/* seguidores */
  endPointRepos:string = 'https://api.github.com/users';
  endPointSuscriptions:string= 'https://api.github.com/users/'


  constructor(private http: HttpClient) {}
  getData():Observable<any>{/* metodo get para obtener la data*/
    return this.http.get(this.endPoint);
  }
  getFollowers(user:string):Observable<IFollowers[]> {/* metodo get para obtener la data*/
    return this.http.get<IFollowers[]>(`${this.endPointFollowers}/${user}/followers`);
  }
  getRepos(userRepo:string):Observable<IRepos[]> {/* metodo get para obtener la data*/
    return this.http.get<IRepos[]>(`${this.endPointFollowers}/${userRepo}/repos`);
  }
  getSuscriptions(userSuscription:string):Observable<IRepos[]> {/* metodo get para obtener la data*/
    return this.http.get<IRepos[]>(`${this.endPointFollowers}/${userSuscription}/subscriptions`);
  }
}

