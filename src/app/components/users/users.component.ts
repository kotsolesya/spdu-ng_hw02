import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { UsersService } from './../../rest/users.service';
import { UserDto } from './../../rest/user.dto';

@Component({
    selector: 'app-users',
    templateUrl: './users.html'
})

export class UsersComponent {
    @Input() currentUser: UserDto;

    private sub: Subscription;
    users: UserDto[] = [];

    constructor(private usersService: UsersService){}

    ngOnInit() {
        this.sub = this.usersService.get().subscribe(users => this.users = users);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
