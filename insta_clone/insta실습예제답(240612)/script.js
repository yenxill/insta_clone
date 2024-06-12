function updateInputState(input,activeVar) {
  //trim () 공백
  //공백 제거한 value 값의 길이가 0보다 클 때
  if(input.value.trim().length > 0 ) {
    input.parentElement.classList.add('active');
    activeVar = true;
  } else {
    //value 값의 길이가 없을 때
    input.parentElement.classList.add('active');
    activeVar = false;
  }

  return activeVar;
}

let userId = document.getElementById('userid');
let userPw = document.getElementById('userpw');
//console.log(userPw, userId)

let idActive = false;
let pwActive = false;

let submitBtn = document.getElementById('submit-btn');
//console.log(submitBtn)

//복합연산자
//let idActive = pwActive = false

function handleInput(e) {
  //e.target => 이벤트가 일어나는 대상을 뜻 함
  //console.log(e.target)

  let input = e.target;
  //console.log(e.target)

  let type = input.getAttribute("type");
  //console.log(type)

  if(type == "text") {
    idActive = updateInputState(input, idActive);
  } else {
    pwActive = updateInputState(input, pwActive);
  }

  if(idActive && pwActive){
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', true);
  }

}

userId.addEventListener('keyup', handleInput);
userPw.addEventListener('keyup', handleInput);
