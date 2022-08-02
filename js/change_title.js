function updateHeading(newHeading) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = newHeading;
}

function changeMe() {
  let cityName = prompt("What city do you live in?");
  let temperature = prompt("What temperature is it?");

  if (temperature >= 0) {
    updateHeading(
      "😄<br />" + "Currently " + temperature + "°C" + " in " + cityName
    );
  } else {
    updateHeading(
      "☹️<br />" + "Currently " + temperature + "°C" + " in " + cityName
    );
  }
}

let changeButton = document.querySelector("button");
changeButton = addEventListener("click", changeMe);
