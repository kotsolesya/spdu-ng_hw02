import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { UsersComponent } from './users.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule // тепер можем форми використовувать
	],
	declarations: [
		UsersComponent
    ],
    exports: [
		UsersComponent
	]
})
export class UsersModule {}
