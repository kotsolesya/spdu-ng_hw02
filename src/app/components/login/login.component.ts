import { Component,Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.html'
})

export class LoginComponent {
    @Output() sent = new EventEmitter(); //нова проперті і інстанс евент слушать ктото извне
    @Input() userName: string;//для ангуляра задекларирована


    submit() {
        if(this.userName.length < 2) {
            return;
        }
        this.sent.emit(this.userName); // кинули івент
       // console.log(this.userName);
    }
}
