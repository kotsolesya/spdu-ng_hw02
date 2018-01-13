import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule // тепер можем форми використовувать
	],
	declarations: [
		LoginComponent
    ],
    exports: [
		LoginComponent
	]
})
export class LoginModule {}
