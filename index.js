// Generate random number and change the dice image

var randomNumber1 = Math.random() *6 +1;
randomNumber1 = Math.floor(randomNumber1);

var image1 = "images/dice"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src", image1);



// Generate random number and change the dice image

var randomNumber2 = Math.random() *6 +1;
randomNumber2 = Math.floor(randomNumber2);

var image2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src", image2);


//Change the text according to the result of dice game


function textGenerator(left, right){

  var message = "not working";

  if(left>right){
    message="Left Win!";
  }else if(left<right){
    message = "Right Win!";
  }else{
    message="Draw!";
  }


  return message;
}

var text = textGenerator(randomNumber1, randomNumber2);


document.querySelector("h1").innerHTML = text;
