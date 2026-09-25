export const W=1920,H=1080;
export function text(c,t,x,y,size=36,color='#fff0c7',align='center'){c.save();c.font=`bold ${size}px Courier New,monospace`;c.textAlign=align;c.textBaseline='middle';c.shadowColor='#100b19';c.shadowBlur=5;c.fillStyle=color;c.fillText(t,x*W,y*H);c.restore()}
export function asset(c,im,x,y,w,h,angle=0){if(!im)return;c.save();c.translate(x*W,y*H);c.rotate(angle);c.drawImage(im,-w*W/2,-h*H/2,w*W,h*H);c.restore()}
export function figure(c,im,x,feet,height,lean=0,alpha=1){const width=height*H*(im.width/im.height)/W;c.save();c.globalAlpha=alpha;c.translate(x*W,feet*H);c.rotate(lean);c.drawImage(im,-width*W/2,-height*H,width*W,height*H);c.restore()}
export function rect(c,x,y,w,h,color){c.fillStyle=color;c.fillRect(x*W,y*H,w*W,h*H)}
export function page(c,x,y,kind=0,size=.032){c.save();c.translate(x*W,y*H);c.fillStyle='#f8e8bc';c.strokeStyle='#725139';c.lineWidth=3;c.fillRect(-size*W/2,-size*H*.8,size*W,size*H*1.6);c.strokeRect(-size*W/2,-size*H*.8,size*W,size*H*1.6);const colors=['#cf426e','#1c918c','#9751aa','#da7a2c'];c.fillStyle=colors[kind%4];c.beginPath();if(kind%4===0)c.arc(0,0,size*H*.4,0,Math.PI*2);else if(kind%4===1)c.rect(-size*H*.35,-size*H*.35,size*H*.7,size*H*.7);else{c.moveTo(0,-size*H*.5);c.lineTo(size*H*.5,size*H*.4);c.lineTo(-size*H*.5,size*H*.4);c.closePath()}c.fill();if(kind%4===3){c.strokeStyle='#fff';c.beginPath();c.moveTo(-12,0);c.lineTo(12,0);c.stroke()}c.restore()}
export function background(c,im,brightness=.62,shift=0){c.save();c.fillStyle='#100e1b';c.fillRect(0,0,W,H);if(im){c.globalAlpha=brightness;c.drawImage(im,-25+shift,-15,W+50,H+30)}c.restore()}

// Glyph outlines are bundled SVGs: no dependence on device font coverage.
export function letterPage(c,im,x,y,size=.027,opacity=1){
 c.save();c.globalAlpha=.2+.8*opacity;rect(c,x-size*.55,y-size, size*1.1,size*2,'#f8e8bc');
 c.globalAlpha=opacity;asset(c,im,x,y,size*.92,size*1.7);c.restore();
}
export const knowledgeNames=['book','globe','compass','inkwell'];
export function knowledge(c,images,x,y,kind,size=.06){
 const im=images[knowledgeNames[kind]];if(!im)return;
 const scale=Math.min(size*W/im.width,size*H*1.65/im.height);
 asset(c,im,x,y,im.width*scale/W,im.height*scale/H);
}

export function directionArrow(c,move,x,y,size,color='#81fbe1'){
 c.save();c.translate(x*W,y*H);c.rotate(move==='left'?Math.PI:move==='up'?-Math.PI/2:0);
 c.strokeStyle=color;c.lineWidth=5;c.lineCap='round';c.lineJoin='round';
 c.beginPath();c.moveTo(-size/2,0);c.lineTo(size/2,0);c.moveTo(0,-size/2);c.lineTo(size/2,0);c.lineTo(0,size/2);c.stroke();c.restore();
}
