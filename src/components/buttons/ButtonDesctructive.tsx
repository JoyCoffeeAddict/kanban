import { JSX, children } from "solid-js";

export const ButtonDestructive = (props: { children: JSX.Element }) => {
  const c = children(() => props.children);
  return (
    <div class="flex h-10 items-center justify-center rounded-[20px] bg-red hover:bg-red-hover">
      <div class="text-center font-bold text-white body-m">{c()}</div>
    </div>
  );
};
