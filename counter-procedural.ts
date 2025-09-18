// Procedural/Traditional approach to counter
let count: number = 0;
let intervalId: number | null = null;
let isRunning: boolean = false;

function startCounter(): void {
    if (isRunning) {
        console.log("Counter is already running!");
        return;
    }

    console.log("Starting counter...");
    isRunning = true;

    intervalId = setInterval(() => {
        count++;
        console.log(`Counter: ${count}`);
    }, 1000);
}

function stopCounter(): void {
    if (!isRunning || !intervalId) {
        console.log("Counter is not running!");
        return;
    }

    console.log("Stopping counter...");
    clearInterval(intervalId);
    intervalId = null;
    isRunning = false;
    console.log(`Final count: ${count}`);
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
function initializeCounter(startValue: number = 0): void {
    count = startValue;
    console.log(`Counter initialized to ${count}`);
}

// Usage example
initializeCounter();

// Start the counter
startCounter();

// Make it stop after 5 seconds
setTimeout(() => {
    stopCounter();
}, 5000);
