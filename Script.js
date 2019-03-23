// Disbaling Mouse Scrolling on the Number
$('input[type=number]').on('wheel', function(e){
  return false;
});

let inputElement = document.querySelector("input");
let outputDiv = document.getElementsByClassName("card-text")[0];

inputElement.addEventListener("keyup", inputChangeFunction);
inputElement.addEventListener("change", inputChangeFunction);


function inputChangeFunction() {
  const number = inputElement.value;
  const fetchURL = `http://numbersapi.com/${number}`;
  // console.log(number.length)
  if(number.length !== 0) {
    fetch(fetchURL)
      .then(res => res.text())
      .then(data => {
        outputDiv.style.display = 'block';
        
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