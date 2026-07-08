import { IconSave } from "../../assets/icons/interfaceIcons2";
import { Button, Modal } from "../../../lib/turtle-ui/components";
import { CircleBg } from "../CircleBg";

export const SuccessAlert = ({
  onConfirm = () => {},
  onCancel = () => {},
  title = "",
  descp = "",
  primaryBtnLable = "",
  secondaryBtnLabel = "",
  hideCloseBtn = false,
  modalProps = {},
  icon = <IconSave size={24} />,
}) => (
  <Modal
    className="w-full max-w-[350px] border border-gray-200"
    onClose={onCancel}
    {...modalProps}
  >
    <Modal.Header
      onClose={hideCloseBtn ? null : (e, type) => onCancel?.(e, type)}
      className="border-b-0 pb-0 sm:pb-0 md:p-4 md:pb-0 flex items-center"
    >
      <div className="w-full">
        <CircleBg className="size-15" variant="green">
          {icon}
        </CircleBg>
      </div>
    </Modal.Header>
    <Modal.Body className="py-0 pt-3">
      <h4 className="text-lg font-semibold text-gray-800">
        {title || "Are you sure ?"}
      </h4>
      <p className="mt-1 text-gray-400 text-sm">
        {descp || "Would you like to save your progress ?"}
      </p>
    </Modal.Body>
    <Modal.Footer className="md:p-4 grid grid-cols-2 gap-2 border-0">
      <Button variant="secondary" onClick={onCancel}>
        {secondaryBtnLabel || "Cancel"}
      </Button>
      <Button variant="success" onClick={onConfirm}>
        {primaryBtnLable || "Save"}
      </Button>
    </Modal.Footer>
  </Modal>
);
