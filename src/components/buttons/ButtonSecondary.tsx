import { JSX, children } from "solid-js";

export const ButtonSecondary = (props: { children: JSX.Element }) => {
  const c = children(() => props.children);
  return (
    <div class="flex h-10 items-center justify-center rounded-[20px] bg-main-purple bg-opacity-10 hover:bg-opacity-25 dark:bg-white dark:bg-opacity-100 dark:hover:bg-white">
      <div class="text-center font-bold text-main-purple body-m">{c()}</div>
    </div>
  );
};
