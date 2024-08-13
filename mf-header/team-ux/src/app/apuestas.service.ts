import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApuestasService {

  private apiUrl = 'http://localhost:3000/apuestas';

  constructor(private http: HttpClient) { }

  // Obtener todas las apuestas
  getApuestas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

