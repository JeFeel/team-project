
//객체 필요한거
//수도, 국가, 입력버튼, 정답, 오답

const quiz = {
  countryList:[
    {
      country: '대한민국',
      capital: '서울',
    },
    {
      country: '미국',
      capital: '워싱턴 D.C.',
    },
    {
      country: '중국',
      capital: '베이징',
    },
    {
      country: '일본',
      capital: '도쿄',
    },
    {
      country: '태국',
      capital: '방콬',
    },
    {
      country: '네팔',
      capital: '카트만두',
    },
    {
      country: '레바논',
      capital: '베이루트',
    },
    {
      country: '몰디브',
      capital: '말레',
    },
    {
      country: '미얀마',
      capital: '네피도',
    },
    {
      country: '방글라데시',
      capital: '다카',
    },
    {
      country: '베트남',
      capital: '하노이',
    },
    {
      country: '북한',
      capital: '평양',
    },
    {
      country: '사우디아라비아',
      capital: '리야드',
    },
    {
      country: '시리아',
      capital: '다마스쿠스',
    },
    {
      country: '아랍에미리트',
      capital: '아부다비',
    },
    {
      country: '아프가니스탄',
      capital: '카불',
    },
  ]
};

const countryList = quiz.countryList;
// console.log(countryList.length); 16

// let randomList = [];
let rn = Math.floor(Math.random()*countryList.length);
// console.log(rn);
console.log(`국가: ${countryList[rn].country}, 수도: ${countryList[rn].capital}`);

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
    // continue;
  }else if($answer.value === countryList[rn].capital){
    alert("정답~~");
  }else{
    alert("땡!!\n정답은 "+countryList[rn].capital);
  }
}


