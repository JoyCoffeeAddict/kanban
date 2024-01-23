import { children } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

export const SubtaskCheckbox = (props: { children: JSX.Element }) => {
  const c = children(() => props.children);
  return (
    <div class="rounded  bg-light-grey-light-bg p-3 hover:bg-main-purple/25 dark:bg-very-dark-grey-dark-bg dark:text-white">
      <label class=" body-m">
        <input
          type="checkbox"
          value=""
          class=" mr-4 h-4 w-4  rounded-sm  border border-slate-400  border-opacity-25 bg-white  text-main-purple"
        />

        {c()}
      </label>
    </div>
  );
};
