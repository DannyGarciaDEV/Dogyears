function showImg() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(response => response.json())
      .then(data => {
        const imageUrl = data.message;
        const dogImage = document.createElement("img");
        dogImage.src = imageUrl;
        document.body.appendChild(dogImage);
      })
      .catch(error => {
        console.error("Error fetching dog image:", error);
      });
  }
  
  function calculateDogYears() {
    const myAge = parseInt(document.getElementById("ageInput").value);
  
    let earlyYears = 2 * 10.5;
    let laterYears = myAge - 2;
    laterYears *= 4;
  
    let myAgeInDogYears = earlyYears + laterYears;
  
    const myName = document.getElementById("nameInput").value.toLowerCase();
  
    const resultText = `My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`;
  
    document.getElementById("result").textContent = resultText;
  }
  
  // Add event listener to the button with id "showImgButton"
  document.getElementById("showImgButton").addEventListener("click", function () {
    showImg();
    calculateDogYears();
  });