import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrls: ['./warning.component.css']
})
export class WarningComponent implements OnInit {
  @Input() name :'name1'

  ngOnInit(): void {
  }


  check(){
    if (this.name.localeCompare('vignesh') ){
      return true;
    }
    return false;
  }


}
