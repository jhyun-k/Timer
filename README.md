# Timer
Timer 제출 이후 혼자 구현해보기

- 작동영상
![chrome_aF5dYDx9Vg](https://github.com/jhyun-k/Timer/assets/105181266/8b3113c9-ca0b-4708-91e4-53c0e679cbd0)

## 기능명세
1. hrs, min, sec에 각각 시, 분, 초를 입력하고 start버튼을 누르면 숫자가 줄어든다
2. pause 버튼을 누르면 타이머가 멈춘다
3. reset 버튼을 누르면 초기화된다
4. 지정한 시간이 다 되면 alert 창이 뜬다
- 상세기능
  - input 창에 값이 입력되면 start버튼 활성화됨
  - 아무것도 입력하지 않은 상태라면 start 버튼 비활성화
  - 타이머가 시작되면 input 값 변경 불가

### 1. `showBtn()`, `hideBtn()` 로 버튼 조절하기
![](https://velog.velcdn.com/images/jhyun_k/post/3a541788-8eed-4ee5-a37a-bc974439bcbb/image.png)
- start 버튼을 누르면 start 버튼이 사라지고 pause 버튼이 나오고,
pause 버튼을 누르면 start버튼이 나오게 하기
- 버튼 3개를 만들고 `display` 속성을 조절하였다
### 2. input 초기화
![](https://velog.velcdn.com/images/jhyun_k/post/394883e6-826d-49b0-af1d-eb32b53d4c57/image.png)
- **input 창에 input 이벤트 발생시 `able` (활성화 클래스) 붙여주고 startBtn에 `disabled` 속성 제거**
  - `change` 이벤트를 넣을 경우 값을 입력하고 다른 곳을 눌러야 이벤트가 실행된다. 하지만 내 경우에는 값이 입력되자마자 버튼을 활성화 시키고 싶었기 때문에 `input` 이벤트를 사용하였다
  - `input` 변수는 `hrs`,`min`,`sec` 값을 `querySelectorAll`로 받아온 값이라서 `for of` 를 이용하여 반복문 안에서 진행되도록 함
- **input 창 클릭 이벤트 발생시 이벤트가 발생한 value를 '' 으로 할당**
  - `e.currentTarget` 를 쓰면 이벤트 핸들러가 붙어있는 input의 값을 바꿀 수 있다. `e.target` 을 쓸 경우 클릭한 그 요소의 값이 나옴 
  - target은 이벤트가 발생한 바로 그 요소를 직접 가리키고 currentTarget은 이벤트 리스너(EventListener)를 가진 요소를 가리킨다. 이 경우는 input 태그에 자식이 없기에 문제가 없는데 event 를 달 때 유의해서 사용해야한다..!
### 3. 타이머 기능
#### startBtn 클릭 이벤트
![](https://velog.velcdn.com/images/jhyun_k/post/cbc5cae7-2647-4198-8495-eda01ffcd6dc/image.png)
- **start 버튼 클릭하면 모든 input창에 `disabled` 속성 추가**
  - `setAttribute()` 이용
 - **input 클릭시 내용 입력 위해 값을 비우는데 그러고 값을 입력하지 않으면 오류가 났다. 그래서 `if(el.value==='')` 일 경우 다시 `el.value='00'` 으로 값을 할당**해주었다. '00' 은 string이므로 `parseInt` 이용하여 숫자로 바꿔주기
 - **totalSeconds 는 `const totalSeconds = hours * 60 * 60 + minutes * 60 + seconds` 로 계산**
 - startTimer 실행
 - start버튼은 숨기고 pause 버튼 보이기
#### startTimer
![](https://velog.velcdn.com/images/jhyun_k/post/feb86714-293c-47cb-8183-65d77d414ea1/image.png)
- **`startTimer()` 함수를 만들고 `setInterval()` 을 이용하기**
  - interval 변수에 `setInterval()` 전체를 받아줘야 clear 할 때 편하다
- **총 초수(totalSeconds) 를 받아와서 1초씩(1000) 감소**시킨다
- totalSeconds가 0이 되면 `clearInterval`속성으로 타이머 종료
- **타이머가 종료되면 시분초는 다시 '00'으로 만들어주기 **(hrs,min,sec 은 각각 `input`태그를 받아온 것이므로 `변수.value`로 해야 `input`의 `value` 속성을 제어할 수 있다!
- 타이머가 끝났으니 당연히 start버튼을 show 하고 pause버튼 숨기기
- `able`이라는 활성화 클래스도 `classList.remove` 로 지워준다
#### input값 업데이트
>
![](https://velog.velcdn.com/images/jhyun_k/post/13eb0830-2637-48e9-928a-24b30edb9357/image.png)
- 분, 초는 최대 60까지만 입력되어야하기 때문에 계산을 해주어야한다..!
```js
const hours = Math.floor(totalSeconds / 60 / 60);
const minutes = Math.floor((totalSeconds/60)%60)
const seconds = totalSeconds % 60
```
- **각 input 이 10보다 작아지면 앞에 0이 있어야하므로 붙여주기**
  - `padStart` 라는 간편한 속성이 있었다...! 나중에 사용해보기 
### 4. pause 기능
![](https://velog.velcdn.com/images/jhyun_k/post/1786763d-9649-40b3-a38e-3975d9639a47/image.png)
- `clearInterval` 로 타이머 멈추기
- pause 버튼은 숨기고 start 버튼 보이기
### 5. reset 기능
![](https://velog.velcdn.com/images/jhyun_k/post/19ae0b54-09dc-4984-964f-afb7c95dc201/image.png)
- `resetBtn` 클릭 이벤트 발생시 각 인풋의 value는 00으로 초기화
- `clearInterval` 로 타이머 종료
- `able` 활성화 클래스도 `classList.remove` 로 지워준다
- start버튼을 show 하고 pause버튼 숨기기
- 타이머가 진행되는 동안 input 창에 동작하던 disabled 속성도 지워주기
