import { execSync } from 'child_process';
const o = { cwd: 'D:/intellij/Projects/Nasa_Space_apps26/lunar-legacy', stdio: 'pipe', timeout: 30000 };
console.log('=== git status ===');
console.log(execSync('git.exe status', o).toString());
console.log('=== last 5 commits ===');
console.log(execSync('git.exe log --oneline -5', o).toString());
