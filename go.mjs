import { execSync } from 'child_process';
const o = { cwd: 'D:/intellij/Projects/Nasa_Space_apps26/lunar-legacy', stdio: 'pipe', timeout: 60000 };
execSync('git.exe add -A', o);
try { execSync('git.exe commit -m "chore: ignore .mjs helpers, final clean repo"', o); } catch(_) {}
const r = execSync('git.exe push origin main', o);
console.log('pushed:', r?.toString().trim());
