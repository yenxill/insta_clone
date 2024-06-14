let joinBtn = document.getElementById('join-btn');
//console.log(joinBtn)
//console.log(aanimateInput)

let animateInput = document.querySelectorAll('.animate-input');
//console.log(animateInput)

// 복합 대입자
let emailAct = nameAct = idAct = pwAct = false;
//console.log(emailAct, nameAct, idAct, pwAct)

let userEmail = document.getElementById('user-email');
let userName = document.getElementById('user-name');
let userId = document.getElementById('user-id');
let userPw = document.getElementById('user-pw');
//console.log(userEmail, userName, userId, userPw)

let pwBtn = document.getElementById('pw-btn');
//console.log(pwBtn)

function updateInputState(val, activeVar) {
  if(val.value.trim().length > 0) {
    //animate-input 에 active class add
    val.parentElement.classList.add('active');
    activeVar = true
  } else {
    //animate-input 에 active class remove
    val.parentElement.classList.remove('active');
    activeVar = false;
  }

  return activeVar;
}

animateInput.forEach((item) => {
  let input = item.querySelector('input');
  //console.log(item)
  //console.log(input)

  input.addEventListener('keyup', () => {
    //이벤트 대상만 log 나타남 
    //console.log(input)

    if(input == userEmail) {
      //console.log('같다')
      emailAct = updateInputState(input, emailAct);
    } else if(input == userName) { 
      nameAct = updateInputState(input, nameAct);
    } else if(input == userId) {
      idAct = updateInputState(input, idAct);
    } else if(input == userPw){
      pwAct = updateInputState(input, pwAct);
    }

    let allTrue = emailAct && nameAct && idAct && pwAct;
    if(allTrue) {
      // allTrue 안 값이 모두 참일 때 
      // joinBtn disabled 속성 remove
      joinBtn.removeAttribute('disabled');
      // j-Query에서는 .attr('disabled', true / false) 사용 가능
      // vanilla JS에서는 속성 제거할 때 flase X | removeAttribute() 사용!
      // joinBtn.setAttribute('disabled', false);
    } else {
      joinBtn.setAttribute('disabled', true);
    }
  })
})

//비밀번호 표시 or 숨기기
function modeToggle() {
  // 삼항연산자
  // 조건 ? true : false
  let pwType = userPw.getAttribute('type') == 'password';
  //console.log(pwType)

  // userPw type : password => text | pwBtn.innerHTML = '숨기기'
  userPw.setAttribute('type', pwType ? 'text' : 'password');
  // userPw type : text => password | pwBtn.innerHTML = '비밀번호 표시'
  pwBtn.innerHTML = pwType ? '숨기기' : '비밀번호 표시';

  // userPw.getAttribute('type') == "password"
  //? (userPw.setAttribute("type", "text"), (pwBtn.innerHTML = "숨기기"))
  //: (userBtn.setAttribute("type", "text"), (pwBtn.innerHTML = "비밀번호 표시"))
  
}

pwBtn.addEventListener('click', modeToggle);