var Counter = /** @class */ (function () {
    function Counter(startValue) {
        if (startValue === void 0) { startValue = 0; }
        this.count = startValue;
        this.intervalId = null;
        this.isRunning = false;
    }
    Counter.prototype.start = function () {
        var _this = this;
        if (this.isRunning) {
            console.log("Counter is already running!");
            return;
        }
        console.log("Starting counter...");
        this.isRunning = true;
        this.intervalId = setInterval(function () {
            _this.count++;
            console.log("Counter: ".concat(_this.count));
        }, 1000);
    };
    Counter.prototype.stop = function () {
        if (!this.isRunning || !this.intervalId) {
            console.log("Counter is not running!");
            return;
        }
        console.log("Stopping counter...");
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.isRunning = false;
        console.log("Final count: ".concat(this.count));
    };
    Counter.prototype.reset = function () {
        var wasRunning = this.isRunning;
        if (wasRunning) {
            this.stop();
        }
        this.count = 0;
        console.log("Counter reset to 0");
        if (wasRunning) {
            this.start();
        }
    };
    Counter.prototype.getCurrentCount = function () {
        return this.count;
    };
    Counter.prototype.isCounterRunning = function () {
        return this.isRunning;
    };
    return Counter;
}());
var counter = new Counter();
// start the counter
counter.start();
// make it stop after 10 seconds
setTimeout(function () {
    counter.stop();
}, 30000);
