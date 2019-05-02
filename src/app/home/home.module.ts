import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import {NewExpensePage} from '../new-expense/new-expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
        {
            path: 'new-expense',
            component: NewExpensePage
        }
    ])
  ],
  declarations: [HomePage, NewExpensePage]
})
export class HomePageModule {}
