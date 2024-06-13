function updateInputState(input,activeVar) {
  //trim () 공백
  //공백 제거한 value 값의 길이가 0보다 클 때 => 사용자가 input 창에 입력한 값이 하나라도 있냐
  if(input.value.trim().length > 0 ) {
    input.parentElement.classList.add('active');
    activeVar = true;
  } else {
    //value 값의 길이가 없을 때
    input.parentElement.classList.remove('active');
    activeVar = false;
  }

  // return : 해당 함수가 실행 된 후, 함수 호출한 위치로 전달 되는 값
  return activeVar; // true, false
}

let userId = document.getElementById('userid');
let userPw = document.getElementById('userpw');
// console.log(userPw)

let idActive = false;
let pwActive = false;

let submitBtn = document.getElementById('submit-btn');
// console.log(submitBtn)

//복합연산자
//let idActive = pwActive = false

function handleInput(e) {
  //e.target => 이벤트가 일어나는 대상을 뜻 함

  let input = e.target;
  // console.log(e.target)

  let type = input.getAttribute("type");
  //console.log(type)

  //속성
  if(type == "text") {
    idActive = updateInputState(input, idActive); // return 값 => true, false
  } else {
    //type이 text가 아닐 경우 => password
    pwActive = updateInputState(input, pwActive); // return 값 => true, false
  }

  //idAcitve 랑 pwActive 가 모두 참일때 => input.value.length > 0
  if(idActive && pwActive){
    submitBtn.removeAttribute('disabled');
  } else {
    // idActive나 pwActive 중 둘 중 하나라도 false 일 때
    submitBtn.setAttribute('disabled', true);
  }

}

userId.addEventListener('keyup', handleInput);
userPw.addEventListener('keyup', handleInput);

// 예시
// let appTxt = document.querySelector('.app-txt');
// console.log(appTxt)
// function btnClick(e) {
//   console.log(e.target)
// }
// appTxt.addEventListener('click', btnClick)


let pwVisible = document.getElementById('pw-visible');
//console.log(pwVisible)

function pwMode() {
  //조건문
  //userpw의 type이 password일 경우

  if(userPw.getAttribute('type') == 'password') {
    //1. 비밀번호 표시 클릭 => userpw (input) type => text로 변경
    //setAttribute(어떤 속성을, 어떤걸로)
    userPw.setAttribute('type', 'text');

  //2. pwvisible.innerHTML => '숨기기'로 변경
    pwVisible.innerHTML = '숨기기';
  } else {
    //userpw의 type이 password일 경우
    //1. 비밀번호 표시 클릭 => userpw (input) type => password로 변경
    userPw.setAttribute('type', 'password');

    //2. pwvisible.innerHTML => '비밀번호 표시'로 변경
    pwVisible.innerHTML = '비밀번호 표시';
  }

  //userpw의 type이 text일 경우
  // 1. 숨기기 => userpw type => password
  // 2. pwVisible.innerHTML => '비밀번호 표시'로 변경
}


pwVisible.addEventListener('click', pwMode)