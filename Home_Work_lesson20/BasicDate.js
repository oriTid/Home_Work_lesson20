var BASICDATE = /** @class */ (function () {
    function BASICDATE(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    Object.defineProperty(BASICDATE.prototype, "day", {
        get: function () {
            return this._day;
        },
        set: function (x) {
            if (x >= 1 && x <= 31) {
                this._day = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BASICDATE.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (x) {
            if (x >= 1 && x <= 12) {
                this._month = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BASICDATE.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (x) {
            if (x >= 2020 && x <= 2050) {
                this._year = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    BASICDATE.prototype.toString = function () {
        return "" + this.day + "/" + this.month + "/" + this.year;
    };
    return BASICDATE;
}());
//# sourceMappingURL=BasicDate.js.map