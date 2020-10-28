"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.title = 'reactive-forms';
        this.profileForm = this.fb.group({
            firstName: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            lastName: ['', [forms_1.Validators.required]],
            emailAddress: ['', [forms_1.Validators.required]],
            phone: ['', [forms_1.Validators.required, forms_1.Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            pincode: [''],
            address: ['']
        });
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    Object.defineProperty(UsersComponent.prototype, "f", {
        get: function () {
            return this.profileForm.controls;
        },
        enumerable: false,
        configurable: true
    });
    UsersComponent.prototype.getData = function () {
        var _this = this;
        var path = "https://reqres.in/api/users";
        this.http.get(path).subscribe(function (data) {
            _this.users = data['data'];
            console.log(data);
        });
    };
    UsersComponent.prototype.getDataWithId = function (id) {
        var path = "https://reqres.in/api/users?id=" + id;
        this.http.get(path).subscribe(function (data) {
            console.log("data for id", data['data'].id, data['data'].email, data['data'].first_name, data['data'].last_name);
            window.alert("\n          Id: " + data['data'].id + " \n          Email Id: " + data['data'].email + ", \n          First Name: " + data['data'].first_name + "  \n          Last Name " + data['data'].last_name);
        });
    };
    UsersComponent.prototype.DeleteUser = function (id) {
        var _this = this;
        console.log("Id to delete", id);
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var url = "https://reqres.in/api/users/" + id;
        this.http["delete"](url, httpOptions).subscribe(function (data) {
            console.log(data);
            _this.users = _this.users.filter(function (obj) {
                return obj.id !== id;
            });
            alert("Deleted entry with id: " + id);
        });
    };
    UsersComponent.prototype.postData = function () {
        var _this = this;
        var path = "https://reqres.in/api/users";
        var data = {
            "first_name": this.profileForm.get("firstName").value,
            "last_name": this.profileForm.get("lastName").value,
            "avatar": 'https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg',
            "email": this.profileForm.get("emailAddress").value,
            "phone": this.profileForm.get("phone").value,
            "address": this.profileForm.get("address").value,
            "pincode": this.profileForm.get("pincode").value
        };
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.http.post(path, data, httpOptions).subscribe(function (data) {
            window.alert("New User added successfully");
            console.log(data);
            _this.users.push(data);
        });
    };
    UsersComponent.prototype.updateData = function () {
        alert("in putData");
    };
    UsersComponent = __decorate([
        core_1.Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        })
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
