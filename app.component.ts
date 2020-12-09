import { Component, OnDestroy, OnInit } from '@angular/core';
import { DemoService } from './demo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-demo';
  city: any;
  dataList: any;
  searchList: Array<any> = [];
  localCitiDetails: Array<any> = [];
  dataFound: Boolean = false;
  ngOnInit() {
    this.getWatherDetails();
  }

  constructor(private demoService: DemoService) { }

  searchCity() {
    this.dataFound = false;
    this.localCitiDetails.push({ "name": this.city });
    if (this.dataList.name === this.city) {
      this.dataFound = true;
    }else{
      this.dataFound = false;
    }
  }

  getWatherDetails() {
    this.demoService.getCitiDetails()
      .subscribe(response => {
        this.dataList = response;
      })
  }

  ResetCity(){
    this.city = "";
    this.dataFound = false;
  }
}
