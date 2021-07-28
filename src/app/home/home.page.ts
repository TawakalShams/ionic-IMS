import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastController } from "@ionic/angular";
import { MyserviceService } from "../service/myservice.service";

export interface DecodedToken {
  fullName?: string;
  insuarnaceid?: string;
  platenumber?: string;
}

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  mystatus: any;
  fullName?: string;
  insuarnaceid?: any;
  platenumber?: any;
  address: any;
  phone: any;
  model: any;
  value: any;
  typeOfInsuarance: any;
  startdate: any;
  enddate: any;
  AllData: any;
  constructor(
    private service: MyserviceService,
    private helper: JwtHelperService,
    private router: Router,
    public toastController: ToastController
  ) {
    const token = localStorage.getItem("token");
    const decodedToken: DecodedToken = helper.decodeToken(token as string);
    this.fullName = decodedToken.fullName;
    this.insuarnaceid = decodedToken.insuarnaceid;
    this.platenumber = decodedToken.platenumber;
    // console.log("this" + this.platenumber);
  }
  ngOnInit() {
    this.service.viewInsuarance().subscribe((res) => {
      const mystatus: any = res;

      const allStatus = mystatus.map((item) => item.address);
      this.service
        .getSingleInsuaranceData(this.platenumber)
        .subscribe((data: any) => {
          this.AllData = data;
          this.address = this.AllData.insuarnce.address;
          this.phone = this.AllData.insuarnce.phone;
          this.model = this.AllData.insuarnce.model;
          this.value = this.AllData.insuarnce.value;
          this.typeOfInsuarance = this.AllData.insuarnce.typeOfInsuarance;
          this.startdate = this.AllData.insuarnce.startdate;
          this.enddate = this.AllData.insuarnce.enddate;
        });
    });

    this.service
      .getSingleInsuarance(this.insuarnaceid)
      .subscribe((data: any) => {
        // this.form.controls.fullName.setValue(this.Datas.fullName);
      });
  }
  async logoutToaster() {
    const toast = await this.toastController.create({
      message: "Logout.",
      duration: 2000,
      position: "middle",
      mode: "ios",
    });
    toast.present();
  }

  logout() {
    const log = this.service.logout();
    const redirect = this.service.redirectUrl
      ? this.service.redirectUrl
      : "/login";
    this.router.navigate([redirect]);
    this.logoutToaster();
  }
}
