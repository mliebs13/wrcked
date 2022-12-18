import { DetailedHTMLProps, FC, forwardRef, HTMLAttributes } from "react";
import classNames from "classnames";
import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import { Space_Mono } from "@next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  fallback: ["system-ui", "arial"],
});

type SelectProps = {
  placeholder: string;
  label: string;
  options: string[];
  selected: string;
  setSelected: (value: string) => void;
};

const Select: FC<SelectProps> = ({
  placeholder,
  label,
  options,
  selected,
  setSelected,
}) => {
  return (
    <RadixSelect.Root value={selected} onValueChange={setSelected}>
      <RadixSelect.Trigger
        className={classNames(
          "SelectTrigger w-full max-w-md flex items-center justify-between text-base border border-primary outline-none p-2.5",
          spaceMono.className
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
                  value={option}
                  className={classNames(
                    "flex items-center text-sm bg-white text-primary outline-none p-1.5 hover:bg-primary hover:bg-opacity-80 hover:text-white cursor-pointer",
                    {
                      "mb-1": idx !== options.length - 1,
                      "bg-primary bg-opacity-80 text-white":
                        selected === option,
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
