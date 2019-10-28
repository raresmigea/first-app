import { Component, OnInit, TemplateRef, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tda',
  templateUrl: './tda.component.html',
  styleUrls: ['./tda.component.css']
})

export class TdaComponent implements OnInit {

  todayFull = new Date();
  tdaForToday = false;
  datesArray = [];
  currentDate = "";

  /** The values used for the intervals of Time Dependent Attribute */
  firstDate = new Date("2017-12-12");
  secondDate = new Date("2018-12-12");
  thirdDate = new Date("2019-12-12");

  /**Computing the value of today's date */
  day =  String(this.todayFull.getDate()).padStart(2, '0');
  month = String(this.todayFull.getMonth() + 1).padStart(2, '0');
  year = this.todayFull.getFullYear(); 
  today = `${this.year}-${this.month}-${this.day}`;

  /** checkDate() computes if the date has TDA active or not */
  checkDate(dateToCheck) {
    if (!dateToCheck) {
      dateToCheck = this.todayFull;
    }
    let dateToCheckFormated2 = new Date(dateToCheck);
    if ((dateToCheckFormated2 > this.firstDate && dateToCheckFormated2 < this.secondDate)
     || dateToCheckFormated2 > this.thirdDate) {
      return true;
    } else {
      return false;
    }
    
  }

  
  addNewTda() {
    this.tdaForToday = this.checkDate(this.currentDate)
    if (this.currentDate) {
      this.datesArray.push({ date: this.currentDate, active: this.tdaForToday});
    }
  }

  ngOnInit() {
    this.checkDate();
 }

}
