// importing modules or components
import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',                         // custom html tag for this component
    templateUrl: './app/app.component.html',    // html template for this component
    styleUrls: ['./app/app.component.css']      // css style for this component
})
// class which handles all variable or functions corresponding to this component
export class AppComponent { 
    message: string = "Welcome to Angular2 Demo App";
    users: User[] = [
        { id: 26, name: 'Aavishkar', username: 'aavishkarb' },
        { id: 27, name: 'Ashwani', username: 'kumarashwani' },
        { id: 28, name: 'Ram', username: 'ram' }
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}