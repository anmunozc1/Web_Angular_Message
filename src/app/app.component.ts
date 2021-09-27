
import { Component, OnInit } from '@angular/core';
import { Message } from './models/message';
import { MessageService } from './service/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notFound = false;
  message : Message;
  idLanguage : any;
  name: any;
  txtResult: string;

  
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  getMessage(param: string) {
    this.notFound = false;
    this.message = null;

    this.messageService.getMessage(+this.idLanguage).subscribe((userFromTheAPI : Message) => {
      if(param=='1'){
        alert(userFromTheAPI.arrival_Message +  " " +this.name)
      }
      if(param=='2'){
        alert(userFromTheAPI.name_Message +  " " +this.name)
      }
      if(param=='3'){
        alert(userFromTheAPI.goodbye_Message +  " " +this.name)
      }

    }, (err: any) => {
      console.error(err);
      this.notFound = true;
    });
  }

}
