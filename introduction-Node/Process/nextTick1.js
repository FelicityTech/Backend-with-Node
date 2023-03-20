function definitelyAsync(arg, cb) {
    if (arg) {
      process.nextTick(cb);
      return;
    }
  
    fs.stat('file', cb);
}