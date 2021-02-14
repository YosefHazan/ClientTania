export class fullHebrewDate{
        public day_in_week_name:string;
        public day_in_month_num:number;
        public day_in_month_hebrew_letter : string;
        public month_name: string;
        public month_name_hebrew_letter: string;
        public month: string;
        public year_hebrew_letter :string;
        public year:number;
        public is_meuberet_year: boolean;
        constructor(a,b,c,d,e,f,g,h,j){
            this.day_in_week_name = a;
            this.day_in_month_num = b;
            this.day_in_month_hebrew_letter = c;
            this.month_name = d;
            this.month_name_hebrew_letter = e;
            this.month = f;
            this.year_hebrew_letter = g;
            this.year = h;
            this.is_meuberet_year = j;
        };
}