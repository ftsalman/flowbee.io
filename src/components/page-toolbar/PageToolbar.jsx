import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { IconArrowBack } from "../../assets/icons/InterfaceIcons";
import { Button } from "../../../lib/turtle-ui/components";
import { cn } from "../../../lib/turtle-ui/utils";

export const PageToolBar = ({ className = "", children = null }) => {
  return (
    <div
      className={cn(
        "sticky top-0 z-40 p-4 border-b bg-white border-gray-200 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

PageToolBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

const Body = ({ className = "", children = null }) => {
  return (
    <div
      className={cn(
        "container gap-4 flex flex-col md:flex-col lg:flex-row justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

Body.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

PageToolBar.Body = Body;

const Header = ({ showBackBtn = false, head = "", descp = "" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2">
      {showBackBtn && (
        <Button
          className="p-1 size-8 flex-shrink-0"
          variant="tertiary"
          onClick={() => navigate(-1)}
        >
          <IconArrowBack size="20" />
        </Button>
      )}
      <div className="flex-grow flex flex-col">
        <h4 className="text-lg font-bold text-gray-800">{head}</h4>
        {descp && (
          <h4 className="mt-1 text-xs md:text-sm text-gray-400">{descp}</h4>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  showBackBtn: PropTypes.bool,
  head: PropTypes.string,
  descp: PropTypes.string,
};

PageToolBar.Header = Header;

const Actions = ({ children = null, actions = [], className = "" }) => {
  return (
    <div
      className={cn(
        "flex-grow flex items-center  gap-2 flex-row-reverse flex-wrap lg:flex-nowrap lg:flex-row justify-start lg:justify-end",
        className,
      )}
    >
      {children || null}
      {actions?.map((action) => action) || null}
    </div>
  );
};

Actions.propTypes = {
  children: PropTypes.node.isRequired,
  actions: PropTypes.array,
  className: PropTypes.string,
};

PageToolBar.Actions = Actions;
