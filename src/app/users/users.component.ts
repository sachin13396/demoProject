import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title = 'reactive-forms';
  users: any;
  ngOnInit(): void {
    this.getData();
  }
  constructor(private http: HttpClient, private fb: FormBuilder) {
    
  }
  profileForm= this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required]],
    emailAddress: ['', [Validators.required]],
    phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    pincode: [''],
    address:['']
  });
 
  get f(){
    return this.profileForm.controls;
  }

 
  getData() {
    const path = "https://reqres.in/api/users";
    this.http.get(path).subscribe((data) => {
      this.users = data['data'];
      console.log(data);
    })


  }
  getDataWithId(id) {

    const path = `https://reqres.in/api/users?id=${id}`;

    this.http.get(path).subscribe((data) => {
      console.log("data for id", data['data'].id, data['data'].email, data['data'].first_name, data['data'].last_name);
      window.alert(`
          Id: ${data['data'].id} 
          Email Id: ${data['data'].email}, 
          First Name: ${data['data'].first_name}  
          Last Name ${data['data'].last_name}`)
    })

  }
  DeleteUser(id) {
    console.log("Id to delete", id);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    const url = `https://reqres.in/api/users/${id}`;

    this.http.delete(url, httpOptions).subscribe((data) => {
      console.log(data);

      this.users = this.users.filter(function (obj) {
        return obj.id !== id;
      });
      alert(`Deleted entry with id: ${id}`);
    });

  }

  postData() {
   
    const path = "https://reqres.in/api/users";
    let data = {
      "first_name": this.profileForm.get("firstName").value,
      "last_name": this.profileForm.get("lastName").value,
      "avatar": 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
      "email": this.profileForm.get("emailAddress").value,
      "phone": this.profileForm.get("phone").value ,
      "address": this.profileForm.get("address").value ,
      "pincode": this.profileForm.get("pincode").value
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    this.http.post(path, data, httpOptions).subscribe((data) => {
      window.alert("New User added successfully");
      console.log(data);
      this.users.push(data);
    })

  }

  updateData() {
    alert("in putData");
  }


}
