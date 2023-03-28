
//객체 필요한거
//수도, 국가, 입력버튼, 정답, 오답
import countryList from '/capital.js';


// const countryList = quiz.countryList;
// console.log(countryList.length); 16

// let randomList = [];
let rn = Math.floor(Math.random()*countryList.length);
// console.log(rn);
console.log(`국가: ${countryList[rn].country}, 수도: ${countryList[rn].capital}`);

//count 설정
const $count = 0;

//Question 작성
const $quiz = document.querySelector('.country');

$quiz.textContent = countryList[rn].country;

//Answer 작성, button으로 정답 제출하면 입력값을 비교

const $answer = document.querySelector('#answerText');
const $button = document.querySelector('#answerCheck');

$button.onclick = checkAnswer;

function checkAnswer(){
  if($answer.value === ''){
    alert('다시 입력해주세요!!');
  }else if($answer.value === countryList[rn].capital){
    $count++
    alert("정답~~");
  }else{
    alert("땡!!\n정답은 "+countryList[rn].capital);
  }
}


