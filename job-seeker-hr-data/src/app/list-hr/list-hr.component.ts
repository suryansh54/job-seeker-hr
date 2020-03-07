import { Component, OnInit } from '@angular/core';
import { HrService } from '../services/hr.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

export interface IHr {
  id: number;
  name: string;
  email: string;
  linkedinProfileURL: string;
}

@Component({
  selector: 'app-list-hr',
  templateUrl: './list-hr.component.html',
  styleUrls: ['./list-hr.component.scss']
})
export class ListHrComponent implements OnInit {
  dataSource: IHr;
  constructor(
    private hrData: HrService, 
    private _snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute  
  ) { }

  ngOnInit() {
    this.hrList();
  }

  openSnackBar(message: string, duration: number = 3000) {
    this._snackBar.open(message, '', { duration: duration });
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'linkedinProfileURL', 'edit', 'delete'];
  
  hrList() {
    this.hrData.getHr().subscribe(response => {
      this.dataSource = response;
    })
  }

  deleteHr(id: string) {
    this.hrData.deleteHR(id).subscribe(data => {
      console.log(data);
      this.hrList();
      this.openSnackBar(data)
    })
  }

  editHr(id: string) {
    this.router.navigateByUrl('/edit-hr/'+id);
  }

}
