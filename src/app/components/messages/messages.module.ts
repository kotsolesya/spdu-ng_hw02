import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MessagesComponent } from './messages.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule // тепер можем форми використовувать
	],
	declarations: [
		MessagesComponent
    ],
    exports: [
		MessagesComponent
	]
})
export class MessagesModule {}
