import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Message } from '../models/message'

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  baseUrl = environment.apiUrl + 'MessageApp/';
  constructor(private  http: HttpClient) { }

  getMessage(Id: number): Observable<Message>{
    const url = this.baseUrl + Id;
    return this.http.get<Message>(url);
  }
}
