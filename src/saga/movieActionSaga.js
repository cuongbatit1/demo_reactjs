import { LOAD_DATA_FIRST_LIST_MOVIE } from "./constants/actionTypesSaga";

class MovieActionSaga {
  constructor() {
    console.log("constructor MovieActionSaga");
    // axiosAPI = axios.create({
    //   baseURL: BASE_URL,
    // });
  }
  loadDataFirst = () => {
    console.log("MovieActionSaga loadDataFirst");
    return { type: LOAD_DATA_FIRST_LIST_MOVIE };
  };
}

//Singleton
const movieActionSaga = new MovieActionSaga();
export default movieActionSaga;
