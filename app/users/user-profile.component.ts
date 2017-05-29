// importing modules or components
import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
    selector: 'user-profile',       // custom html tag for this component
    template: `                     
        <div class="jumbotron" *ngIf="user">
            <h2>{{ user.name }} <small>{{ user.username }}</small></h2>
            <input class="form-control" [(ngModel)]="user.name">
        </div>
    `                               // html template for this component, it's better to write here if template is small
})
export class UserProfileComponent {
    @Input() user: User;
}