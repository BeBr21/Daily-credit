const {chromium}=require('playwright'),fs=require('fs');
const html=fs.readFileSync('www/index.html','utf8');
const pig=[...html.match(/const MI=\[([\s\S]*?)\];/)[1].matchAll(/`([\s\S]*?)`/g)][3][1];
const grad=`<defs><linearGradient id="g" x1="0" y1="0" x2=".55" y2="1"><stop offset="-.3" stop-color="#8D99AE"/><stop offset="1" stop-color="#23253A"/></linearGradient><radialGradient id="h" cx=".78" cy=".18" r=".55"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>`;
const bg=`<rect width="1024" height="1024" fill="url(#g)"/><rect width="1024" height="1024" fill="url(#h)"/>`;
const piggy=(s)=>`<g transform="translate(512 548) scale(${s})">${pig}</g>`;
const svg=(inner,w=1024,h=1024)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${grad}${inner}</svg>`;
const tile=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})"><rect width="1024" height="1024" rx="230" fill="url(#g)"/><rect width="1024" height="1024" rx="230" fill="url(#h)"/>${piggy(6.6)}</g>`;
const files={
 'icon-only.png':[svg(bg+piggy(6.6)),1024,1024],
 'icon-background.png':[svg(bg),1024,1024],
 'icon-foreground.png':[svg(piggy(4.6)),1024,1024],
 'splash.png':[svg(`<rect width="2732" height="2732" fill="#F5F5F7"/>`+tile(1110,1110,.5),2732,2732),2732,2732],
 'splash-dark.png':[svg(`<rect width="2732" height="2732" fill="#1D1D1F"/>`+tile(1110,1110,.5),2732,2732),2732,2732]};
(async()=>{const b=await chromium.launch();for(const[f,[s,w,h]] of Object.entries(files)){const p=await b.newPage({viewport:{width:w,height:h}});await p.setContent(`<style>body{margin:0;background:transparent}</style>${s}`);await p.screenshot({path:'assets/'+f,omitBackground:true});await p.close()}await b.close()})();
