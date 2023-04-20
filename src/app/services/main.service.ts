import { Injectable } from '@angular/core';
import { Banks } from '../pages/bank';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private typeofBank: Banks[] = [
    {
      id: 1,
      bank_name: 'Bank Of Baroda ',
      logo: 'assets/banks/banks/bank4.svg',
      selected: false,
      linked_status: true,
      account_type: 'Saving',
      account_number: 1234567897658346,
    },
    {
      id: 2,
      bank_name: 'Airtel Payments Bank ',
      logo: 'assets/banks/banks/bank5.svg',
      selected: false,
      linked_status: false,
      account_type: 'Saving',
      account_number: 8834567697658346,
    },
    {
      id: 3,
      bank_name: 'HDFC Bank',
      logo: 'assets/banks/banks/bank3.svg',
      selected: false,
      linked_status: true,
      account_type: 'Current',
      account_number: 8834567897658346,
    },
    {
      id: 4,
      bank_name: 'Andhra Bank',
      logo: 'assets/banks/banks/bank6.png',
      selected: false,
      linked_status: false,
      account_type: 'Saving',
      account_number: 2964567897858346,
    },
    {
      id: 5,
      bank_name: 'Aapna Bank',
      logo: 'assets/banks/banks/bank1.svg',
      selected: false,
      linked_status: true,
      account_type: 'Current',
      account_number: 4934567897858346,
    },
    {
      id: 6,
      bank_name: 'Kotak Mahindra Bank Limited',
      logo: 'assets/banks/banks/bank2.svg',
      selected: false,
      linked_status: false,
      account_type: 'Saving',
      account_number: 4664567897858346,
    }
  ];
  private selectedData: Banks[] = [];
  constructor() {}

  getBankData() {
    return this.typeofBank;
  }
  setSelectedBanks(data: Banks[]) {
    this.selectedData = data;
  }
  getSelectedBankData() {
    return this.selectedData;
  }
}
