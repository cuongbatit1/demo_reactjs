//use with saga => const listUserTrash = yield select(getListUserTrash);
//use with thunk action => const listUserTrash = getListUserTrash(getState());
//use with hook useSelector => const listUserTrash = useSelector(getListUserTrash);

export const getListUserTrash = (state) => state.userTrashReducer.listUserTrash;

export const getSelectRestore = (state) => state.userTrashReducer.selectRestore;
