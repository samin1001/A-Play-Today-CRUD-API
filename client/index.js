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

  card.addEventListener("click", () => showDetails(play));

  //   append the card onto container
  container.append(card);
});

const outerModal = document.createElement("div");
// outerModal.className = "outer-modal";
outerModal.classList = [`outer-modal hidden`];
const innerModal = document.createElement("div");
innerModal.className = "inner-modal";
outerModal.append(innerModal);
document.body.append(outerModal);
function showDetails(play) {
  outerModal.classList.remove("hidden");
  //   create two sections for innerModal
  const leftSection = document.createElement("div");
  leftSection.className = "modal-left";
  const rightSection = document.createElement("div");
  rightSection.className = "modal-right";
  innerModal.append(leftSection);
  innerModal.append(rightSection);
  // put img container into left section
  const imgContainer = document.createElement("div");
  imgContainer.className = "modal-img-container";
  leftSection.append(imgContainer);
  // append the img
  const playImg = document.createElement("img");
  playImg.src = play.cover_photo;
  imgContainer.append(playImg);
  //   append the name
  const playName = document.createElement("h2");
  playName.textContent = play.play_name;
  playName.className = "modal-play-title";
  leftSection.append(playName);
  //   append the summary
  const summary = document.createElement("p");
  summary.textContent = `This is the summary`;
  leftSection.append(summary);
  //   create  detail row for styling
  const detailRowDate = document.createElement("div");
  detailRowDate.className = "modal-detail-row";
  const detailRowTime = document.createElement("div");
  detailRowTime.className = "modal-detail-row";
  const detailRowActor = document.createElement("div");
  detailRowActor.className = "modal-detail-row";
  const detailRowButtonSection = document.createElement("div");

  //  append the details
  const date = document.createElement("p");
  date.className = "";
  date.textContent = ` ${play.date_time_played.slice(0, 10)}`;

  const dateHeader = document.createElement("p");
  dateHeader.className = "detail-header";
  dateHeader.textContent = "Performance Date:";

  detailRowDate.append(dateHeader);
  detailRowDate.append(date);
  rightSection.append(detailRowDate);

  const timeHeader = document.createElement("p");

  const time = document.createElement("p");
  time.className = "modal-details";
  time.innerHTML = `<strong>Start at: </strong>${play.date_time_played.slice(
    11,
    16
  )}`;
  rightSection.append(time);
}
