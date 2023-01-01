import { FC } from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { spaceMono } from "@src/config/fonts";

type TooltipProps = {
  trigger: JSX.Element;
  content: JSX.Element | string;
};

const Tooltip: FC<TooltipProps> = ({ trigger, content }) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild className={spaceMono.className}>
          {trigger}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="TooltipContent" sideOffset={5}>
            {content}
            <RadixTooltip.Arrow className="TooltipArrow" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
