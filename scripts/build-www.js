// Baut www/index.html aus dem Fragment daily-credit-v2.html (Inhalt + <style> + <script>)
const fs=require('fs'),path=require('path'),r=p=>path.join(__dirname,'..',p);
const head=fs.readFileSync(r('scripts/head.html'),'utf8').trimEnd();
fs.writeFileSync(r('www/index.html'),head+'\n'+fs.readFileSync(r('daily-credit-v2.html'),'utf8').trim()+'\n\n</body></html>\n');
console.log('www/index.html gebaut');
