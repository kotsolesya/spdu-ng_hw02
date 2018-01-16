import { Component, OnInit } from '@angular/core';

import { UsersService } from './rest/users.service';
import { UserDto } from './rest/user.dto';

@Component({
	selector: 'app-root',
	templateUrl: './app.html'
})

export class AppComponent implements OnInit {
	authorized = false;
	user: UserDto;
	count = 12;
	//name = 'Tina';
	names: string[] = [];

	constructor(private usersService: UsersService) { }

	addName(name: string) {
		this.names.push(name);
	}

	signOut() {
		localStorage.removeItem('user');
		this.usersService.destroy();
		this.updateAuthorized();
	}

	ngOnInit() {
		this.user = this.getUserFromStorage();
		this.updateAuthorized();
	}

	setUser(user: UserDto) {
		this.user = user;
		this.setUserFromStorage(user);
		this.updateAuthorized();
	}

	private updateAuthorized() {
		this.authorized = !!this.user;
		if (this.authorized) {
			this.usersService.init();
		} else {
			this.usersService.destroy();
		}
	}

	private getUserFromStorage(): UserDto {
		const data = window.localStorage.getItem('user');
		if (!data) {
			return;
		}
		return new UserDto(JSON.parse(data));
	}

	private setUserFromStorage(user: UserDto) {
		window.localStorage.setItem('user', JSON.stringify(user));
	}
}
