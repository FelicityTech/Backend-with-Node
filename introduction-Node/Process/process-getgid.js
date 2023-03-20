// Gets the group identity of the process. (See getgid(2).) This is the numerical group id, not the group name.

if (process.getgid) {
    console.log('Current gid: ' + process.getgid());
}