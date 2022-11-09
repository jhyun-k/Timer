const main = document.querySelector('.main');
const input= main.querySelectorAll('.time_box input')
const hrs = main.querySelector('#hrs');
const min = main.querySelector('#min');
const sec = main.querySelector('#sec');

const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')

const startImg = document.querySelector('.startImg')
const resetImg = document.querySelector('.resetImg')

let interval

/* 인풋값에 초 넣을때 한자리로 보이는거 어떻게 해결하지? */

/* 버튼 보이기 숨기기 */
function showBtn(btn){
    btn.style.display='inline-block'
}

function hideBtn(btn){
    btn.style.display='none'
}
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

/* 총 초수 받아서 setInterval 하기, 시간 끝나면 버튼 다시 비활성화 되어야함 */

function startTimer(totalSeconds){
    interval = setInterval(()=>{
        totalSeconds--;
        updateInputs(totalSeconds)
        if(totalSeconds<=0){
             sec.value='00'
            clearInterval(interval)
            alert('지정한 시간이 끝났습니다')
            showBtn(startBtn)
            hideBtn(pauseBtn)
            startBtn.classList.remove('able');
            resetBtn.classList.remove('able');
        }
    },1000)
}

/* input값 업데이트, 한자리수일 경우에는 앞에 0 붙이기 */
function updateInputs(totalSeconds){
    const hours = Math.floor(totalSeconds / 60 /60);
    const minutes = Math.floor(totalSeconds/60)
    const seconds = totalSeconds % 60

    hrs.value = hours
    min.value = minutes
    sec.value = seconds

    if(hours<10){
        hrs.value='0'+ hours
    }
    if(minutes<10){
        min.value='0' + minutes
    }
    if(seconds<10){
        sec.value='0' + seconds
    }
}

/* 각 버튼에 이벤트 넣기 */

startBtn.addEventListener('click',()=>{
    const hours = parseInt(hrs.value)
    const minutes = parseInt(min.value)
    const seconds = parseInt(sec.value)

    const totalSeconds = (hours * 60 * 60) + (minutes * 60) + seconds
    startTimer(totalSeconds)
    showBtn(pauseBtn)
    hideBtn(startBtn)

})

resetBtn.addEventListener('click',()=>{
    hrs.value='00';
    min.value='00';
    sec.value='00';
    startBtn.classList.remove('able');
    resetBtn.classList.remove('able');
})

pauseBtn.addEventListener('click',()=>{
    showBtn(startBtn)
    hideBtn(pauseBtn)
    clearInterval(interval)
})




// function timer (){    
//     const interval = setInterval(() => {
//         sec.value = sec.value-=1
//         console.log(sec.value)
//         if(sec.value<=0){
//             sec.value='00'
//             clearInterval(interval)
//         } 
//     }, 1000)
// }
