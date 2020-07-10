import { Component, OnInit } from '@angular/core';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-name-display',
  templateUrl: './name-display.component.html',
  styleUrls: ['./name-display.component.css']
})
export class NameDisplayComponent implements OnInit {

  newName: string
  constructor(private NameService:NameServiceService){ }

  ngOnInit() {
  }

  getName(){
    this.newName = this.NameService.getName();
  }

}
