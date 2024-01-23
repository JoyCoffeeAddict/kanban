import { Component, JSX, children } from "solid-js";
import { ButtonPrimaryL } from "@components/buttons/ButtonPrimaryL";
import { ButtonPrimaryS } from "@components/buttons/ButtonPrimaryS";
import { ButtonSecondary } from "@components/buttons/ButtonSecondary";
import { ButtonDestructive } from "@components/buttons/ButtonDesctructive";
import { SubtaskCheckbox } from "@/components/SubtaskCheckbox/SubtaskCheckbox";
import { TextField } from "@/components/TextField/TextField";
import { Dropdown } from "@/components/Dropdown/Dropdown";

export const MainLayout = (props: { children: JSX.Element }) => {
  const c = children(() => props.children);
  return (
    <div class="bg-backround text-font-primary grid  bg-white p-4  dark:bg-dark-grey">
      {/* top menu*/}
      <div class="p-4">
        <div class=" bg-main-purple p-4">text</div>
        <div class=" bg-main-purple-hover p-4">text</div>
        <div class=" bg-black p-4">text</div>
        <div class=" bg-very-dark-grey-dark-bg p-4">text</div>
        <div class=" bg-dark-grey p-4">text</div>
        <div class=" bg-lines-dark p-4">text</div>
        <div class=" bg-medium-grey p-4">text</div>
        <div class=" bg-light-grey-light-bg p-4">text</div>
        <div class=" bg-white p-4">text</div>
        <div class=" bg-red p-4">text</div>
        <div class=" bg-red-hover p-4">text</div>
      </div>
      {/* side menu */}
      <div>
        <div class="heading-xl">Heading XL</div>
        <div class="heading-l">Heading L</div>
        <div class="heading-m">Heading m</div>
        <div class="heading-s">Heading S</div>
        <div class="body-l">Body L</div>
        <div class="body-m">Body M</div>
      </div>

      {/* buttons */}
      <ButtonPrimaryL>ButtonPrimaryL</ButtonPrimaryL>
      <ButtonPrimaryS>ButtonPrimaryS</ButtonPrimaryS>
      <ButtonSecondary>ButtonSecondary</ButtonSecondary>
      <ButtonDestructive>ButtonDestructive</ButtonDestructive>

      <SubtaskCheckbox>Idle</SubtaskCheckbox>
      <TextField id="one" label="TextField (Idle)" placeholder="Enter task name" />
      <TextField
        id="one"
        label="TextField (Idle)"
        placeholder="Enter task name"
        errorMessage="Cant't be empty"
      />
      <Dropdown
        label="Dropdown(Idle)"
        options={[
          { label: "Todo", value: "Todo" },
          { label: "Doing", value: "Doing" },
          { label: "Done", value: "Done" }
        ]}
      />

      {/* content */}
      <div>{c()}</div>
    </div>
  );
};
