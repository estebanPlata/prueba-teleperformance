import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  endPoint: string = 'https://api.github.com/search/users?q=YOUR_NAME';/* se define variable de donde se van a extraer los datos */
  constructor(private http: HttpClient) {}
  getData() {/* metodo get para obtener la data*/
    return this.http.get(this.endPoint);
  }
  getDataName(login:string){/* metodo get para obtener data por nombre */
    return this.http.get(`${this.endPoint}/${login}`)

    }
}

