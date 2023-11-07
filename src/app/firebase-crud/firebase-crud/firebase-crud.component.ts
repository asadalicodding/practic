import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase';
import { HttpService } from 'src/app/services/http';

@Component({
  selector: 'app-firebase-crud',
  templateUrl: './firebase-crud.component.html',
  styleUrls: ['./firebase-crud.component.scss']
})
export class FirebaseCrudComponent implements OnInit {
  constructor(private firebaseService: FirebaseService,
    private http: HttpService) { }
  data: any[] = [];
  formAdd = {
    name: '',
    marks: ''
  }
  add() {
    this.firebaseService.post(this.formAdd).then(response => {
      alert("Data save successfully");
    }).catch(err => {
      console.log(err);
      if (!navigator.onLine) {
        // this.indexdbService.set()

      }
    });
    this.formAdd.name = '';
    this.formAdd.marks = '';
  }

  ngOnInit(): void {
    // this.getAll();
    this.getAllFromAPI();
  }

  getAllFromAPI() {
    this.http.getAllUsers().subscribe((response: any) => {
      console.log(response);
      this.data = response.data;
    })
  }

  getAll() {
    this.firebaseService.gets().subscribe(response => {
      console.log("Response is ", response)
      this.data = response;
    })
  }



  backgroundSync() {
    navigator.serviceWorker.ready.then(swRegistration => {
      (swRegistration as any).sync.register('example-1');
    }).catch(console.log)
  }
}
