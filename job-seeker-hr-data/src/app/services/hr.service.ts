import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HrService {
  constructor() {}

  createHr(data: any) {
    let previousData: Array<any> =
      JSON.parse(localStorage.getItem("hr-data")) || [];
    if (previousData.length === 0) {
      previousData.push(data);
      localStorage.setItem("hr-data", JSON.stringify(previousData));
      return of("HR created successfully");
    } else {
      previousData.push(data);
      localStorage.setItem("hr-data", JSON.stringify(previousData));
      return of("HR created successfully");
    }
  }

  getHr() {
    let hrData = JSON.parse(localStorage.getItem("hr-data"));
    if (hrData != null) {
      var removedNullData = hrData.filter(v => {
        return v != null
      })
      // console.log(removedNullData)
      return of(removedNullData);
    } else {
      return of("No Data found");
    }
  }

  getHrByID(id: string) {
    let hrData = JSON.parse(localStorage.getItem("hr-data"));
    if (hrData != null) {
      let hrByID = hrData.filter((v, i) => {
        if(v !== null) {
          return v.id == id;
        }
      });
      return of(hrByID);
    } else {
      return of("No Data found");
    }
  }

  deleteHR(id: string) {
    let hrData: Array<any> = JSON.parse(localStorage.getItem("hr-data"));
    if (hrData != null) {
      let deletedHRData = hrData.filter((v, i) => {
        if(v !== null) {
          return v.id != id;
        }
      });
      localStorage.setItem("hr-data", JSON.stringify(deletedHRData));
      return of("HR removed successfully!");
    } else {
      return of("Data removed");
    }
  }

  updateHR(data: any) {
    const id = data.id;
    let hrData: Array<any> = JSON.parse(localStorage.getItem("hr-data"));
    if (hrData != null) {
      for(let i = 0; i < hrData.length; i ++) {
        if(hrData[i] != null) {
          if(hrData[i].id == id) {
            delete hrData[i];
          }
        }
      }
      hrData.push(data);
      localStorage.setItem("hr-data", JSON.stringify(hrData));
      return of("HR updated successfully!");
    } else {
      return of("Data removed");
    }
  }
}
