const main = document.querySelector('.main');
const input= main.querySelectorAll('.time_box input')
const hrs = main.querySelector('#hrs');
const min = main.querySelector('#min');
const sec = main.querySelector('#sec');

const startBtn = document.querySelector('.start')
const resetBtn = document.querySelector('.reset')

const startImg = document.querySelector('.startImg')
const resetImg = document.querySelector('.resetImg')


/* class 추가 input 초기화 */
for(i of input){
    i.addEventListener('input',()=>{
        startBtn.classList.add('able')
        resetBtn.classList.add('able')
    })
    i.addEventListener('click',(e)=>{
        e.currentTarget.value=''
    })

}


function timer () {
    setInterval(() => {
        sec.value = sec.value-=1
        console.log(sec.value)
        if(sec.value<=0){
            sec.value='00'
        } 
    }, 1000);
    
}

startBtn.addEventListener('click',()=>{
    startBtn.innerText==='START'?startBtn.innerText='PAUSE':startBtn.innerText='START'
    startBtn.classList.toggle('click')
    timer()
})


resetBtn.addEventListener('click',()=>{
    hrs.value='00'
    min.value='00'
    sec.value='00'
})