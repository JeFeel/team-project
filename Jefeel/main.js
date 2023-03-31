
import countryList from '/capital.js';

//먼저 선언할 변수들

let arr=[];
let copyArr = [];
let randomNumber;

const $quizCountry = document.querySelector('.country'); 
const $answer = document.querySelector('#answerText');
const $button = document.querySelector('#answerCheck');

// function getFromList(){
//   while(true){  //전체 국가 배열에서 10개를 선정하여 다른 배열에 저장(quiz)
    
    if(copyArr.length<10) {
        randomNumber = Math.floor(Math.random()*countryList.length);
        arr.push(countryList[randomNumber]);
        
        //중복 제거
        copyArr = [...new Set(arr)];
        
    
    }//else{
    //   break;
    // }
//   };
// }


// function setQuestion(){
  let randomQuiz = Math.floor(Math.random()*copyArr.length); 
    $quizCountry.textContent = copyArr[randomQuiz].country;
    // console.log($quizCountry.textContent);
    console.log(copyArr[randomQuiz]);
    let $quizCapital = copyArr[randomQuiz].capital;

    //사용자가 입력한 값이 정답이랑 맞는지 확인
    // function checkAnswer
    
    $button.onclick = ()=>{
      if($answer.value === ''){
        alert('다시 입력해주세요!!');
      }else if($answer.value === $quizCapital){
        alert("정답~~");
      }else{
        alert("땡!!\n정답은 "+$quizCapital);
      }
    };
// }

// getFromList();
// console.log(copyArr);  
// setQuestion();


// export default getFromList  setQuestion;