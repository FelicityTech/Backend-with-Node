// to gracefully shut down a server when it receives a SIGTERM signal, you can use

process.on('SIGTERM', () => {
    console.log('Received SIGTERM signal, shutting down server...');
    server.close(() => {
      console.log('Server shut down successfully.');
      process.exit(0);
    });
  });
  