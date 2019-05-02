import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {NewExpensePage} from '../new-expense/new-expense.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(public modalController: ModalController) {
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: NewExpensePage,
            componentProps: {
            }
        });
        return await modal.present();
    }


    ngOnInit() {
    }

    presentModalFunction() {
        this.presentModal().then(data => {
          console.log(data);
        });
    }
}
