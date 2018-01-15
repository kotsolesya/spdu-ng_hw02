import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { MessageSendComponent } from './message-send.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule // тепер можем форми використовувать
	],
	declarations: [
		MessageSendComponent
    ],
    exports: [
		MessageSendComponent
	]
})
export class MessageSendModule {}
