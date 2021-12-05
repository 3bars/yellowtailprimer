function snowfall(){
    const count=650;
    const snow = document.querySelector(".containersnow");
    var i = 0;

    while(i<count){
        const startsnow = document.createElement("i");
        const x = Math.floor(Math.random()*window.innerWidth);
        const y = Math.floor(Math.random()*window.innerHeight);
        const size = Math.random()*2;

        startsnow.style.left  =  x+'px';
        startsnow.style.top = y+'px';
        startsnow.style.width = 3+size+'px';
        startsnow.style.height = 3+size+'px';
        startsnow.style.animationDuration = 2+size+'s';

        snow.appendChild(startsnow);
        i++;
    }
}

snowfall();