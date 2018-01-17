import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { UsersService } from './../../rest/users.service';
import { UserDto } from './../../rest/user.dto';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-users',
    templateUrl: './users.html'
})

export class UsersComponent implements OnInit, OnDestroy {
    @Input() currentUser: UserDto;

    private sub: Subscription;
    users: UserDto[] = [];

    constructor( private usersService: UsersService) {}

    ngOnInit() {
        this.sub = this.usersService.get().subscribe(users => this.users = users);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}
