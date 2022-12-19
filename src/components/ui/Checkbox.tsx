import { FC } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

type CheckboxProps = {
  checked: boolean;
  handleClick: () => void;
};

const Checkbox: FC<CheckboxProps> = ({ checked, handleClick }) => {
  return (
    <RadixCheckbox.Root
      className="Checkbox flex items-center justify-center border border-[#0000009C] w-3.5 h-3.5"
      checked={checked}
      defaultChecked
      onClick={handleClick}
    >
      <RadixCheckbox.Indicator className="CheckboxIndicator">
        <CheckIcon className="fill-[#0000009C] w-3 h-3" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

export default Checkbox;
