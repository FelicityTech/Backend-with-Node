// Send a signal to a process. pid is the process id and 
// signal is the string describing the signal to send
process.on('SIGHUP', () => {
    console.log('Got SIGHUP signal.');
});
setTimeout(() => {
    console.log('Exiting.');
    process.exit(0);
},100);

process.kill(process.pid, 'SIGHUP');