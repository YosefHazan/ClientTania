import { Injectable } from '@angular/core';
import { fullHebrewDate } from '../classes/fullHebrewDate';
//"use strict";

@Injectable({
  providedIn: 'root'
})
export class HebrewDateService {
  public yosefTry:fullHebrewDate;

  private GREG_SDN_OFFSET:number = 32045; 
  private DAYS_PER_5_MONTHS:number = 153;
  private DAYS_PER_4_YEARS:number = 1461
  private DAYS_PER_400_YEARS:number = 146097;

  private HALAKIM_PER_HOUR:number = 1080;
  private HALAKIM_PER_DAY:number = 25920;
  private HALAKIM_PER_LUNAR_CYCLE:number = ((29 * this.HALAKIM_PER_DAY) + 13753);
  private HALAKIM_PER_METONIC_CYCLE:number = (this.HALAKIM_PER_LUNAR_CYCLE * (12 * 19 + 7));

  private HEB_SDN_OFFSET:number = 347997;
  private NEW_MOON_OF_CREATION:number = 31524;
  private NOON:number = (18 * this.HALAKIM_PER_HOUR);
  private AM3_11_20:number = ((9 * this.HALAKIM_PER_HOUR) + 204);
  private AM9_32_43:number = ((15 * this.HALAKIM_PER_HOUR) + 589);

  private SUN:number = 0;
  private MON:number = 1;
  private TUES:number = 2;
  private WED:number = 3; 
  private THUR:number = 4;
  private FRI:number = 5;
  private SAT:number = 6;

  private dayInMonthHebrewLatter = [
    "א","ב","ג","ד","ה","ו","ז","ח","ט","י"
    ,"יא","יב","יג","יד","טו","טז","יז","יח","יט","כ"
    ,"כא","כב","כג","כד","כה","כו","כז","כח","כט","ל"
  ];
  private yechidotEbrewCharacters = [
    "","א","ב","ג","ד","ה","ו","ז","ח","ט"
  ];
  private arryDozensAsEbrewCharacters = [
    "","י","כ","ל","מ","נ","ס","ע","פ","צ"
  ];
  private gWeekdayHebrew = [
    "ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"
  ];
  private hHebrewMonth = ["תשרי", "מר חשון", "כסלו", "טבת", "שבט", "אדר ראשון", "אדר שני", "ניסן", "אייר", "סיון", "תמוז", "מנחם אב", "אלול"];
  private hMonth = ["Tishri", "Heshvan", "Kislev", "Tevet", "Shevat", "AdarI", "AdarII", "Nisan", "Iyyar", "Sivan", "Tammuz", "Av", "Elul"];
  
  private gWeekday = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
  private gMonth = ["January", "February", "March", "April", "May", "June", "July", "August","September","October","November","December"];
  private mpy = [12, 12, 13, 12, 12, 13, 12, 13, 12, 12, 13, 12, 12, 13, 12, 12, 13, 12, 13];

  /**/
  private hebrewMonth = 0;
  private hebrewDate = 0;
  private hebrewYear = 0;
  private yyHebrewYear = "";
  private yyHelp;
  private DayInWeekName = "";
  private isMeuberetYear:boolean = false;
  private metonicCycle = 0;
  private metonicYear = 0;
  private moladDay = 0;
  private moladHalakim = 0;
  
  constructor(){}

