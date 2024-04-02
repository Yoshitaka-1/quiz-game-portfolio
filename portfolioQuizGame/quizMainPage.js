//console.log();

const quiz = [
  {
    question: "Q1.日本人の血液型で一番多いのは何型でしょうか？",
    answers: [
      "Ａ型",
      "Ｂ型",
      "Ｏ型",
      "ＡＢ型"
    ],
    correct: "Ａ型",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1PAh5aaPpKV36PF4_p2V_6Gl6FSjL9cRzkKRihyWU-WGMkFnl5RMeonWCdPyryMKxS2rDwB2xQXOas_Z2I41vyo6TtuqNVec1jnMOVsXT8mL8UqJfNBN1KUjOxejYfp7mpVL3yxE07CA/s800/ketsuekigata_character.png"
  },{
    question: "Q2.かつて、地震はある生き物によって引き起こされると信じられていました。その生き物とは？",
    answers: [
      "ゴリラ",
      "ダチョウ",
      "カマキリ",
      "ナマズ"
      ],
    correct: "ナマズ",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivblAC0PeCU4MLbSuCzGIcWdSfHt7TjAjfZutQCq5mLDgnxxulNFH7u2PpjudnoeA28tColsBOxxg7sP4VqneKFj5bW6nJCF8qjF3Izil-pMq4RCDUv8x1VLRpVG-VzZCE0iyWkLo-B2U/s450/jishin_house.png"
  },{
    question: "Q3.フルーツサンド発祥の国はどこでしょうか？",
    answers: [
      "アメリカ",
      "日本",
      "フランス",
      "イタリア"
      ],
    correct: "日本",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAaU6HLb2psXYMVLAIWMq1eq9RhYP7JvQHeeHFojAAH6k0tBIsTTuuxQa87GNrs3irabkVXH19b9N56b3ZNSQavTfRRmee2h75eiiexgdHMffF1BR69-uOcQtyfsIBmsq1yuk9pHgU-cBy/s400/food_fruit_sandwich.png"
  },{
    question: "Q4.植物にも人間と同じようにあるものはなんでしょう？",
    answers: [
      "血液型",
      "脳みそ",
      "心臓",
      "髪の毛"],
    correct: "血液型",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8op3uoY56bUKigyX9KsBx2sK1rxmK7EFZkTUONq0klSschAwaVs7Xcklz6FuANLSMoZ_7FLnatfC-PDpnHAJMdPNrh4C1SKgK6QWtN2K3bKjfrn7BGui70jZNCK6MMypgUXkdSOuNgl9E/s400/job_engeiten_man.png"
  },{
    question: "Q5.砂糖は昔、何に活用されていた？",
    answers: [
      "頭痛薬",
      "風邪薬",
      "胃痛薬",
      "解熱剤"],
    correct: "風邪薬",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjKgJUT6tOCi6XfqHE99P-PAEmwCy-ZEWmcSF6nUGXpNwzWit3Duk-36wULGD8Dblbq7dJIFskfGY2fljrynYC8LDbG-vdQ8jHu7sDrmHYfznq5I3ixh3JY9fcqbvIG2WIokzzKesrRJAM/s400/sugar.png"
  },{
    question: "Q6.ことわざの「急がば回れ」の語源となった場所はどこ？",
    answers: [
      "富士山",
      "清水寺",
      "厳島神社",
      "琵琶湖"],
    correct: "琵琶湖",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5vWequlF7RccmVoCz0DYgdbRrQCO81OasS9dAWv8VG8aqx1zE0WgjJJapA2aBh7N5IEOu4qUkQV06klIxteG4jWbX12qJ3_8ItKUhHcFubMzceWlRIY4Bk5TICedUQ4W0roRoA6ZCpFyZ/s400/travel_isogu.png"
  },{
    question: "Q7.靴の「ローファー」には英語でどんな意味がある？",
    answers: [
      "怠け者",
      "働き者",
      "幸せ者",
      "大金持ち"],
    correct: "怠け者",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj4NaKc606cYlQ6UEMHDsCc2YqojbUACR1A1076bOqcIYUvmroDkYhQg58StV37REiNM3DaW8XCmsl7B4l73t1Tg7wKR-mT7aZ21tgZBpvLOEHRAo8ei7NHoipwzlhrvhxS50SrynStEVsq/s400/shoes_loafers_black.png"
  },{
    question: "Q8.白くまの肌の色は何色？",
    answers: [
      "白",
      "赤",
      "青",
      "黒"],
    correct: "黒",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTGY17oPE5SwN0xtn7RT_yzbJk6ZWeIkiIb5SjgazvBasNtRL5SloIuwcszj6dZfgjITFMoLU9qPVi61rwrDkONmiB5uO2BkeEDr95peRGatncDwgdSFiYEE8UtAFLXEsOivlMBDN3Z8Q8/s400/animal_bear_hokkyoku.png"
  },{
    question: "Q9.スーツの袖のボタンは、もともとどんな理由で付けられたでしょうか？",
    answers: [
      "飾り",
      "鼻水を拭かないため",
      "予備のボタン",
      "袖口の太さを変えるため"],
    correct: "鼻水を拭かないため",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfeEFlteUJbfeNwpcxK4w75R1bIRf6WlAessRCDpFuANCaqqGMuFYL7v1IT_v-RgGltm7I1B9VJ7O7vhhM9DZG1dqtXeYqPkJNZ8F8dj1MrgAoOlEO8LaUu2RBcNmVGVnbqF-QTAkau3qo/s400/suit_man.png"
  },{
    question: "Q10.動物園ではコアラが寝ているところをよく見かけますが、コアラは一日に何時間寝ているでしょうか",
    answers: [
      "8時間",
      "12時間",
      "16時間",
      "20時間"],
    correct: "20時間",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgi7pTq103aK5t99UhgolUJooeVuHJiIhPytqKkp8-wwJPtr7jq8PwBQDb11cyQpYV22sq_CPFqaTrP8KN4fGPtmSFTQBcXfa7lIU_aLZ3DelWEpRwtANXUuXrCPDzZ-6qtj2qrWVYDL5Q/s400/animal_koala_oyako.png"
}
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//正答率の割り出し
let six = quizLength / 5 * 3;
let sixT = Math.floor(six);
let three = quizLength / 10 * 3;
let threeT = Math.floor(three);

const $button = document.getElementsByTagName("button")
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
  document.querySelector("img").setAttribute("src",quiz[quizIndex].image);
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！答えは「" + quiz[quizIndex].correct + "」でした！");
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    let text1 = " 終了！あなたの正解数は" + score + "/" + quizLength + "です！！\n" + "あなたの知識レベル：";
    
    if(score == quizLength){
      window.alert(text1 + "雑学王");
    }else if(score > sixT){
      window.alert(text1 + "物知り");
    }else if(score > threeT){
      window.alert(text1 + "一般人");
    }else{
      window.alert(text1 + "初心者");
    }
    //タイトルに戻るボタン作成、表示
    let btt = document.createElement("button");
    btt.innerHTML = "タイトルに戻る";
    let target = document.getElementById("target");
    target.appendChild(btt);

  }

};


//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}


