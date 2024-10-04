import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient);
  baseUrl = environment.apiUrl;
  
  sendMessage(message: any) {
    return this.http.post(this.baseUrl + 'contact', message);
  }
}
