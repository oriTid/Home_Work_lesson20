var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var FullTime = /** @class */ (function (_super) {
    __extends(FullTime, _super);
    function FullTime(day, month, year, hour, minuets, seconds) {
        var _this = _super.call(this, day, month, year) || this;
        _this.hour = hour;
        _this.minuets = minuets;
        _this.seconds = seconds;
        return _this;
    }
    Object.defineProperty(FullTime.prototype, "hour", {
        get: function () {
            return this._hour;
        },
        set: function (x) {
            if (x > 0 && x <= 24) {
                this._hour = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "minuets", {
        get: function () {
            return this._minuets;
        },
        set: function (x) {
            if (x >= 0 && x < 60) {
                this._minuets = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FullTime.prototype, "seconds", {
        get: function () {
            return this._seconds;
        },
        set: function (x) {
            if (x >= 0 && x < 60) {
                this._seconds = x;
            }
        },
        enumerable: true,
        configurable: true
    });
    FullTime.prototype.toString = function () {
        return _super.prototype.toString.call(this) + " " + this.hour + ":" + this.minuets + ":" + this.seconds;
    };
    return FullTime;
}(BASICDATE));
//# sourceMappingURL=FullTime.js.map