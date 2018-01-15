import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UsersService } from './rest/users.service';

import { AppComponent } from './app.component';

import { LoginModule } from './components/login/login.module';
import { UsersModule } from './components/users/users.module';
import { MessagesModule } from './components/messages/messages.module';
import { MessageSendModule } from './components/message-send/message-send.module';
import { MessagesService } from './rest/messages.service';


@NgModule({
	imports: [
		BrowserModule,
		FormsModule, // тепер можем форми використовувать
		LoginModule,
		UsersModule,
		MessagesModule,
		MessageSendModule
	],
	declarations: [
		AppComponent
	],
	providers: [
		UsersService,
		MessagesService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
