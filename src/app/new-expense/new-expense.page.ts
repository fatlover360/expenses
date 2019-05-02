import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-new-expense',
  templateUrl: './new-expense.page.html',
  styleUrls: ['./new-expense.page.scss'],
})
export class NewExpensePage implements OnInit {

  constructor(public modal: ModalController) { }

  ngOnInit() {
  }

    dismiss() {
        this.modal.dismiss();
    }
}
