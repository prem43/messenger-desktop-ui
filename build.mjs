import {readFile,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {join} from 'node:path';
const root=fileURLToPath(new URL('.',import.meta.url));
const javascript=['ui-data.js','icons.js','app-core.js','settings-workspace.js','contact-workspace.js','chat-search-workspace.js','boot.js'];
const styles=['base.css','settings-workspace.css','contact-workspace.css','chat-reference.css','actions.css'];
await writeFile(join(root,'app.js'),(await Promise.all(javascript.map(name=>readFile(join(root,'src',name),'utf8')))).join('\n'));
await writeFile(join(root,'style.css'),(await Promise.all(styles.map(name=>readFile(join(root,'css',name),'utf8')))).join('\n'));
console.log('Built app.js and style.css from the owned src/ and css/ files.');
