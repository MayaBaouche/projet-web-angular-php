import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './models/user.model';
import { environment } from '../environments/environment';
import { catchError } from 'rxjs/operators';
import { Product } from './models/product.model';
import { Category } from './models/category.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

const httpGet = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable()

export class ApiService {
  
  constructor(private httpClient: HttpClient) {  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  addUser(user: User): Observable<User>
  {
    console.log("ici");
    return this.httpClient.post<User>(environment.backend+"/register", user, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProducts(): Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(environment.backendProduct)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getProductsByCategory(categoryName : String): Observable<Product[]>
  {
    return this.httpClient.get<Product[]>(environment.backend+"/productsByCategory/"+categoryName)
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductsByFilters(nameFilter : string = "", categoryName : string = ""): Observable<Product[]>
  {
    let params = new HttpParams()
                        .set("categoryName", categoryName)
                        .set("nameFilter", nameFilter); 
    return this.httpClient.get<Product[]>(environment.backend+"/productsFiltered", 
                                          {headers: httpGet.headers, params: params})
      .pipe(
        catchError(this.handleError)
      );
  }

  getCategories(): Observable<Category[]>
  {
    return this.httpClient.get<Category[]>(environment.backend+"/categories")
      .pipe(
        catchError(this.handleError)
      );
  }

  getProductById(productId: number): Observable<Product>
  {
    return this.httpClient.get<Product>(environment.backend+"/product/"+productId)
      .pipe(
        catchError(this.handleError)
      );
  }

  login(login: string, password: string) : Observable<any>
  {
    let headersHttp = new HttpHeaders();
    let token = btoa('${login}:${password}');
    headersHttp = headersHttp.append("Authorization", "Basic " + token);

    const http = {
      headers: headersHttp
    };

    return this.httpClient.post<User>(environment.login, {login, password}, http)
      .pipe(
        catchError(this.handleError)
      ); 
  }

}