  module(inputDateOrYear, inputMonth, inputDate) {
    let inputYear = inputDateOrYear;

    if (typeof inputYear === "object") {
      inputMonth = inputDateOrYear.getMonth() + 1;
      inputDate = inputDateOrYear.getDate();
      inputYear = inputDateOrYear.getFullYear();
      this.DayInWeekName = this.gWeekdayHebrew[inputDateOrYear.getDay() + 1];
    }
    else{
      this.DayInWeekName = this.gWeekdayHebrew[(new Date(inputYear, inputMonth, inputDate)).getDay()];
    }
    
    this.SdnToHebrew(this.GregorianToSdn(inputYear, inputMonth, inputDate));
    this.yyHelp = this.hebrewYear.toString();
    this.yyHebrewYear = this.yechidotEbrewCharacters[this.yyHelp[0]]+ this.HundredsAsEbrewCharacters(this.yyHelp[1]) + this.arryDozensAsEbrewCharacters[this.yyHelp[2]]+ this.yechidotEbrewCharacters[this.yyHelp[3]];
    
    if(!this.isMeuberetYear)
    {
      this.hHebrewMonth[this.hebrewMonth - 1] = this.hHebrewMonth[this.hebrewMonth - 1].replace("ראשון", "");
      this.hMonth[this.hebrewMonth - 1] = this.hMonth[this.hebrewMonth - 1].replace("I", "");
    }

    return new fullHebrewDate(
      this.DayInWeekName
      , this.hebrewDate
      , this.dayInMonthHebrewLatter[this.hebrewDate - 1]
      , this.hMonth[this.hebrewMonth - 1]
      , this.hHebrewMonth[this.hebrewMonth - 1]
      , this.hebrewMonth
      , this.yyHebrewYear
      , this.hebrewYear 
      , this.isMeuberetYear
    );

  }
  FindTishriMolad(inputDay) {
    
    // Estimate the metonic cycle number.  Note that this may be an under
    // estimate because there are 6939.6896 days in a metonic cycle not
    // 6940,but it will never be an over estimate.   The loop below will
    // correct for any error in this estimate.
    this.metonicCycle = Math.floor((inputDay + 310) / 6940);
    // Calculate the time of the starting molad for this metonic cycle.
    this.MoladOfMetonicCycle();
    // If the above was an under estimate,increment the cycle number until
    // the correct one is found.  For modern dates this loop is about 98.6%
    // likely to not execute,even once,because the above estimate is
    // really quite close.
    while (this.moladDay < inputDay - 6940 + 310) {
      this.metonicCycle++;
      this.moladHalakim += this.HALAKIM_PER_METONIC_CYCLE;
      this.moladDay += Math.floor(this.moladHalakim / this.HALAKIM_PER_DAY);
      this.moladHalakim = this.moladHalakim % this.HALAKIM_PER_DAY;
    }
    // Find the molad of Tishri closest to this date.
    for (this.metonicYear = 0; this.metonicYear < 18; this.metonicYear++) {
        if (this.moladDay > inputDay - 74)
            break;
            this.moladHalakim += this.HALAKIM_PER_LUNAR_CYCLE * this.mpy[this.metonicYear];
            this.moladDay += Math.floor(this.moladHalakim / this.HALAKIM_PER_DAY);
            this.moladHalakim = this.moladHalakim % this.HALAKIM_PER_DAY;
    }
  }

  MoladOfMetonicCycle() {
    let r1, r2, d1, d2;
    // Start with the time of the first molad after creation.
    r1 = this.NEW_MOON_OF_CREATION;
    // Calculate gMetonicCycle * HALAKIM_PER_METONIC_CYCLE.  The upper 32
    // bits of the result will be in r2 and the lower 16 bits will be in r1.
    r1 += this.metonicCycle * (this.HALAKIM_PER_METONIC_CYCLE & 0xFFFF);
    r2 = r1 >> 16;
    r2 += this.metonicCycle * ((this.HALAKIM_PER_METONIC_CYCLE >> 16) & 0xFFFF);
    // Calculate r2r1 / HALAKIM_PER_DAY.  The remainder will be in r1,the
    // upper 16 bits of the quotient will be in d2 and the lower 16 bits
    // will be in d1.
    d2 = Math.floor(r2 / this.HALAKIM_PER_DAY);
    r2 -= d2 * this.HALAKIM_PER_DAY;
    r1 = (r2 << 16) | (r1 & 0xFFFF);
    d1 = Math.floor(r1 / this.HALAKIM_PER_DAY);
    r1 -= d1 * this.HALAKIM_PER_DAY;
    this.moladDay = (d2 << 16) | d1;
    this.moladHalakim = r1;
  }

  Tishri1(metonicYear, moladDay, moladHalakim) {
    let tishri1 = moladDay
      , dow = tishri1 % 7
      , leapYear = metonicYear == 2 || metonicYear == 5 || metonicYear == 7 || metonicYear == 10
                 || metonicYear == 13 || metonicYear == 16 || metonicYear == 18
      , lastWasLeapYear = metonicYear == 3 || metonicYear == 6 || metonicYear == 8 || metonicYear == 11
                       || metonicYear == 14 || metonicYear == 17 || metonicYear == 0
      ;

    // Apply rules 2,3 and 4
    if ((moladHalakim >= this.NOON) ||
        ((!leapYear) && dow == this.TUES && moladHalakim >= this.AM3_11_20) ||
        (lastWasLeapYear && dow == this.MON && moladHalakim >= this.AM9_32_43)) {
        tishri1++;
        dow++;
        if (dow == 7)
            dow = 0;
    }

    // Apply rule 1 after the others because it can cause an additional delay of one day.
    if (dow == this.WED || dow == this.FRI || dow == this.SUN) {
        tishri1++;
    }

    return tishri1;
  }
  GregorianToSdn(inputYear, inputMonth, inputDay) {

    let year = 0, month = 0, sdn;

    // Make year a positive number
    if (inputYear < 0) {
        year = inputYear + 4801;
    } else {
        year = inputYear + 4800;
    }

    // Adjust the start of the year
    if (inputMonth > 2) {
        month = inputMonth - 3;
    } else {
        month = inputMonth + 9;
        year--;
    }

    sdn = Math.floor((Math.floor(year / 100) * this.DAYS_PER_400_YEARS) / 4);
    sdn += Math.floor(((year % 100) * this.DAYS_PER_4_YEARS) / 4);
    sdn += Math.floor((month * this.DAYS_PER_5_MONTHS + 2) / 5);
    sdn += inputDay - this.GREG_SDN_OFFSET;

    return sdn;
  }

