import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor() { }

  createHr(data: any) {
    let previousData: Array<any> = JSON.parse(localStorage.getItem('hr-data')) || [];
    if(previousData.length === 0) {
      previousData.push(data);
      localStorage.setItem('hr-data', JSON.stringify(previousData));
      return of("HR created successfully");
    } else {
      previousData.push(data);
      localStorage.setItem('hr-data', JSON.stringify(previousData));
      return of("HR created successfully");
    }
  }

  getHr() {
    let hrData = JSON.parse(localStorage.getItem('hr-data'));
    if (hrData != null) {
      return of(hrData)
    } else {
      return of("No Data found")
    }
  }
  
  getHrByID(id: string) {
    let hrData = JSON.parse(localStorage.getItem('hr-data'));
    if (hrData != null) {
      let hrByID = hrData.filter((v, i) => {
        return v.id == id;
      })
      return of(hrByID);
    } else {
      return of("No Data found")
    }
  }

  deleteHR(id: string) {
    let hrData:Array<any> = JSON.parse(localStorage.getItem('hr-data'));
    if (hrData != null) {
      let deletedHRData = hrData.filter((v, i) => {
        return v.id != id;
      })
      localStorage.setItem('hr-data', JSON.stringify(deletedHRData));
      return of("HR removed successfully!")
    } else {
      return of("Data removed")
    }
  }
}
