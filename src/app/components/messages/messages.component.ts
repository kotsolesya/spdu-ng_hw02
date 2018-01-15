import { Component,Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { UsersService } from './../../rest/users.service';
import { UserDto } from './../../rest/user.dto';
import { MessagesService } from './../../rest/messages.service';
import { MessageDto } from './../../rest/message.dto';
import { ScrollToDirective } from '../../ui/scroll-to/scroll-to.directive';


@Component({
    selector: 'app-messages',
    templateUrl: './messages.html'
})

export class MessagesComponent {
    @ViewChild(ScrollToDirective) scrollToDirective: ScrollToDirective;

    private messagesSub: Subscription;
    private usersSub: Subscription;

    users: UserDto[] = [];
    messages: MessageDto[] = [];

    constructor(
        private usersService: UsersService,
        private messagesService: MessagesService
    ){}

    ngOnInit() {
        this.messagesService.init();
        this.messagesSub = this.messagesService.get()
                .subscribe(messages => this.messages = messages);
        this.usersSub = this.usersService.get().subscribe(users => this.users = users);
    }

    getUserName(userId: number): string {
        const user = this.users.find(u => u.id === userId);
        if (!user) return;
        return user.name;
    }

    ngOnDestroy() {
        this.messagesSub.unsubscribe();
        this.usersSub.unsubscribe();
    }

}
