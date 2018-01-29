var Product = /** @class */ (function () {
    function Product(name, price, expDate) {
        this.name = name;
        this.price = price;
        this.expDate = expDate;
    }
    Object.defineProperty(Product.prototype, "expDate", {
        get: function () {
            return this._expDate;
        },
        set: function (x) {
            this._expDate = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (x) {
            this._name = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (x) {
            if (x > 0) {
                this._price = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Product.prototype.toString = function () {
        var fulldetails;
        fulldetails = "Product name is: " + this.name + "</br>";
        fulldetails += this.name + "'" + " " + "Price is:" + " " + this.price + "</br>";
        fulldetails += this.name + "'" + " " + "Full Expiration date is:" + " " + this._expDate.toString() + "</br>";
        fulldetails += "</br>";
        return fulldetails;
    };
    return Product;
}());
//# sourceMappingURL=Product.js.map