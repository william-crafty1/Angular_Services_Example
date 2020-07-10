import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameServiceService {

  name: string;
  constructor() { }

  getName(){
    return this.name;
  }

  setName(name){
    this.name = name;
  }
}
