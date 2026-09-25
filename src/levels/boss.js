import{Base}from'./base.js';import{asset,rect,text,directionArrow,W,H}from'../render.js';
export class Boss extends Base {constructor(e,ch){super(e,ch,4);this.round=0;this.memory=[];this.hits=0;this.cool=0;this.flash=0;this.block=false;this.idle=0;this.phaseStart=0;this.attempted=false;this.winTime=0;this.lastMove='';this.p={x:.22,y:.93};}
 update(dt,i){this.tick(dt);if(this.done)return;this.cool=Math.max(0,this.cool-dt);this.flash=Math.max(0,this.flash-dt);const m=i.movePressed;if(m&&m!=='down'&&this.cool<=0&&!this.winTime){this.cool=.5;this.lastMove=m;this.flash=.35;const blocked=this.memory.includes(m)||this.round===2;this.block=blocked;if(blocked){this.hit();this.attempted=true}else{this.collect(.53,.35,250);this.hits++;this.e.audio.play('move')}if(this.round<2){this.memory.push(m);this.memory=this.memory.slice(-(this.round+1));if(this.hits>=this.e.config.bossHits[this.round]){this.round++;this.hits=0;this.memory=this.round===2?['left','up','right']:[];this.phaseStart=this.t;this.inv=2;this.attempted=false;this.message='ROUND '+(this.round+1);this.messageTime=1.5}}}if(this.round===2&&!this.winTime){const inactive=Math.abs(i.dir.x)<.2&&Math.abs(i.dir.y)<.2&&!i.action;this.idle=inactive&&this.attempted?this.idle+dt:0;if(this.idle>=this.e.config.bossIdle){this.winTime=.001;this.collect(.5,.4,2000)}}if(this.winTime){this.winTime+=dt;if(this.winTime>3)this.finish()}else if(this.t>=this.max){this.done=true;this.cleared=false}}
 render(c){
 const shake=this.flash&&this.block?Math.sin(this.t*80)*.005:0;
 asset(c,this.e.images.robot,.55+shake,.52,.37,.80,this.winTime?Math.sin(this.t)*.035:0);
 const sx=.553+shake,sy=.184;
 rect(c,sx-.062,sy-.054,.124,.108,this.winTime?'#78ffe3':'#071017');
 if(this.winTime)text(c,'✓',sx,sy,60,'#183c33');
 else{
  text(c,'MEMORIA',sx,sy-.037,21,'#e6d5aa');
  const moves=this.round===2?['left','up','right']:this.memory;
  if(!moves.length)text(c,'—',sx,sy+.006,38);
  moves.forEach((m,k)=>{
   const x=sx+(k-(moves.length-1)/2)*.039;
   directionArrow(c,m,x,sy+.004,40,this.flash&&this.block?'#ff6e9b':'#81fbe1');
   if(moves.length>1&&this.round<2)text(c,String(k+1),x,sy+.04,18,'#e6d5aa');
  });
  if(this.flash&&this.block){
   text(c,'× BLOCCATA',sx,sy+.074,24,'#ff9dbc');
   c.save();c.strokeStyle='#ff6e9b';c.lineWidth=5;c.strokeRect((sx-.062)*W,(sy-.054)*H,.124*W,.108*H);c.restore();
  }
  if(this.round===2&&this.idle>0)rect(c,sx-.05,sy+.039,.1*Math.min(1,this.idle/this.e.config.bossIdle),.006,'#78ffe3');
 }
 for(let r=0;r<3;r++)rect(c,.45+r*.035,.09,.025,.008,r<=this.round?'#81fbe1':'#7b6264');
 if(this.round<2){const max=this.e.config.bossHits[this.round];for(let n=0;n<max;n++)rect(c,.4+n*.027,.965,.020,.007,n<this.hits?'#7bf9e2':'#a68863')}
 c.save();c.strokeStyle='#be8650';c.lineWidth=5;c.beginPath();c.moveTo(.31*W,.88*H);c.quadraticCurveTo(.38*W,(this.winTime?.99:.72)*H,.43*W,.52*H);c.stroke();c.restore();
 this.p.x=.23+(this.flash&&!this.block?.025:0);this.player(c,.25);
 if(this.flash&&!this.block)directionArrow(c,this.lastMove,.33,.57,70,'#ffb5d7');
 this.effects(c);
 }get progress(){return 'ROUND '+(this.round+1)+' / 3'}
}
