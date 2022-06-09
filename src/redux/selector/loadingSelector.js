//use with saga => const isLoading = yield select(getIsLoading);
//use with thunk action => const isLoading = getIsLoading(getState());
//use with hook useSelector => const isLoading = useSelector(getIsLoading);

export const getIsLoading = (state) => state.loadingReducer.isLoading;
