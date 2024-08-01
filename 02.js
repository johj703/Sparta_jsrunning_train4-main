// ## 2. 스코프 

//1. 출력값과 출력되는 값의 이유를 설명해주세요

var name = "yuno";

function myName(){
    var name = "yuno2";
    function a(){
        console.log(name);
    }
    return a();
}

myName();

/* 내 답 => myName 함수를 출력 했으니 myName 스코프 안에서 선언한 var name = "yuno2"여기에서 name 
변수에 할당한 값인 yuno2가 출력 됩니다. - 스코프 체인 공부 필요!
*/

//2. 출력값과 출력되는 값의 이유를 설명해주세요

function test() {
    var x = 1;

    if(true){
        var x = 2; 
    }

    console.log(x);
}

test();

/* 
    내 답 => test 함수 안에서 "var x = 1;"로 값 할당까지 했지만 var 키워드는 함수 스코프를 따르기 때문에 if문에서 선언한
    "var x = 2"이 할당문을 통해 x의 값이 2로 재할당이 되었습니다. 그렇기 때문에 콘솔에 찍어보면 2가 출력이 됩니다.
*/

//3.화살표 함수와 일반함수의 this의 출력할 값이 다른 이유를 설명해주세요.

const nameObj  = {
    name: "yuno",
    method: function() {
        const arrow = () => {
            console.log(`화살표 함수 : ${this.name}`);
        };
        function normal() {
            console.log(`일반 함수 : ${this.name}`);
        }
        arrow();
        normal();
    }
};

nameObj.method();

/* 
     화살표 함수에서의 this는 자신이 정의된 환경의 this를 상속 받습니다. 따라서 const arrow 함수
    에서의 this는 "yuno"가 됩니다.
     일반 함수에서의 this는 호출 시점에서의 this를 가지게 되므로 undefined가 됩니다.
*/