import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor(private firebaseService: FirebaseService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
  }


  customerForm = {
    name: '',
    root: '',
    address: ''
  };

  id: string = '';
  loadding: boolean = false;

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id != 'addDocument') this.getDocument();
  }

  getDocument() {
    this.loadding = true;
    this.firebaseService.get(this.id).subscribe(respose => {
      this.loadding = false;
      this.customerForm.name = respose.name;
      this.customerForm.address = respose.address;
      this.customerForm.root = respose.root;
    })
  }

  submit() {
    console.log(this.customerForm);
    this.loadding = true;
    if (this.id != 'addDocument') {
      this.firebaseService.put(this.id, this.customerForm);
      this.router.navigate(["/display"])
    } else {
      this.firebaseService.post(this.customerForm);
    }
    this.loadding = false;
    this.customerForm.name = this.customerForm.address = this.customerForm.root = "";
  }
}
