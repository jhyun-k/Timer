const main = document.querySelector('.main');
const input= main.querySelectorAll('.time_box input')
const hrs = main.querySelector('#hrs');
const min = main.querySelector('#min');
const sec = main.querySelector('#sec');

const startBtn = document.querySelector('.start')
const resetBtn = document.querySelector('.reset')

const startImg = document.querySelector('.startImg')
const resetImg = document.querySelector('.resetImg')


for(i of input){
    i.addEventListener('click',(e)=>{
        e.currentTarget.value=''
    })
}

/* hrs.addEventListener('input',()=>{
    startBtn.classList.add('able')
    startImg.setAttribute('src','image/icon-start.png')
    resetBtn.classList.add('able')
    resetImg.setAttribute('src','image/icon-reset.png')

}) */
for(i of input){
    i.addEventListener('input',()=>{
        startBtn.classList.add('able')
    startImg.setAttribute('src','image/icon-start.png')
    resetBtn.classList.add('able')
    resetImg.setAttribute('src','image/icon-reset.png')
    })
}



startBtn.addEventListener('click',()=>{
    startBtn.classList.remove('able')
    startBtn.classList.add('click')
    startBtn.innerHTML=`<img src="image/icon-start.png" alt="" class='startImg'> PAUSE`

    
/*     setInterval(() => {
        sec.value = sec.value-=1
    }, 1000);
    if(sec.innerText==0){
        sec.innerText='00'
    } */
})



resetBtn.addEventListener('click',()=>{
    hrs.value='00'
    min.value='00'
    sec.value='00'
})