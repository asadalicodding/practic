import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  constructor(private firebaseService: FirebaseService,
    private router: Router) {
  }

  data: any[] = [];
  loadding: boolean = false;

  ngOnInit(): void {
    this.getData()
  }
  getData() {
    this.loadding = true;
    this.firebaseService.gets().subscribe(response => {
      this.loadding = false;
      this.data = response;
    })
  }

  gotoEditPage(id: string) {
    this.router.navigate(["/add", id])
  }

  async deleteDocument(id: string) {
    let result = confirm("Are You really want to delete");
    console.log(result);

    if (result) {
      this.firebaseService.delete(id)
    }
  }

}
