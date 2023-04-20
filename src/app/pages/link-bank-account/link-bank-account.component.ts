import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Banks } from '../bank';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-link-bank-account',
  templateUrl: './link-bank-account.component.html',
  styleUrls: ['./link-bank-account.component.scss'],
})
export class LinkBankAccountComponent implements OnInit {
  selectedBanks: Banks[] = [];
  display = 'none';
  addingBank: any;
  MyOtp: String = '';
  num:number=30;
  constructor(private service: MainService, private route: Router) {}

  ngOnInit(): void {
    this.selectedBanks = this.service.getSelectedBankData();
    if (this.selectedBanks.length == 0) {
      this.route.navigateByUrl('/select_bank');
    }
  }

  addBank() {
    this.route.navigateByUrl('/select_bank');
  }
  getOtp() {}

  openModal(data: Banks) {
    this.addingBank = data;
    this.display = 'block';
    this.MyOtp = '';
    this.num=30;
    this.startOTPCounter();
  }
  onCloseHandled() {
    this.display = 'none';
  }
  verifyOtp() {
    // I'm considering otp is valid.
    if (!this.MyOtp) {
      return;
    }
    this.selectedBanks.map((val, i) => {
      if (val.id == this.addingBank.id) {
        val.linked_status = true;
      }
      return val;
    });
    this.onCloseHandled();
  }
  removeSeelcted(data:Banks){
    let cnf=confirm("Are you sure want to delete?");
    if(cnf){
    this.selectedBanks=this.selectedBanks.filter(
      (bank: Banks) => bank.id !== data.id
    );
    }
  }
  startOTPCounter(){
  // I'm assuming OTP will come in every 10 sec.
   let id= setInterval(()=>{
        if(this.num>20){
          this.num-=1;
        }else{
          clearInterval(id);
        }
    },1000)
  }
}
