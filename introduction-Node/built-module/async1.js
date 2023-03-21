const async = require('async')


const tasks = [
    callback => setTimeout(() => callback(null, 'one'), 2000),
    callback => setTimeout(() => callback(null, 'two'), 1000),
    callback => setTimeout(() => callback(null, 'three'), 3000)
];

async.parallel(tasks, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
});


async.series(tasks, (error, results) => {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
    }
});

//  we define three tasks that simulate asynchronous 
// operations with different durations. We use the 
// async.parallel function to execute the tasks in 
// parallel and the async.series function to execute 
// them in series. We print the results of each function, 
// which should contain the values of the tasks in the order 
// they were executed.

