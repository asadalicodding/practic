import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { serverTimestamp } from '@angular/fire/firestore';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) { }
    collections = {
        collection1: 'collection1'
    }

    baseUrl: string = "https://reqres.in/api/"

    getAllUsers() {
       return this.http.get(this.baseUrl + "users")
    }


}
