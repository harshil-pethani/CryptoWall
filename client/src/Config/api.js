export const CoinList = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

export const SingleCoinDetails = (id) =>
    `https://api.coingecko.com/api/v3/coins/${id}`;

export const HistoricalChart = (id, days = 365, currency) =>
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;

export const TrendingCoins = (currency) =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`;

export const getNews = () =>
    `https://newsdata.io/api/1/news?apikey=pub_74813f04abf5bbe80211829de1bc32f48e98&q=cryptocurrency`;

export const getNews2 = () =>
    `https://newsapi.org/v2/everything?q=crypto&from=2022-04-18&sortBy=publishedAt&apiKey=415cdb6ced96460d896649287d62bae4`;


export const registerUser = `https://cryptowal.herokuapp.com/api/auth/register`;

export const loginUser = `https://cryptowal.herokuapp.com/api/auth/login`;

export const logoutUser = `https://cryptowal.herokuapp.com/api/auth/logout`;

export const findUser = `https://cryptowal.herokuapp.com/api/auth/find`;

export const updateUser = `https://cryptowal.herokuapp.com/api/user/update`;

export const findCoinList = `https://cryptowal.herokuapp.com/api/coin/find`;

export const addCoinList = `https://cryptowal.herokuapp.com/api/coin/add`;

export const avatarUrl = `https://firebasestorage.googleapis.com/v0/b/luxuryhub-3b0f6.appspot.com/o/Site%20Images%2Fprofile.png?alt=media&token=6f94d26d-315c-478b-9892-67fda99d2cd6`;


// "@testing-library/jest-dom": "^5.16.2",
// "@testing-library/react": "^12.1.4",
// "@testing-library/user-event": "^13.5.0",
// "web-vitals": "^2.1.4"
// "proxy": "http://localhost:5000/api/",
