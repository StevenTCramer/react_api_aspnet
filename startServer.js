const cp = require('child_process');

const opts = { stdio: 'inherit', cwd: 'api', shell: true };
cp.spawn('dotnet', ['run'], opts);
