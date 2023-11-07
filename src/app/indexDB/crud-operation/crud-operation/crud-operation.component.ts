// import { Component } from '@angular/core';
// import { IndexdbService } from 'src/app/services/index-db/indexdb.service';

// @Component({
//   selector: 'app-crud-operation',
//   templateUrl: './crud-operation.component.html',
//   styleUrls: ['./crud-operation.component.scss']
// })
// export class CrudOperationComponent {
//   constructor(private indexdbService: IndexdbService) { }

//   createDB() {
//     this.indexdbService.dbPromise.then(response => {
//       console.log("Response", response);
//     })

//   }

//   addData() {
//     let data = {
//       name: 'Asad ali',
//       marks: 100,
//     }
//     this.indexdbService.set('key2', data).then(response => {
//       console.log("Response", response);
//     })
//   }


//   getAll() {
//     this.indexdbService.getAll().then(response => {
//       console.log("Response", response);
//     })
//   }

//   get() {
//     this.indexdbService.get('key1').then(response => {
//       console.log("Response", response);
//     })
//   }

//   // delete(id: string) {

//   // }
// }
