import { JSX, children } from "solid-js";

export const ButtonPrimaryL = (props: { children: JSX.Element }) => {
  const c = children(() => props.children);
  return (
    <div class="flex h-12 items-center justify-center rounded-3xl bg-main-purple hover:bg-main-purple-hover">
      <div class="text-center text-white heading-m">{c()}</div>
    </div>
  );
};
