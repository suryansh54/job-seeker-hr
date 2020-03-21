import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HrService } from '../services/hr.service'; 
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router ,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-create-hr',
  templateUrl: './create-hr.component.html',
  styleUrls: ['./create-hr.component.scss']
})
export class CreateHrComponent implements OnInit {
  hrID: string;
  isCreate: boolean;
  companies: Array<any>;
  constructor(
    private hrData: HrService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.companies = [
      { id: 1, name: 'Microsoft' },
      { id: 2, name: 'Google' },
      { id: 3, name: 'Harman' },
      { id: 4, name: 'NEC' }
    ];
  }

  ngOnInit() {
    this.hrID = this.route.snapshot.paramMap.get('id');
    this.createOrEdit(this.hrID);
    if(this.isCreate == false) {
      this.fetchHRByID(this.hrID)
    }
  }
  
  openSnackBar(message: string, duration: number = 3000) {
    this._snackBar.open(message, '', { duration: duration });
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  hr: FormGroup = new FormGroup({
    name:new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.required),
    linkedinProfileURL: new FormControl(''),
    company: new FormControl(''),
    password: new FormControl('')
  });

  createHr() {
    // Decode hr password here
    this.hrData.createHr({...{id: this.uuidv4()}, ...this.hr.value}).subscribe(data => {
      this.openSnackBar(data);
      this.router.navigateByUrl('/');
    });
  }

  createOrEdit(id) {
    if(id) {
      this.isCreate = false;
    } else {
      this.isCreate = true;
    }
  }

  fetchHRByID(id: string) {
    this.hrData.getHrByID(id).subscribe(data => {
      this.hr.patchValue(data[0]);
    })
  }

  updateHr() {
    this.hrData.updateHR({...{id: this.hrID}, ...this.hr.value}).subscribe(data => {
      this.router.navigateByUrl('/');
      this.openSnackBar(data);
    })
  }

}
