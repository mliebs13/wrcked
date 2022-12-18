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
      className="CheckboxRoot flex items-center justify-center border border-[#0000009C] w-6 h-6"
      checked={checked}
      defaultChecked
      onClick={handleClick}
    >
      <RadixCheckbox.Indicator className="CheckboxIndicator">
        <CheckIcon className="fill-[#0000009C] w-5 h-5" />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
};

export default Checkbox;
