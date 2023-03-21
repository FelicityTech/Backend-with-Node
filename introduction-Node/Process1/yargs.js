const yargs = require('yargs');

yargs
.option('name', {
    alias: 'n',
    describe: 'Your name',
    type: 'string',
    demandOption: true,
})
.option('age', {
    alias: 'a',
    describe: 'Your age',
    type: 'number',
    demandOption: true,
})
.option('verbose', {
    alias: 'v',
    describe: 'Enable verbose output',
    type: 'boolean',
    default: false,
})
.help()
.alias('help', 'h')
.argv;

console.log(`Hello, ${yargs.argv.name}`);
console.log(`You are ${yargs.argv.age} years old`);
if (yargs.argv.verbose) {
    console.log('Verbose output enabled')
}