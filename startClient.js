const cp = require('child_process');

const opts = { stdio: 'inherit', cwd: 'client', shell: true };
cp.spawn('npm', ['start'], opts);
