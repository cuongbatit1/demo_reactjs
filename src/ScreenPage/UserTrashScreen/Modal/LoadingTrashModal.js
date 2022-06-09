import { useSelector, useDispatch } from "react-redux";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};
const LoadingTrashModal = () => {
  const isLoadingTrash = useSelector(
    (state) => state.userTrashReducer.isLoadingTrash
  );
  const dispatch = useDispatch();
  return (
    <>
      {console.log("LoadingTrashModal Render")}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isLoadingTrash}
        // onClose={() => {
        //   dispatch(closeLoadingAction());
        // }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <CircularProgress />
        </Box>
      </Modal>
    </>
  );
};

export default LoadingTrashModal;
