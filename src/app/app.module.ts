import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailsComponent } from "./hero-details/hero-details.component";
import { MessagesComponent } from "./messages/messages.component";
import { MessagesService } from "./messages.service";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailsComponent,
    MessagesComponent
  ],
  bootstrap: [AppComponent],
  providers: [MessagesService]
})
export class AppModule {}
