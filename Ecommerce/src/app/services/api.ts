import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  register(data:any){

    return this.http.post(
      this.apiUrl + 'register/',
      data
    );

  }

  login(data:any){

    return this.http.post(
      this.apiUrl + 'login/',
      data
    );

  }

  placeOrder(data:any){

  return this.http.post(

    'http://127.0.0.1:8000/api/placeorder/',

    data

  );

}
getMyOrders(data:any){

  return this.http.post(

    'http://127.0.0.1:8000/api/myorders/',

    data

  );

}

addWishlist(data:any){

  return this.http.post(

    'http://127.0.0.1:8000/api/addwishlist/',

    data

  );

}

getWishlist(data:any){

  return this.http.post(

    'http://127.0.0.1:8000/api/getwishlist/',

    data

  );

}

removeWishlist(data:any){

  return this.http.post(

    'http://127.0.0.1:8000/api/removewishlist/',

    data

  );

}
}