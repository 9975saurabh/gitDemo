import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { doctor } from 'app/module/doctor/model/doctor.model';
import { DoctorServiceService } from 'app/doctor-service.service';
import { address } from 'app/module/doctor/model/address.model';
import { login } from 'app/module/doctor/model/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // value = "http://localhost:4200/#/dashboard";
  public show = true;
  public notshow = true;
  public username = '';
  public password = '';
  public email = '';
  
  constructor(private router: Router, private doctorservice:DoctorServiceService) {}
doctor=new doctor();
address=new address();
login1=new login();

  ngOnInit() {}

  addDoc(){
    return this.doctorservice.adddoctorservice(this.doctor).subscribe(result=>{})
  }

  DoctorDiv:boolean=true;
 LoginDiv:boolean=false;
 AddressDiv:boolean=false;
SignupDiv:boolean=false;

 Next()
 {
   this.AddressDiv=true;
   this.DoctorDiv=false;
   this.LoginDiv=false;
   this.SignupDiv=false;
 }
 Next1()
 {
   this.AddressDiv=false;
   this.DoctorDiv=false;
   this.LoginDiv=true;
   this.SignupDiv=false;
 }

 pri()
 {
   this.AddressDiv=false;
   this.DoctorDiv=true;
   this.LoginDiv=false;
   this.SignupDiv=false;
 }

 pri1()
 {
   this.AddressDiv=true;
   this.DoctorDiv=false;
   this.LoginDiv=false;
   this.SignupDiv=false;
 }
 Next2()
 {
   this.AddressDiv=false;
   this.DoctorDiv=false;
   this.LoginDiv=false;
   this.SignupDiv=true;
 }



  toggle() {
    console.log('toggle');
    this.show = !this.show;
    // CHANGE THE NAME OF THE BUTTON.
  }
  toggle1() {
    this.show = true;
    // CHANGE THE NAME OF THE BUTTON.
  }
  login(username, password) {
    if (username === 'doctor' && password === 'doctor') {
      console.log('in doctor');
      sessionStorage.setItem('role', 'doctor');
      this.router.navigateByUrl('role/doctor/doctordash');
    }
    if (username === 'emp' && password === 'emp') {
      console.log('in emp');
      sessionStorage.setItem('role', 'emp');
      this.router.navigateByUrl('role/emp/empdash');
    }
    if (username === 'nurse' && password === 'nurse') {
      console.log('in nurse');
      sessionStorage.setItem('role', 'nurse');
      this.router.navigateByUrl('role/nurse/nursedash');
    }
    if (username === 'stu' && password === 'stu') {
      console.log('in student');
      sessionStorage.setItem('role', 'student');
      this.router.navigateByUrl('role/student/studash');
    }
    if (username === 'admin' && password === 'admin') {
      console.log('in admin');
      sessionStorage.setItem('role', 'admin');
      this.router.navigateByUrl('role/admin/admindash');
    }
  }
  
}
