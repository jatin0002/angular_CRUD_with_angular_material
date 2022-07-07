import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL: string = 'http://localhost:3000/productList/';

  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(this.BASE_URL, data);
  }

  getProduct() {
    return this.http.get<any>(this.BASE_URL);
  }

  editProduct(data: any, id: number) {
    return this.http.put<any>(this.BASE_URL + id, data);
  }

  deleteProduct(id: number) {
    return this.http.delete<any>(this.BASE_URL + id);
  }
}
