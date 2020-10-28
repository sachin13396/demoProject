"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, Auth, AuthService) {
        this.router = router;
        this.Auth = Auth;
        this.AuthService = AuthService;
        this.loginForm = new forms_1.FormGroup({
            emailAddress: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var email = this.loginForm.get('emailAddress').value;
        var password = this.loginForm.get('password').value;
        if (email == 'abc@gmail.com' && password == '12345') {
            this.AuthService.isUserLoggedIn(true);
            this.router.navigate(['/main']);
        }
        else {
            this.AuthService.isUserLoggedIn(false);
            window.alert("Please enter valid details");
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
