import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { ActionPendingState } from "./ActionPendingState";
import PropTypes from "prop-types";
import { useToast } from "../hooks/useToast";
import { useAnimation, useToggle } from "../../lib/turtle-ui/hooks";
import { DangerAlert } from "./alert-modals/DangerAlert";
import { clearUserCredentials } from "../services/redux/reducers/userReducer";
import { IconLogout } from "../assets/icons/interfaceIcons2";

export const LogoutWrapper = ({ children }) => {
  const [isActionPending, setIsActionPending] = useState(false);

  const navigate = useNavigate();
  const userCredentials = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { removeItem } = useLocalStorage();
  const { showToast } = useToast();

  const [
    renderWarningAlert,
    isWarningAlertOpen,
    handleOpenWarningAlert,
    handleCloseWarningAlert,
  ] = useAnimation();

  const handleLogout = async () => {
    handleCloseWarningAlert();
    removeItem("REFERRAL_FLOWBEE_CREDENTIALS");
    dispatch(clearUserCredentials());
    navigate("/auth/login", {
      replace: true,
    });

    // try {
    //   toggleAlertModal();
    //   setIsActionPending(true);

    //   const response = await apiLogout({
    //     usercd: userCredentials.userCode,
    //     fcM_KEY: userCredentials?.fcmKey,
    //   });

    //   const { STATUS, MESSAGE } = response;

    //   if (STATUS == "1") {
    //     removeItem("REFERRAL_FLOWBEE_CREDENTIALS");
    //     dispatch(clearUserCredentials());
    //     navigate("/auth/login");
    //   } else {
    //     showToast({
    //       variant: "danger",
    //       head: "Something Went Wrong",
    //       descp: MESSAGE,
    //     });
    //   }
    // } catch (error) {
    //   showToast({
    //     variant: "danger",
    //     head: "Something Went Wrong",
    //     descp: error.message,
    //   });

    //   // removeItem("CHAT_FLOW_AUTH");
    //   // dispatch(clearUserCredentials());
    //   // navigate("/auth/login");
    //   // navigator.serviceWorker.getRegistrations().then((registrations) => {
    //   //   registrations.forEach((registration) => registration.unregister());
    //   // });
    // } finally {
    //   setIsActionPending(false);
    // }
  };

  return (
    <>
      {children({ onClick: () => handleOpenWarningAlert() })}
      {isActionPending && <ActionPendingState />}

      {renderWarningAlert && (
        <DangerAlert
          modalProps={{
            isOpen: isWarningAlertOpen,
            onClose: () => handleCloseWarningAlert(),
          }}
          onConfirm={handleLogout}
          onCancel={() => handleCloseWarningAlert()}
          title="Are you sure you want to log out?"
          descp="You are about to end your current session. Please confirm to proceed with logging out"
          primaryBtnLable="Yes, log out"
          secondaryBtnLabel="No, keep logged in"
          icon={<IconLogout size="24" />}
        />
      )}
    </>
  );
};

LogoutWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};
