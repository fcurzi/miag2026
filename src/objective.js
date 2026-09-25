export function objectiveState(config,index,level=null){
 const elapsed=level?.t||0,max=level?.max||config.durations[index],remaining=Math.max(0,Math.ceil(max-elapsed));
 let label=config.objectives[index],value='',ratio=0,detail='';
 if(index===0||index===3){value=`${remaining} / ${max} s`;ratio=elapsed/max;detail=config.labels.finishAtZero}
 else if(index===1||index===2){const target=index===1?config.fragmentCount:config.pageCount,got=level?.got||0;value=`${got} / ${target}`;ratio=got/target;detail=`${config.labels.time} ${remaining} s`}
 else {const round=level?.round||0;value=`${round+1} / 3`;const partial=round<2?(level?.hits||0)/config.bossHits[round]:(level?.winTime?1:Math.min(1,(level?.idle||0)/config.bossIdle));ratio=(round+partial)/3;detail=`${config.labels.time} ${remaining} s`;if(round<2)detail+=` · ${level?.hits||0}/${config.bossHits[round]} ✓`}
 return {label,value,ratio:Math.max(0,Math.min(1,ratio)),detail};
}
