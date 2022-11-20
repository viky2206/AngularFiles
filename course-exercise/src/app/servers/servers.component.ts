import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddServer = false;
  count =0;
  serverName = 'fre';
  constructor() { 
    setTimeout(() => {
      this.allowAddServer=true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  addServer(){
    this.count+=1;
  }
  onInput(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value
  }

}
