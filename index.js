const main = document.querySelector('.main');
const input = main.querySelectorAll('.time_box input')
const hrs = main.querySelector('#hrs');
const min = main.querySelector('#min');
const sec = main.querySelector('#sec');

const startBtn = document.querySelector('.start')
const pauseBtn = document.querySelector('.pause')
const resetBtn = document.querySelector('.reset')

const startImg = document.querySelector('.startImg')
const resetImg = document.querySelector('.resetImg')

let interval

/* 
버그 해결못한것 목록

*/

/*
버그 해결 목록 
- 리셋 버튼 안됨 --> 해결 완
- 시간에 숫자 2이상 넣으면 분 초 이상해짐 --> 해결완
- 아무것도 안하고 스타트 누르면 이상함 --> 걍 못누르게함
- 아무것도 입력 안하면 타이머도 없어짐 --> 해결완  
- 시간 가고있는 상태랑 pause 상태에서 새 값 어떻게 못넣게 하지? --> 해결완
- 인풋값에 초 넣을때 한자리로 보이는거 어떻게 해결하지? --> 안해도 된다함
- 클릭하고 인풋 값 사라지는데... 그러고 다시 시작하면 이상해짐... --> 해결완
*/


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
        startBtn.removeAttribute('disabled')
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
            clearInterval(interval)
            alert('지정한 시간이 끝났습니다')
            hrs.value='00'
            min.value='00'
            sec.value='00'
            showBtn(startBtn)
            hideBtn(pauseBtn)
            startBtn.classList.remove('able');
            resetBtn.classList.remove('able');
        }
    },1000)
}

/* input값 업데이트, 한자리수일 경우에는 앞에 0 붙이기 */
function updateInputs(totalSeconds){
    const hours = Math.floor(totalSeconds / 60 / 60);
    const minutes = Math.floor((totalSeconds/60)%60)
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
    input.forEach((el)=>{
        // el.setAttribute("readonly", "readonly");
        el.setAttribute("disabled","disabled");
        if(el.value===''){
            parseInt(el.value='00')
        }
    })
    const hours = parseInt(hrs.value)
    const minutes = parseInt(min.value)
    const seconds = parseInt(sec.value)

    const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds
    startTimer(totalSeconds)
    showBtn(pauseBtn)
    hideBtn(startBtn)

    
})

resetBtn.addEventListener('click',()=>{
    hrs.value='00';
    min.value='00';
    sec.value='00';
    showBtn(startBtn)
    hideBtn(pauseBtn)
    startBtn.classList.remove('able');
    resetBtn.classList.remove('able');
    clearInterval(interval)
    input.forEach((el)=>{
        // el.removeAttribute("readonly", "readonly");
        el.removeAttribute("disabled");

    })
})

pauseBtn.addEventListener('click',()=>{
    showBtn(startBtn)
    hideBtn(pauseBtn)
    // input.forEach((el)=>{
    //     // el.removeAttribute("readonly", "readonly");
    //     el.removeAttribute("disabled");

    // })
    clearInterval(interval);
})



