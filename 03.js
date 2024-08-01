//## 3.this



// 1. <빈칸>을 작성해주세요
```javascript
const obj1 = {
  value :20,
  getValue(){
      < 빈칸 >
  }
  
}
console.log( < 빈칸 > ) ; //  출력값 20
```
// 내 답
const obj1 = {
    value :20,
    getValue(){
        return this.value
    }
    
  }
  console.log(obj1.getValue()) ; //  출력값 20


 // 2. 웹 브라우저에서 setTimeout 함수 내에서 this가 가리키는 출력값이 왜 그런지 설명해주세요
```javascript
const obj2 ={
    method : function(){
        console.log('첫번째 this : ',this);

        const innerMethod = () =>{
            setTimeout(function(){
                console.log('두번째 this : ' , this); 
            });
        }
        innerMethod();
    }
}

obj.method();
```
// 내 답
/* 
    `obj2.method()`를 호출하면 method 내에서 this는 obj2를 가리킵니다. 따라서 
    "'첫번째 this : ', this"는 obj2를 출력 합니다.
    두 번째 this는 잘 모르겠습니다..
*/