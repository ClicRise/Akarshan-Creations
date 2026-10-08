import { cp, mkdir, readdir, readFile, access, writeFile } from 'node:fs/promises';
import path from 'node:path';
// This packaging tool runs locally after building, never in the app runtime.
const candidates = ['dist/client', '.output/public'];
let source;
for (const candidate of candidates) {
 try { await access(path.join(candidate,'index.html')); source=candidate; break; } catch {}
}
if (!source) throw new Error('Build first. No prerendered index.html was found in dist/client or .output/public.');
const pages=['about','creations','custom-orders','gallery','contact','shipping-policy'];
for (const page of pages) await access(path.join(source,page,'index.html'));
const output=process.env.OUTPUT_DIR || 'hostinger-static';
await mkdir(output,{recursive:true});
await cp(source,output,{recursive:true});
const origin=process.env.ASSET_ORIGIN || 'https://id-preview--cdfd2005-02aa-475f-9e25-8370c15a52d4.lovable.app';
for (const file of await readdir('src/assets')) {
 if (!file.endsWith('.asset.json')) continue;
 const asset=JSON.parse(await readFile(path.join('src/assets',file),'utf8'));
 const url=new URL(asset.url,origin);
 const response=await fetch(url);
 if (!response.ok) throw new Error(`Photo download failed (${response.status}): ${file}`);
 const destination=path.join(output,url.pathname);
 await mkdir(path.dirname(destination),{recursive:true});
 await writeFile(destination,new Uint8Array(await response.arrayBuffer()));
}
await writeFile(path.join(output,'.nojekyll'),'');
console.log(`Static website ready in ${output}/.`);
