const { program } = require('commander');
//Define a top-level command with a description and a version:
program
  .description('A command line interface example')
  .version('1.0.0');

// Define a sub-command with its own options:
program
  .command('say-hello')
  .description('Say hello to someone')
  .requiredOption('-n, --name <name>', 'The name of the person to say hello to')
  .option('-t, --title <title>', 'The title of the person to say hello to')
  .action((command) => {
    const { name, title } = command;
    const greeting = `Hello, ${title ? `${title} ` : ''}${name}!`;
    console.log(greeting);
  });

  // Parse the command line arguments:

  program.parse(process.argv);
