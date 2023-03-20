// Gets the user identity of the process. (See getuid(2).) This is the numerical userid, not the username.

if (process.getuid) {
    console.log('Current uid: ' + process.getuid());
}