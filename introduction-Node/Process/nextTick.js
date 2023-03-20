// Once the current event loop turn runs to completion, call the callback function.

console.log('start');
process.nextTick(() => {
    console.log('nextTick callback');
});
console.log('scheduled');