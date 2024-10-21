import { useState } from "react";

import MultiChoiceItem from "./_MultiChoiceItem";

import { tw } from "@/utils/tw";

export default function MultiChoice() {
  const [selectedIndex, setSelectedIndex] = useState<Set<number>>(new Set<number>());
  return (
    <div
      className={tw("flex w-full flex-1 flex-col gap-[12rem] overflow-y-auto overflow-x-visible pb-[60rem] pt-[7rem]")}
    >
      <MultiChoiceItem
        index={1}
        text={"의식수준의 변화"}
        isSelected={true}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={2}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={3}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={4}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={5}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={6}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={7}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={8}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={9}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={10}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={11}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={12}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={13}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={14}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <MultiChoiceItem
        index={15}
        text={"의식수준의 변화"}
        isSelected={false}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
    </div>
  );
}
