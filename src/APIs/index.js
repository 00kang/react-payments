import axios from "axios";

// axios.defaults.baseURL = "https://woowa-payments-api.herokuapp.com";
axios.defaults.baseURL = "http://localhost:3001";
axios.defaults.headers.post["Content-Type"] = "application/json";

export { getCardType } from "./cardType";
export { getCardList, postCardList, deleteCardList } from "./cardList";
