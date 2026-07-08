import { InputBox } from "../../../lib/turtle-ui/components";
import { IconSwap } from "../../assets/icons/interfaceIcons2";

export const DateFilter = ({ dateFrom, dateTo, onChange = () => {} }) => (
  <div className="flex items-center gap-2">
    <InputBox
      type="date"
      size="sm"
      className="flex-grow"
      name="dateFrom"
      value={dateFrom}
      onChange={onChange}
    />
    <div className="flex-shrkin-0 flex items-center justify-center">
      <IconSwap />
    </div>
    <InputBox
      type="date"
      size="sm"
      className="flex-grow"
      name="dateTo"
      value={dateTo}
      onChange={onChange}
    />
  </div>
);
