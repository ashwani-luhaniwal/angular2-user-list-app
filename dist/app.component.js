"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing modules or components
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.message = "Welcome to Angular2 Demo App";
        this.users = [
            { id: 26, name: 'Aavishkar', username: 'aavishkarb' },
            { id: 27, name: 'Ashwani', username: 'kumarashwani' },
            { id: 28, name: 'Ram', username: 'ram' }
        ];
    }
    AppComponent.prototype.selectUser = function (user) {
        this.activeUser = user;
        console.log(this.activeUser);
    };
    AppComponent.prototype.onUserCreated = function (event) {
        this.users.push(event.user);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/app.component.html',
        styleUrls: ['./app/app.component.css'] // css style for this component
    })
    // class which handles all variable or functions corresponding to this component
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map