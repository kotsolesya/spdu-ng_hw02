import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MessagesService } from '../../rest/messages.service';
import { MessageDto } from './../../rest/message.dto';

@Component({
    selector: 'app-message-send',
    templateUrl: './message-send.html'
})

export class MessageSendComponent {
    @Output() sent = new EventEmitter<never>();
    @Input() userId: number;

    textMessage: string;

    constructor(private messagesService: MessagesService) { }

    send() {
        const message = new MessageDto();
        message.date = new Date(Date.now());
        message.text = this.textMessage;
        message.userId = this.userId;
        this.textMessage = '';
        this.messagesService.add(message).subscribe(() => {
            this.sent.emit();
        });
    }
}
