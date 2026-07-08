import PropTypes from "prop-types";
import { IconLoading } from "../assets/icons/interfaceIcons2";
import { Portal } from "../../lib/turtle-ui/components/portal/Portal";
import { cn } from "../../lib/turtle-ui/utils";

export const ActionPendingState = ({ className = "", head = "" }) => (
  <Portal containerId="portal">
    <div
      className={cn(
        "fixed top-0 left-0 h-[100dvh] inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10",
        className
      )}
      id="overlay"
    >
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <div className="flex justify-center animate-spin p-4 text-brand-secondary-500 ">
          <IconLoading size="24" />
        </div>
        {head && <h5 className="text-base font-semibold">{head}</h5>}
      </div>
    </div>
  </Portal>
);

ActionPendingState.propTypes = {
  className: PropTypes.string,
  head: PropTypes.string,
};
