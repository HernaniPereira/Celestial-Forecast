import axios from "axios";

export default axios.create({
  baseURL: "http://api.positionstack.com/v1/",
});
