//use with saga => const isLoadingMovie = yield select(getIsLoadingMovie);
//use with thunk action => const isLoadingMovie = getIsLoadingMovie(getState());
//use with hook useSelector => const isLoadingMovie = useSelector(getIsLoadingMovie);
export const getIsLoadingMovie = (state) => state.movieReducer.isLoadingMovie;

export const getListMovie = (state) => state.movieReducer.listMovie;

export const getListGenres = (state) => state.movieReducer.listGenres;
