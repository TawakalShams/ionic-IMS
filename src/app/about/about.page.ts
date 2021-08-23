import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.page.html",
  styleUrls: ["./about.page.scss"],
})
export class AboutPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  Insuarance() {
    this.router.navigateByUrl("insuarance");
  }
  back() {
    this.router.navigateByUrl("home");
  }
}
