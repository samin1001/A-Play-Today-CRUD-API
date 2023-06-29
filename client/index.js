const container = document.querySelector(".container");

// receive the data from server
const data = await fetch("http://localhost:3000/plays");
const plays = await data.json();

// create card for each play
plays.forEach((play) => {
  const { play_id, play_name, price, date_time_played, duration, cover_photo } =
    play;
  const card = document.createElement("div");
  card.className = "card";
  // create the img container
  const imgContainer = document.createElement("div");
  imgContainer.className = "img-container";
  card.append(imgContainer);
  // append the img
  const playImg = document.createElement("img");
  playImg.src = cover_photo;
  imgContainer.append(playImg);
  //   create the title container
  const titleContainer = document.createElement("div");
  titleContainer.className = "title-container";
  card.append(titleContainer);
  // append the play title
  const playName = document.createElement("h3");
  playName.textContent = play_name;
  playName.className = "play-title";
  titleContainer.append(playName);

  // append date and time
  const date = date_time_played.slice(0, 10);
  const time = date_time_played.slice(11, 16);

  const dateDOM = document.createElement("p");
  dateDOM.className = "date";
  dateDOM.innerHTML = `${date} <br>${time}`;
  titleContainer.append(dateDOM);
  // append the price
  const priceDOM = document.createElement("p");
  priceDOM.className = "price";
  priceDOM.textContent = `£ ${(price / 100).toFixed(2)}`;
  card.append(priceDOM);

  //   create card onClick show detail listener

  card.addEventListener("click", () => showDetails(play_id));

  //   append the card onto container
  container.append(card);
});

function showDetails(id) {
  console.log(id);
}
