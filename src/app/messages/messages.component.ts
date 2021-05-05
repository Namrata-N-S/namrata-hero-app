import { Component, OnInit } from "@angular/core";
import { MessagesService } from "../messages.service";
@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.css"]
})
export class MessagesComponent implements OnInit {
  constructor(public messagesSerivce: MessagesService) {}

  mymessage = this.messagesSerivce.messages;
  clear() {
    this.messagesSerivce.clear();
  }

  ngOnInit() {}
}
