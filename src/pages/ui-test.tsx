import { useMemo, useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Button from "@components/ui/Button";
import AltButton from "@components/ui/AltButton";
import IconButton from "@components/ui/IconButton";
import Input from "@components/ui/Input";
import Checkbox from "@components/ui/Checkbox";
import Select from "@components/ui/Select";

import timesImage from "@public/images/times.png";

const UITest: NextPage = () => {
  const countries = useMemo(
    () => [
      "France",
      "America",
      "Argentina",
      "Netherlands",
      "Nigeria",
      "Cameroon",
      "Croatia",
      "Brazil",
      "Ukraine",
    ],
    []
  );
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState(countries[8]);

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center">
      {/* base button */}
      <Button className="font-bold text-base px-6 py-4">Buy Now</Button>

      <br />

      {/* base button */}
      <AltButton className="font-bold text-base px-6 py-4">Buy Now</AltButton>

      <br />

      {/* icon button */}
      <IconButton>
        <Image src={timesImage} alt="cancel" width={20} height={20} />
      </IconButton>

      <br />

      {/* alt icon button */}
      <IconButton alt={true}>
        <Image src={timesImage} alt="cancel" width={14} height={14} />
      </IconButton>

      <br />

      {/* input field */}
      <Input className="text-sm px-4 py-3" placeholder="Enter your name" />

      <br />

      {/* checkbox */}
      <Checkbox checked={checked} handleClick={() => setChecked(!checked)} />

      <br />

      {/* select */}
      <Select
        placeholder="Choose a country"
        label="Choose a country"
        options={countries}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default UITest;
