import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UsersService } from './rest/users.service';

import { AppComponent } from './app.component';

import { LoginModule } from './components/login/login.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule, // тепер можем форми використовувать
		LoginModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		UsersService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
