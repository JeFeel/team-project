
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


let randomList = [];

// while(true){
//   if(randomList.length===4){
//     break;
//   }else{

//   }
// }
for(let i=0;i<4;i++){
  countryList[Math.floor(Math.random()*countryList.length)];

  console.log(randomList);
}

// console.log(`국가: ${randomList[0].country}, 수도: ${randomList[0].capital}`);

//랜덤으로 뽑힌 4개의 국가 중 한 곳을 문제로 지정, 그 수도를 맞춘다
//국가에 맞는 수도의 보기를 고를 경우 정답, 아니면 오답 처리를 한다

