setInterval(()=>{
 d=new Date();
 h=d.getHours();
 s=d.getSeconds()
 m=d.getMinutes()

 hRotation=30*h+m/2
 mRotation=6*m
 sRotation=6*s

 hour.style.transform=`rotate(${hRotation}deg)`
 minute.style.transform=`rotate(${mRotation}deg)`
 second.style.transform=`rotate(${sRotation}deg)`

},1000)