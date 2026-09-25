import{figure,asset,text}from'../render.js';
export class Base {constructor(env,char,index){this.e=env;this.ch=char;this.index=index;this.t=0;this.max=env.config.durations[index];this.hp=char.lives;this.score=0;this.inv=0;this.done=false;this.cleared=false;this.p={x:.2,y:.86,vy:0};this.particles=[];this.message='';this.messageTime=0;}
 tick(dt){this.t+=dt;this.inv=Math.max(0,this.inv-dt);this.messageTime-=dt;this.particles=this.particles.filter(p=>p.life>0);for(const p of this.particles){p.life-=dt;p.y-=dt*.1}if(this.hp<=0){this.done=true;this.cleared=false}}
 hit(){if(this.inv||this.e.god)return;this.hp--;this.inv=1.3;this.e.audio.play('hit');navigator.vibrate?.(20);this.e.shake=.2}
 collect(x,y,n=100){this.score+=n;this.particles.push({x,y,life:1,t:'+'+n});this.e.audio.play('collect')}
 finish(){this.done=true;this.cleared=true;this.e.audio.play('win')}
 player(c,height=.20){figure(c,this.e.images[this.ch.id],this.p.x,this.p.y,height,Math.sin(this.t*8)*.02,this.inv&&Math.floor(this.t*15)%2?.35:1)}
 effects(c){for(const p of this.particles)text(c,p.t,p.x,p.y,28,'#7cffe5');if(this.messageTime>0)text(c,this.message,.5,.18,32,'#83ffe5')}
 result(){return{score:this.score,cleared:this.cleared}}
 get progress(){return String(Math.max(0,Math.ceil(this.max-this.t))).padStart(2,'0')+'″'}
}
