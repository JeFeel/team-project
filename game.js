import countryList from '/capital.js';

//먼저 선언할 변수들

let arr = [];
let copyArr = [];
let randomNumber;
let count=0;
let correct=document.querySelector('#correct');
let quizAnswerCheck = document.querySelector('quizAnswerCheck')

const $quizCountry = document.querySelector('.country');
const $answer = document.querySelector('#answerText');
const $button = document.querySelector('#answerCheck');
let quizCapital;

function random(){
  //arr 배열에 countryList의 길이만큼의 숫자를 저장
  for(let i=0;i<countryList.length;i++){
    arr[i] = i;
  }
    // console.log(arr);
  while (copyArr.length < 10) { //copyArr 길이가 10이면 추가를 멈춤
    randomNumber = Math.floor(Math.random() * countryList.length);
    if (copyArr.includes(randomNumber)) continue; //
    copyArr.push(arr[randomNumber]); 
  }

 
  // console.log(copyArr);
  //인덱스로 쓰일 숫자들이 copyArr에 저장됨
}

//문제 설정
function setQuestion() {
  console.log(count);
  count++;
  if(count>10){
    return alert("게임 끝!");
  }

  const quizIdx = copyArr[copyArr.length - 1]; 
  const quiz = countryList[quizIdx];
  $quizCountry.textContent = quiz.country;

  quizCapital = quiz.capital;
  console.log(quizCapital);
}


$button.onclick = () => {

  if ($answer.value === quizCapital) {
    alert("정답~~");
    correct.textContent++;
  } else {
    alert("땡!!\n정답은 " + quizCapital);
  }
  copyArr.pop();
  setQuestion();  
  $answer.value = '';
  $answer.focus();
    // console.log(quizCapital);   
  };

  random();
  setQuestion();
  
  