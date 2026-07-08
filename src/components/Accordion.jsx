import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "../../lib/turtle-ui/components";
import { IconDropDown } from "../assets/icons/interfaceIcons2";

export const Accordion = ({ children, head = null, opened = false }) => {
  const [isOpen, setIsOpen] = useState(opened);

  return (
    <div className="flex flex-col">
      <div
        className={`sticky top-0 z-50 cursor-pointer px-4 py-3 flex items-center gap-4 border-b ${
          isOpen ? "bg-neutral-50" : "bg-white"
        } border-gray-200 duration-300`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="flex-grow text-sm font-semibold text-gray-800">
          {head}
        </h3>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={`p-1 size-8 flex-shrink-0`}
          variant="tertiary"
        >
          <span
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-all duration-300`}
          >
            <IconDropDown size="18" />
          </span>
        </Button>
      </div>
      {isOpen && (
        <div className="flex-grow duration-300 transition-all border-b border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  head: PropTypes.node,
  opened: PropTypes.bool,
};
