import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor() { }

  createHr(data: any) {
    let previousData = localStorage.getItem('hr-data') || [];
    let latestData = [previousData, data];
    let hrData = localStorage.setItem('hr-data', JSON.stringify(latestData));
    if (hrData != null) {
      return of(hrData)
    } else {
      return of("HR saved successfully")
    }
  }

  getHr() {
    let hrData = localStorage.getItem('hr-data');
    if (hrData != null) {
      return of(hrData)
    } else {
      return of("No Data found")
    }
  }
  
  /*getHrByID(id: number) {
    let hrData = localStorage.getItem('hr-data');
    if (hrData != null) {
      hrData.filter((v, i) => {
        return v.id == id;
      })
    } else {
      return of("No Data found")
    }
  }

  removeHR(id: number) {
    let hrData = localStorage.getItem('hr-data');
    if (hrData != null) {
      hrData.filter((v, i) => {
        return v.id != id;
      })
    } else {
      return of("Data removed")
    }
  }*/
}
