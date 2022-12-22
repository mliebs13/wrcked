import { getBaseUrl } from "@src/utils";
import axios from "axios";

export default axios.create({
  baseURL: getBaseUrl(),
  timeout: 50000,
  timeoutErrorMessage: "Connection error",
});
