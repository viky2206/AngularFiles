import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-binding-assign';
  userName ='';

  checkIfNotEmpty(){
    if(this.userName.localeCompare('')){
      return true;
    }
    return false;
  }
  clear(){
    this.userName='';
  }
}
