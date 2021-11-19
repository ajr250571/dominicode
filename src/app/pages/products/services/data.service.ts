import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from 'src/app/shared/interfaces/store.interface';

@Injectable({providedIn: 'root'})
export class DataService {
  private apiUrl="http://localhost:3000/stores";
  constructor(private http:HttpClient) {   }

  getProducts():Observable<Store[]>{
    return this.http.get<Store[]>(this.apiUrl);


}
