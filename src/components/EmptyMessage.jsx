import PropTypes from "prop-types";
import { cn } from "../../lib/turtle-ui/utils/utils";
import { IconBlock } from "../assets/icons/interfaceIcons2";

export const EmptyMessage = ({
  icon = true,
  message = "Message Not Available",
  className = "",
}) => (
  <div
    className={cn("flex items-center gap-1 text-xs text-gray-400", className)}
  >
    {icon && <IconBlock size="12" />}
    {message}
  </div>
);

EmptyMessage.propTypes = {
  icon: PropTypes.bool,
  message: PropTypes.string,
  className: PropTypes.string,
};
