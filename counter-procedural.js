// Procedural/Traditional approach to counter
var count = 0;
var intervalId = null;
var isRunning = false;
function startCounter() {
    if (isRunning) {
        console.log("Counter is already running!");
        return;
    }
    console.log("Starting counter...");
    isRunning = true;
    intervalId = setInterval(function () {
        count++;
        console.log("Counter: ".concat(count));
    }, 1000);
}
function stopCounter() {
    if (!isRunning || !intervalId) {
        console.log("Counter is not running!");
        return;
    }
    console.log("Stopping counter...");
    clearInterval(intervalId);
    intervalId = null;
    isRunning = false;
    console.log("Final count: ".concat(count));
}
// function resetCounter(): void {
//     const wasRunning = isRunning;
//     if (wasRunning) {
//         stopCounter();
//     }
//     count = 0;
//     console.log("Counter reset to 0");
//     if (wasRunning) {
//         startCounter();
//     }
// }
// function getCurrentCount(): number {
//     return count;
// }
// function isCounterRunning(): boolean {
//     return isRunning;
// }
// Initialize counter with a starting value (optional)
function initializeCounter(startValue) {
    if (startValue === void 0) { startValue = 0; }
    count = startValue;
    console.log("Counter initialized to ".concat(count));
}
// Usage example
initializeCounter();
// Start the counter
startCounter();
// Make it stop after 30 seconds
setTimeout(function () {
    stopCounter();
}, 5000);
