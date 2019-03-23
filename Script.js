// Disbaling Mouse Scrolling on the Number
$('input[type=number]').on('wheel', function(e){
  return false;
});

let inputElement = document.querySelector("input");
let outputDiv = document.getElementsByClassName("card-text")[0];
let loaderId = document.getElementById("loader");

let timeout = null;

let delayedResponse = function() {
  clearTimeout(timeout);
  timeout = setTimeout(inputChangeFunction, 500);
}

inputElement.onkeyup = delayedResponse;


function inputChangeFunction() {
  console.log(timeout)
  const number = inputElement.value;
  const fetchURL = `https://cors-anywhere.herokuapp.com/http://numbersapi.com/${number}`;
  // console.log(number.length)
  const options = {
    headers: {"x-requested-with": "", "origin": ""}
  };
  if(number.length !== 0) {
    loaderId.style.display = 'block';
    outputDiv.style.display = 'none';

    fetch(fetchURL, options)
      .then(res => res.text())
      .then(data => {
        loaderId.style.display = 'none';
        outputDiv.style.display = 'block';
        console.log('fetched data')
        const paragraphElement = outputDiv.querySelector("#output-text")
        //console.log(paragraphElement);
        paragraphElement.innerHTML = data;
      })
      .catch(err => {
        console.log(err);
        outputDiv.style.display = 'block';
        const paragraphElement = outputDiv.querySelector("#output-text")
        paragraphElement.innerHTML = "Sorry! Couldn't load Fact.";
      })
  } else {
    outputDiv.style.display = 'none';
  }
}

