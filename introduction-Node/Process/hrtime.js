var time = process.hrtime();

setTimeout(() => {
    var diff = process.hrtime(time);

    console.log('Benchmark tool %d nanoseconds', diff[0] * 1e9 + diff[1]);
}, 1000);