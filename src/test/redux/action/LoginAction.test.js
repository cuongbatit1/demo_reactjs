import { screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import thunk from "redux-thunk";
import { REDUX_TOOL_KIT } from "../../../constants/AppConstants";
import { submitLogin } from "../../../redux/actions/loginAction";
import configureStore from "../../../redux/configureStore";
import configureStoreToolkit from "../../../reduxtoolkit/configureStoreToolkit";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";

jest.mock("../../../utils/Utils");

const axiosMock = new MockAdapter(axios);
const createMockRedux = () => {
  // const store = {
  //   getState: jest.fn(() => ({})),
  //   dispatch: jest.fn(),
  // };
  const store = REDUX_TOOL_KIT ? configureStoreToolkit() : configureStore();
  // const store = {
  //   getState: jest.fn(() => ({})),
  //   dispatch: jest.fn(),
  // };
  const next = jest.fn();

  const invoke = (action) => thunk(store)(next)(action);

  return { store, next, invoke };
};

afterEach(() => {
  console.log("afterEach");
  axiosMock.reset();
});

test("test Action Login", async () => {
  const data = [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ];

  // Mock the request sent to "/users" endpoint
  // Return 200 with mocked data
  axiosMock
    .onGet(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a7b3c9975791294647265c71224a88ad&language=en-US"
    )
    .reply(200, data);
  // const dispatch = jest.fn();
  const { next, invoke } = createMockRedux();
  await invoke(submitLogin(jest.fn()));
  // await submitLogin()(dispatch);
  console.log("test Action Login");
});
