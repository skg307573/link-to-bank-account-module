import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import { Banks } from '../bank';
import { Router } from '@angular/router';
@Component({
  selector: 'app-select-bank',
  templateUrl: './select-bank.component.html',
  styleUrls: ['./select-bank.component.scss'],
})
export class SelectBankComponent implements OnInit {
  filterargs: string = '';
  typeofBank: Banks[] = [];
  selectedBanks: Banks[] = [];
  constructor(private service: MainService, private router: Router) {}

  ngOnInit(): void {
    this.typeofBank = this.service.getBankData();
  }
  proceedToNxtPage() {
    if (this.selectedBanks.length > 0) {
      this.router.navigateByUrl('/link_bank_account');
      this.service.setSelectedBanks(this.selectedBanks);
    } else {
      alert('Please select min one bank!');
    }
  }
  removeSelectedBank(data: Banks) {
    this.selectedBanks = this.selectedBanks.filter(
      (bank: Banks) => bank.id !== data.id
    );
  }
}
