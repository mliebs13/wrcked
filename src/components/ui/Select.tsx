import { DetailedHTMLProps, FC, forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";
import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { spaceMono } from "@src/config/fonts";

type SelectProps = {
  placeholder: string;
  label: string;
  options: string[];
  className?: string;
  selected: string;
  setSelected: (value: string) => void;
};

const Select: FC<SelectProps> = ({
  placeholder,
  label,
  options,
  className = "",
  selected,
  setSelected,
}) => {
  return (
    <RadixSelect.Root value={selected} onValueChange={setSelected}>
      <RadixSelect.Trigger
        className={classNames(
          "SelectTrigger w-full flex items-center justify-between border border-primary outline-none",
          spaceMono.className,
          className
        )}
      >
        <RadixSelect.Value
          placeholder={placeholder}
          aria-label={selected}
          className={spaceMono.className}
        >
          {selected}
        </RadixSelect.Value>

        <RadixSelect.Icon className="SelectIcon">
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className="SelectContent bg-secondary rounded-md shadow px-2 py-4">
          <RadixSelect.ScrollUpButton className="SelectScrollButton flex items-center justify-center bg-secondary text-primary h-6 cursor-pointer">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="SelectViewport">
            <RadixSelect.Group>
              <RadixSelect.Label
                className={classNames(
                  spaceMono.className,
                  "SelectLabel text-center text-sm text-primary text-capitalize mb-4 px-6"
                )}
              >
                {label}
              </RadixSelect.Label>
              {options.map((option, idx) => (
                <SelectItem
                  key={`select-option-${idx}`}
                  value={option}
                  className={classNames(
                    "flex items-center text-sm outline-none p-1.5 hover:bg-primary hover:bg-opacity-80 hover:text-secondary cursor-pointer",
                    {
                      "mb-1": idx !== options.length - 1,
                      "bg-primary bg-opacity-80 text-secondary":
                        selected === option,
                      "bg-secondary text-primary": selected !== option,
                    }
                  )}
                >
                  {option}
                </SelectItem>
              ))}
            </RadixSelect.Group>
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton className="SelectScrollButton flex items-center justify-center bg-secondary text-primary h-6 cursor-pointer">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};

type SelectItemProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  value: any;
};

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, value, className, ...props }, forwardedRef) => {
    return (
      <RadixSelect.Item
        className={classNames("SelectItem", spaceMono.className, className)}
        {...props}
        ref={forwardedRef}
        value={value}
      >
        <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      </RadixSelect.Item>
    );
  }
);

export default Select;
