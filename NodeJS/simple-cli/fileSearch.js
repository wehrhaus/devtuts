#! /usr/bin/env node

const exec = require('child_process').exec;
const searchPattern = process.argv.slice(2);

exec('ls -a | grep ' + searchPattern, (err, stdout, stderr, code) => {
    if (err instanceof Error) {
        throw err;
    }
    process.stderr.write(stderr);
    process.stdout.write(stdout);
    process.exit(code);
});
