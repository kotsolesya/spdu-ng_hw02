import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { UsersService } from '../../rest/users.service';
import { UserDto } from '../../rest/user.dto';

@Component({
    selector: 'app-login',
    templateUrl: './login.html'
})

export class LoginComponent {
    @Output() sent = new EventEmitter();
    @Input() userName: string;


    constructor(private usersService: UsersService) { }

    submit() {
        if (this.userName.length < 2) {
            return;
        }
        const user = new UserDto();
        user.id = (new Date).getTime();
        user.name = this.userName;
        this.usersService.add(user).subscribe(() => {
            this.sent.emit(user);
        });
    }

}
