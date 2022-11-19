import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  @Input() name :'name1'
  constructor() { }

  ngOnInit(): void {
  }

  check(){
    if(this.name.localeCompare('vignesh')){
      return true;
    }else{
      return false;
    }
  }

}
