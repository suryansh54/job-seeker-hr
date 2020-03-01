import { Component, OnInit } from '@angular/core';

export interface IHr {
  id: number;
  name: string;
  email: string;
  linkedinProfileURL: string;
}

const ELEMENT_DATA: IHr[] = [
  {id: 1, name: 'HR 1', email: 'hr1@gmail.com', linkedinProfileURL: 'H'},
  {id: 2, name: 'HR 2', email: 'hr2@gmail.com', linkedinProfileURL: 'He'},
  {id: 3, name: 'HR 3', email: 'hr3@gmail.com', linkedinProfileURL: 'Li'},
];

@Component({
  selector: 'app-list-hr',
  templateUrl: './list-hr.component.html',
  styleUrls: ['./list-hr.component.scss']
})
export class ListHrComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'linkedinProfileURL'];
  dataSource = ELEMENT_DATA;

}
