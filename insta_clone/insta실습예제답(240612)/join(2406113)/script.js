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

function updateInputState(val, activeVar) {
  if(val.vaul.trim().length > 0) {
    //animate-input 에 active class add
    val.parentElemet.classList.add('ative');
    activeVar = true
  } else {
    //animate-input 에 active class remove
    val.parentElemet.classList.remove('active');
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


  })
})
