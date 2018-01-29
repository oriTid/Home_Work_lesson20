class Product  {

    private _name: string;
    private _price: number;
    private _expDate:FullTime;

    public constructor(name: string, price: number, expDate: FullTime) {
        this.name = name;
        this.price = price;
        this.expDate = expDate;
    }

    get expDate(): FullTime {
        return this._expDate;
    }

    set expDate(x: FullTime) {
        this._expDate = x;
    }
    

    get name(): string {
        return this._name;
    }

    set name(x: string) {
        this._name = x;
    }


    get price(): number {
        return this._price;
    }

    set price(x: number) {
        if (x > 0) {

            this._price = x;
        }
    }


    public toString() {

        let fulldetails: string;
        fulldetails = "Product name is: " + this.name+ "</br>";
        fulldetails += this.name+"'" +" "+ "Price is:" +" " + this.price +  "</br>";
        fulldetails += this.name + "'" + " " + "Full Expiration date is:" + " " + this._expDate.toString() + "</br>";
        fulldetails += "</br>";
        return fulldetails;
    }


}

