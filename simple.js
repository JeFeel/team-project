
import countryList from '/capital.js';

//먼저 선언할 변수들

let arr=[];
// let copyArr = [];
let randomNumber;

const $quizCountry = document.querySelector('.country'); 
const $answer = document.querySelector('#answerText');
const $button = document.querySelector('#answerCheck');

function getFromList(){
  //전체 배열에서 랜덤하게 하나를 고름
    randomNumber = Math.floor(Math.random()*countryList.length);
    arr.push(countryList[randomNumber]);

}


function setQuestion(){
  // let randomQuiz = Math.floor(Math.random()*copyArr.length); 
    $quizCountry.textContent = arr.country;
    // console.log($quizCountry.textContent);

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
}

// getFromList();
// console.log(copyArr);  
// setQuestion();


// export default getFromList  setQuestion;