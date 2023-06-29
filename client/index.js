const container = document.querySelector(".container");

// receive the data from server
const data = await fetch("http://localhost:3000/plays");
const plays = await data.json();
console.log(plays);
// create card for each play
plays.forEach((play) => {
  const { play_name, price, date_time_played, duration, cover_photo } = play;
  const card = document.createElement("div");
  card.className = "card";

  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  card.append(imgContainer);
  const playImg = document.createElement("img");
  playImg.src = cover_photo;
  imgContainer.append(playImg);

  const playName = document.createElement("h2");
  playName.textContent = play_name;
  playName.className = "play-title";
  card.append(playName);

  const priceDOM = document.createElement("p");
  priceDOM.textContent = `£ ${(price / 100).toFixed(2)}`;
  card.append(priceDOM);

  //   append the card onto container
  container.append(card);
});
