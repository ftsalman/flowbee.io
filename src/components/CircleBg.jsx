import PropTypes from "prop-types";

// Utils

import { cva } from "class-variance-authority";
import { cn } from "../../lib/turtle-ui/utils";

export const CircleBg = ({ className, variant, children }) => {
  const iconBadgeVariants = cva(
    "w-12 h-12 flex items-center justify-center border-8 rounded-full",
    {
      variants: {
        variant: {
          default: "bg-blue-100 border-blue-50 text-blue-700",
          red: "bg-red-100 border-red-50 text-red-400",
          green: "bg-green-100 border-green-50 text-green-400",
          blue: "bg-blue-100 border-blue-50 text-blue-400",
          yellow: "bg-yellow-200 border-yellow-100  text-gray-800",
        },
      },
      defaultVariants: {
        variant: "default",
      },
    }
  );

  return (
    <div className={cn(iconBadgeVariants({ variant, className }))}>
      {children}
    </div>
  );
};

CircleBg.propTypes = {
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
