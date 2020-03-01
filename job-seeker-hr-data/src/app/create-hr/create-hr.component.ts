import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HrService } from '../services/hr.service'; 

@Component({
  selector: 'app-create-hr',
  templateUrl: './create-hr.component.html',
  styleUrls: ['./create-hr.component.scss']
})
export class CreateHrComponent implements OnInit {

  constructor(private hrData: HrService) { }

  ngOnInit() {
  }
  
  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  hr: FormGroup = new FormGroup({
    name:new FormControl(''),
    email: new FormControl(''),
    linkedinProfileURL: new FormControl('')
  });
  createHr() {
    this.hrData.createHr({...{id: this.uuidv4()}, ...this.hr.value})
    console.log({...{id: this.uuidv4()}, ...this.hr.value})
  }

}
