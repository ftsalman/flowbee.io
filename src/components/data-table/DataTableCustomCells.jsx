import { Button } from "../../../lib/turtle-ui/components/button/Button";
import { cn } from "../../../lib/turtle-ui/utils";
import {
  IconBin,
  IconCancel2,
  IconEdit,
} from "../../assets/icons/interfaceIcons2";

export const StatusCell = ({ status, className = "" }) => {
  const normalizedStatus = status?.toLowerCase();

  const isActive = normalizedStatus === "active";

  const statusStyle = isActive
    ? "bg-green-50 text-green-700 border-green-200"
    : "bg-red-50 text-red-700 border-red-200";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 border ${statusStyle}`}
    >
      <span
        className={`w-2 h-2 rounded-full ${
          isActive ? "bg-green-500" : "bg-red-500"
        }`}
      />
      <span className="font-medium text-xs">
        {isActive ? "Active" : "Canceled"}
      </span>
    </div>
  );
};
export const PaymentStatusCell = ({ status = "P", className = "" }) => {
  const STATUS_TYPES = {
    N: {
      dot: "bg-indigo-500",
      text: "text-indigo-600",
      bg: "bg-indigo-50",
      label: "Earnings in progress",
    },
    P: {
      dot: "bg-blue-600",
      text: "text-blue-600",
      bg: "bg-blue-50",
      label: "Ready to withdraw",
    },
    R: {
      dot: "bg-orange-600",
      text: "text-orange-700",
      bg: "bg-orange-50",
      label: "Payout requested",
    },
    D: {
      dot: "bg-green-600",
      text: "text-green-700",
      bg: "bg-green-50",
      label: "Paid",
    },
    C: {
      dot: "bg-red-600",
      text: "text-red-700",
      bg: "bg-red-50",
      label: "Rejected",
    },
  };

  const currentStatus = STATUS_TYPES[status] || {
    dot: "bg-gray-500",
    text: "text-gray-600",
    bg: "bg-gray-100",
    label: "Unknown",
  };

  return (
    <div
      className={cn("flex w-full justify-center items-center py-2", className)}
    >
      <div
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-0.5",
          currentStatus.bg,
        )}
      >
        <span className={cn("w-2 h-2 rounded-full", currentStatus.dot)} />

        <span className={cn("text-xs font-semibold", currentStatus.text)}>
          {currentStatus.label}
        </span>
      </div>
    </div>
  );
};
export const ActionsCell = ({ data = null, actions = {}, className = "" }) => {
  return (
    <>
      <div className={cn("px-4 py-2 flex justify-center gap-2", className)}>
        {actions?.renew && (
          <Button
            className="size-8 p-0.5"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions?.renew(data);
            }}
          >
            <IconRefresh />
          </Button>
        )}

        {actions?.cancel && (
          <Button
            className="size-8 p-0.5 text-red-600 focus:shadow-red-100"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions?.cancel(data);
            }}
          >
            <IconCancel2 size="20" />
          </Button>
        )}

        {actions?.edit && (
          <Button
            className="size-8 p-0.5"
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.edit(data);
            }}
          >
            <IconEdit />
          </Button>
        )}

        {actions?.delete && (
          <Button
            className={cn(
              "size-8 p-0.5 text-red-600 focus:shadow-red-100",
              actions?.viewClassName,
            )}
            variant="tertiary"
            onClick={(e) => {
              e.stopPropagation();
              actions.delete(data);
            }}
            title="Delete"
          >
            <IconBin />
          </Button>
        )}

        {actions?.admit && (
          <Button
            size="sm"
            className="bg-green-500 text-white px-4 py-1 h-7 rounded-md hover:bg-green-600"
            onClick={(e) => {
              e.stopPropagation();
              actions.admit(data);
            }}
          >
            ADMIT
          </Button>
        )}

        {actions?.custom}
      </div>
    </>
  );
};