  SdnToHebrew(sdn) {
    let tishri1 = 0
      , tishri1After = 0
      , yearLength = 0
      , inputDay = sdn - this.HEB_SDN_OFFSET
      ;

    this.FindTishriMolad(inputDay);
    tishri1 = this.Tishri1(this.metonicYear, this.moladDay, this.moladHalakim);

    if (inputDay >= tishri1) {
      // It found Tishri 1 at the start of the year.
      this.hebrewYear = this.metonicCycle * 19 + this.metonicYear + 1;
      if (inputDay < tishri1 + 59) {
        if (inputDay < tishri1 + 30) {
          this.hebrewMonth = 1;
          this.hebrewDate = inputDay - tishri1 + 1;
        } else {
          this.hebrewMonth = 2;
          this.hebrewDate = inputDay - tishri1 - 29;
        }
        return;
      }

      // We need the length of the year to figure this out,so find Tishri 1 of the next year.
      this.moladHalakim += this.HALAKIM_PER_LUNAR_CYCLE * this.mpy[this.metonicYear];
      this.moladDay += Math.floor(this.moladHalakim / this.HALAKIM_PER_DAY);
      this.moladHalakim = this.moladHalakim % this.HALAKIM_PER_DAY;
      tishri1After = this.Tishri1((this.metonicYear + 1) % 19, this.moladDay, this.moladHalakim);
    } else {
      // It found Tishri 1 at the end of the year.
      this.hebrewYear = this.metonicCycle * 19 + this.metonicYear;
      if (inputDay >= tishri1 - 177) {
        // It is one of the last 6 months of the year.
        if (inputDay > tishri1 - 30) {
          this.hebrewMonth = 13;
          this.hebrewDate = inputDay - tishri1 + 30;
        } else if (inputDay > tishri1 - 60) {
          this.hebrewMonth = 12;
          this.hebrewDate = inputDay - tishri1 + 60;
        } else if (inputDay > tishri1 - 89) {
          this.hebrewMonth = 11;
          this.hebrewDate = inputDay - tishri1 + 89;
        } else if (inputDay > tishri1 - 119) {
          this.hebrewMonth = 10;
          this.hebrewDate = inputDay - tishri1 + 119;
        } else if (inputDay > tishri1 - 148) {
          this.hebrewMonth = 9;
          this.hebrewDate = inputDay - tishri1 + 148;
        } else {
          this.hebrewMonth = 8;
          this.hebrewDate = inputDay - tishri1 + 178;
        }
         return;
      } else {
        if (this.mpy[(this.hebrewYear - 1) % 19] == 13) {
          this.isMeuberetYear = true;
          this.hebrewMonth = 7;
          this.hebrewDate = inputDay - tishri1 + 207;
          if (this.hebrewDate > 0)
            return;
          this.hebrewMonth--;
          this.hebrewDate += 30;
          if (this.hebrewDate > 0)
            return;
          this.hebrewMonth--;
          this.hebrewDate += 30;
        } else {
          this.hebrewMonth = 6;
          this.hebrewDate = inputDay - tishri1 + 207;
          if (this.hebrewDate > 0)
            return;
          this.hebrewMonth--;
          this.hebrewDate += 30;
        }
        if (this.hebrewDate > 0)
          return;
        this.hebrewMonth--;
        this.hebrewDate += 29;
        if (this.hebrewDate > 0)
          return;
        // We need the length of the year to figure this out,so find Tishri 1 of this year.
        tishri1After = tishri1;
        this.FindTishriMolad(this.moladDay - 365);
        tishri1 = this.Tishri1(this.metonicYear, this.moladDay, this.moladHalakim);
        }
      }
    yearLength = tishri1After - tishri1;
    this.moladDay = inputDay - tishri1 - 29;
        if (yearLength == 355 || yearLength == 385) {
            // Heshvan has 30 days
            if (this.moladDay <= 30) {
              this.hebrewMonth = 2;
              this.hebrewDate = this.moladDay;
                return;
            }
            this.moladDay -= 30;
        } else {
            // Heshvan has 29 days
            if (this.moladDay <= 29) {
              this.hebrewMonth = 2;
              this.hebrewDate = this.moladDay;
                return;
            }
            this.moladDay -= 29;
        }
        // It has to be Kislev.
        this.hebrewMonth = 3;
        this.hebrewDate = this.moladDay;
  }
  
  HundredsAsEbrewCharacters(yearAsString){
    switch(yearAsString){
      case  "0" :
        return ""
      case  "1" :
        return "ק"
      case  "2" :
        return "ר"
      case  "3" :
        return "ש"
      case  "4" :
        return "ת"
      case  "5" :
        return "תק"
      case  "6" :
        return "תר"
      case  "7" :
        return "תש"
      case  "8" :
        return "תת"
      case  "9" :
        return "תתק"
      default :
        console.error("HundredsAsEbrewCharacters");
        break;
    }
  }
}

