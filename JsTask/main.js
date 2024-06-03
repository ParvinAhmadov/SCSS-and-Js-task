// TASK 1.let a=100
///Eger eded 33 e boulunende
// alinan qalid 30dan
//boyukdurse hemin qaligin 14
//de bolunmesonden alinan qaliq
// 10dan boyukdurse hemin qaligin 5 bolunmesinden alinan qaligi goster.
//

// let a = 100;
let a = parseInt(prompt("zehmet olmasa reqem daxil edin"));
let num1 = a % 33;
console.log("33-e bolunenden alinan qaliq" + " " + num1);
if (num1 > 30) {
  let num2 = num1 % 14;
  console.log("14-e bolunmesinden alinan qaliq:" + "" + num2);
  if (num2 > 10) {
    let num3 = num2 % 5;
    console.log(num3);
  } else {
    console.log("Qaliq 10-dan boyuk deyil" + " " + num2);
  }
} else {
  console.log("Qaliq 30-dan boyuk deyil" + " " + num1);
}

// TASK 2.
//User eni ve uzunlugu daxil edecek.
//eger en ve uzunluq 10dan boyukdurse duzbucaqlinin sahesini goster
//yox eger 10dan azdirsa duzbucagin perimetrini goster

// let en = parseInt(prompt("eni daxil edin"));
// let uzunluq = parseInt(prompt("uzunluq daxil edin"));

if (en > 10 && uzunluq > 10) {  
  let sahe = en * uzunluq;
  console.log("duzbucaqli sahesi:" + " " + sahe);
} else {
  let perimetr = 2 * (en + uzunluq);
  console.log("duzbucaqlinin perimetri" + " " + perimetr);
}

// Task3
// Kvardratin Sahesin yazin
// EGER kvardtarin sahesi 25 den boyukdurse hemin ededin 12 ye bolunmesinden alinan qaligi goster

let sahe = parseInt(prompt("kvadratin sahesin yazin"));
if (sahe > 25) {
  let qaliq = sahe % 12;
  console.log("12-e bolunmeden alinan qaliq" + " " + qaliq);
} else {
  console.log("kvadratin sahesi 25-den boyuk deyil");
}