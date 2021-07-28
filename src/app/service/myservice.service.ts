import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { baseUrl } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: "root",
})
export class MyserviceService {
  redirectUrl: any;

  constructor(
    private httpClient: HttpClient,
    public jwtHelper: JwtHelperService,
    public router: Router
  ) {}
  login(data: any): Observable<any> {
    return this.httpClient.post<any>(baseUrl + "/customerlogin", data);
  }
  setToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
    return localStorage.getItem("token");
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true;
    }
    return false;
  }

  public isAuthenticated(): boolean {
    const token: string | null = this.getToken();
    return !this.jwtHelper.isTokenExpired(token as string);
  }

  // =============================Insuarance SINGLE INSUARANCE======================================
  getSingleInsuaranceData(platenumber: any) {
    return this.httpClient.get(
      baseUrl + "/singleInsuarance" + "/" + platenumber
    );
  }

  // =============================Insuarance CRUD======================================
  createInsuarance(data: any): Observable<any> {
    return this.httpClient.post(baseUrl + "/insuarance", data);
  }
  viewInsuarance() {
    return this.httpClient.get(baseUrl + "/insuarance");
  }

  getSingleInsuarance(platenumber: any) {
    return this.httpClient.get(baseUrl + "/insuarance" + "/" + platenumber);
  }
  updateInsuarance(insuaranceid: any, data: any) {
    return this.httpClient.put(
      baseUrl + "/insuarance" + "/" + insuaranceid,
      data
    );
  }
  deleteInsuarance(insuaranceid: any) {
    return this.httpClient.delete(baseUrl + "/insuarance" + "/" + insuaranceid);
  }

  logout() {
    localStorage.removeItem("token");
  }
}
