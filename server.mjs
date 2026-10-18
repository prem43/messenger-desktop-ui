import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
const files={'/':'index.html','/index.html':'index.html','/style.css':'style.css','/app.js':'app.js'};
const types={html:'text/html',css:'text/css',js:'text/javascript',png:'image/png'};
const server=http.createServer(async(req,res)=>{const file=files[new URL(req.url,'http://localhost').pathname];if(!file){res.writeHead(404);return res.end('Not found');}try{const data=await readFile(fileURLToPath(new URL(file,import.meta.url)));res.writeHead(200,{'Content-Type':types[file.split('.').pop()]+'; charset=utf-8','X-Content-Type-Options':'nosniff'});res.end(data);}catch{res.writeHead(500);res.end('Unable to read application file');}});
server.on('error',error=>{console.error(error.code==='EADDRINUSE'?'Preview port is already in use. Set PORT to another local port.':error.message);process.exitCode=1;});
server.listen(Number(process.env.PORT||4175),'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+server.address().port));
