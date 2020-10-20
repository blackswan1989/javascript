import "./styles.css";

const API_URL = "https://api.coinpaprika.com/v1/tickers";

const coinDashboard = document.getElementById("coin-dashboard");
const RENEW_SEC = 5;

let coinsUl;

const showLoadingBanner = () => {
  const loadingBanner = document.querySelector(".loading-banner");
  loadingBanner.style.opacity = "1";
};

const hideLoadingBanner = () => {
  const loadingBanner = document.querySelector(".loading-banner");
  loadingBanner.style.opacity = "0";
};

const createCoinsUl = () => {
  coinsUl = document.createElement("ul");
};

const renewCoinBoard = () => {
  coinDashboard.innerHTML = "";
  coinDashboard.appendChild(coinsUl);
  setTimeout(loadCoinsInfoByApi, RENEW_SEC * 1000);
};

const appendCoinInfo = ({ name, symbol, rank, quotes, last_updated }) => {
  const coinItem = document.createElement("div");
  const parsedUpdated = last_updated.replace("T", "_").replace("Z", "");
  coinItem.classList.add("coin-item");
  let hasCrownIcon = false;
  if (rank < 4) {
    hasCrownIcon = true;
    if (rank === 1) coinItem.classList.add("rank-1st");
    if (rank === 2) coinItem.classList.add("rank-2nd");
    if (rank === 3) coinItem.classList.add("rank-3rd");
  }
  coinItem.innerHTML = `
        <div style="margin-bottom: 5px; display: flex; align-items: center;">
        ${
          hasCrownIcon
            ? `<i class="fas fa-crown" style="margin-right: 5px; text-shadow: 0 0 10px black;"></i>`
            : ``
        }
            <span style="margin-right: 10px;">#${rank}</span>
            <i class="fab fa-bitcoin" style="margin-right: 5px;"></i>
            <span style="margin-right: 5px;">${name}</span>
            <span style="margin-right: 5px;">[${symbol}]</span>
        </div>
        <div style="display: flex; align-items: center;">
            <span style="margin-right: 5px;">1${symbol} is</span>
            <i class="fas fa-dollar-sign" style="margin-right: 5px;"></i>
            <span style="margin-right: 5px;">${quotes.USD.price} USD</span>
        </div>
        <div style="display: flex; justify-content: flex-end; align-items: center;">
            <span style="font-size: small; margin-right: 5px;">${parsedUpdated}</span>
        </div>
        `;
  coinsUl.appendChild(coinItem);
};

const loadCoinsInfoByApi = () => {
  showLoadingBanner();
  fetch(API_URL)
    .then((response) => response.json())
    .then((coins) => {
      createCoinsUl();
      coins.sort((a, b) => {
        return a.rank - b.rank;
      });
      coins.forEach((coin) => {
        appendCoinInfo(coin);
      });
      hideLoadingBanner();
      renewCoinBoard();
    })
    .catch((e) => {
      hideLoadingBanner();
      console.log(e);
      coinDashboard.innerHTML = "Can't load coin prices";
      setTimeout(loadCoinsInfoByApi, RENEW_SEC * 1000);
    });
};

const init = () => {
  coinDashboard.innerHTML = `<span>Load coin prices</span>`;
  loadCoinsInfoByApi();
};

init();
