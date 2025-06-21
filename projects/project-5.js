const randomcolor=function(){
    const hex='0123456789ABCDEF';
    let color ='#';
    for (let i = 0; i < 6; i++) {
       color+=hex[Math.floor(Math.random()*16)]
        
    }
    return color
}
let intervalid;

const startchangingcolor=function(){
    if(!intervalid){
    intervalid=  setInterval(changebgcolor,1000)

    }
    function changebgcolor(){
    document.body.style.background=randomcolor();

    }
};
const stopchangingcolor=function(){
    clearInterval(intervalid)
    intervalid=null;
}


document.getElementById("start").addEventListener('click',startchangingcolor)

document.getElementById('stop').addEventListener('click',stopchangingcolor)
