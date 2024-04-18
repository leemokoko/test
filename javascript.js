"use strict";

const form__box__uid = document.getElementById('uid');
const form__box__pwd = document.getElementById('pwd');
const form__box__botton = document.getElementById('login');
let errStack = 0;

form__box__botton.addEventListener('click', () => {
    if (form__box__uid.value == 'ds8830') {
        if (form__box__pwd.value == 'ds633194') {
            alert('로그인 되었습니다!')
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
            errStack ++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }

    if (errStack >= 5) {
        alert('바보아이가?를 클릭해주세요.')
    }
})






// function color() {
//     if((form__box__uid.ariaValueMax.length>0 && form__box__uid.length.index0f("@")!==-1)
//     && form__box__pwd.ariaValueMax.length >= 8){
//     form__box__botton.style.backgroundColor = "#272727";
//     form__box__botton.disabled = false;    
//     } else{
//         form__box__botton.style.backgroundColor = "#0095f6";
//         form__box__botton.disabled = true;
//     }
// }

// function moveToMain(){
//     location.replace("./login.html");

// }

// form__box__uid.addEventListener('keyup', color);
// form__box__pwd.addEventListener('keyup', color);
// form__box__botton.addEventListener('click', moveToMain);