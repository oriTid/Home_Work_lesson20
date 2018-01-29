class FullTime extends BASICDATE {

    private _hour: number;
    private _minuets: number;
    private _seconds: number;

    public constructor(day: number, month: number, year: number, hour: number, minuets: number, seconds: number) {
        super(day, month, year);
        this.hour = hour;
        this.minuets = minuets;
        this.seconds = seconds;
    }


    get hour(): number {
        return this._hour;
    }

    set hour(x: number) {
        if (x > 0 && x <= 24) {

            this._hour = x;
        }
    }

    get minuets(): number {
        return this._minuets;
    }

    set minuets(x: number) {
        if (x >= 0 && x < 60) {

            this._minuets = x;
        }
    }

    get seconds(): number {
        return this._seconds;
    }

    set seconds(x: number) {
        if (x >= 0 && x < 60) {

            this._seconds = x;
        }
    }


    public toString(): string{

        return  super.toString() +" " + this.hour + ":" + this.minuets + ":" + this.seconds;
       
    }


}

