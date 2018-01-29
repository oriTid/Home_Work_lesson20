class BASICDATE {



    private _day: number;
    private _month: number;
    private _year: number;

    public constructor(day: number, month: number, year: number) {

        this.day = day;
        this.month = month;
        this.year = year;
    }


    get day(): number {
        return this._day;
    }

    set day(x: number) {
        if (x >= 1 && x <= 31) {

            this._day = x;
        }
    }

    get month(): number {
        return this._month;
    }

    set month(x: number) {
        if (x >= 1 && x <= 12) {

            this._month = x;
        }
    }

    get year(): number {
        return this._year;
    }

    set year(x: number) {
        if (x >= 2020 && x <= 2050) {

            this._year = x;
        }
    }


    public toString(): string{
       
       return "" + this.day + "/" + this.month + "/" + this.year;
               
    }

    
}