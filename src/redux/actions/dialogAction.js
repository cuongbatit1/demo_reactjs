export function openDialog() {
  return { type: "open" };
}

export function closeDialog() {
  return { type: "close" };
}

export function loadDataState() {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    const stateBefore = getState();
    console.log("Counter before", stateBefore);
  };
}
