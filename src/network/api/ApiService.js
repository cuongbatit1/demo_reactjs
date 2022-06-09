import axios from "axios";
import FormData from "form-data";
import {
  API_KEY,
  API_KEY_PARAM,
  BASE_API,
  BASE_URL,
  EN_US,
  LANGUAGE_PARAM,
} from "../../constants/AppConstants";

class ApiService {
  //   axiosAPI;
  constructor() {
    console.log("constructor Create ApiService");
    // axiosAPI = axios.create({
    //   baseURL: BASE_URL,
    // });
  }

  getListGenres = async () => {
    //   queryMap[KeyWordParam.API_KEY] = Constants.API_KEY
    //         queryMap[KeyWordParam.LANGUAGE] = Constants.EN_US
    // const querystring = "?answer=42&question=unknown";

    const optionsQuery = new URLSearchParams();
    optionsQuery.append(API_KEY_PARAM, API_KEY);
    optionsQuery.append(LANGUAGE_PARAM, EN_US);

    console.log("optionsQuery", optionsQuery.toString());
    return await axios.get(BASE_URL + BASE_API + "/genre/movie/list?" + optionsQuery.toString());
  };
}
//Singleton
const apiService = new ApiService();
export default apiService;
