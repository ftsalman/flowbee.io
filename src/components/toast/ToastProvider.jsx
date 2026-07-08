import PropTypes from "prop-types";
import { IconCross } from "../../assets/icons/InterfaceIcons";
import { Slide, ToastContainer } from "react-toastify";
import { Button } from "../../../lib/turtle-ui/components";

const ToastProvider = () => {
  return (
    <ToastContainer
      limit={3}
      draggable={true}
      transition={Slide}
      position="top-center"
      autoClose={3000}
      closeButton={({ closeToast }) => <CustomCloseBtn onClose={closeToast} />}
      pauseOnHover={true}
      hideProgressBar={true}
      className="p-4"
    />
  );
};

export default ToastProvider;

const CustomCloseBtn = ({ onClose }) => (
  <Button
    className="absolute top-2 right-2 size-5 p-0 border-0 rounded-full shadow-none bg-gray-100 hover:bg-gray-200 text-gray-600 duration-300"
    variant="secondary"
    onClick={(e) => {
      e.stopPropagation();
      onClose(e);
    }}
  >
    <IconCross size="14" />
  </Button>
);

CustomCloseBtn.propTypes = {
  onClose: PropTypes.func.isRequired,
};
