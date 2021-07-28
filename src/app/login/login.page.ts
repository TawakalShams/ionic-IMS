import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { MyserviceService } from "../service/myservice.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  // submitted: any = false;
  loading = false;
  isSubmitted = false;

  constructor(
    public formBuilder: FormBuilder, // private httpClient: HttpClient
    public service: MyserviceService,
    public router: Router,
    public toastController: ToastController
  ) {}

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      platenumber: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  async successfullLogin() {
    const toast = await this.toastController.create({
      cssClass: "my-custom-class",
      message: "Success to loggin.",
      duration: 2000,
      position: "middle",
      mode: "ios",
    });
    toast.present();
  }

  async notsuccessfullLogin() {
    const toast = await this.toastController.create({
      message: "Invalid platenumber or password.",
      duration: 2000,
      position: "middle",
      mode: "ios",
    });
    toast.present();
  }

  submitForm() {
    this.isSubmitted = true;
    this.service.login(this.ionicForm.value).subscribe(
      (data: any) => {
        this.service.setToken(data);
        this.successfullLogin();
        if (this.service.isLoggedIn()) {
          const redirect = this.service.redirectUrl
            ? this.service.redirectUrl
            : "home";
          this.router.navigate([redirect]);
          this.ionicForm.reset();
        }
      },
      (error) => {
        this.notsuccessfullLogin();
      }
    );
  }
  get errorControl() {
    return this.ionicForm.controls;
  }
}
