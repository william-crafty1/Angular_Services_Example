import { Component, OnInit } from '@angular/core';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-name-form',
  templateUrl: './name-form.component.html',
  styleUrls: ['./name-form.component.css']
})
export class NameFormComponent implements OnInit {

  newName: string;
  constructor(private newNameForm:NameServiceService) { }

  ngOnInit() {
  }

  setName(){
    this.newNameForm.setName(this.newName);
  }

}
