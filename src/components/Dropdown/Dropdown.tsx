import { For, Show, createSignal } from "solid-js";
import cn from "classnames";
export type Option = {
  label: string;
  value: string;
};

export const Dropdown = ({ label, options }: { label: string; options: Option[] }) => {
  const [isShown, setIsShown] = createSignal(false);

  const toggle = () => setIsShown(!isShown());

  return (
    <div class="w-44">
      <button
        class={cn(
          "inline-flex h-10 w-full items-center justify-between rounded border border-medium-grey border-opacity-25 px-4 py-2 body-l active:border-main-purple dark:text-white",
          { "border-main-purple border-opacity-100": isShown() }
        )}
        type="button"
        onClick={toggle}
      >
        {label}
        <svg
          class="ms-3 h-2.5 w-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            class="text-main-purple"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* <!-- Dropdown menu --> */}
      <Show when={isShown()}>
        <div class="z-10 w-full divide-y divide-gray-100 rounded-lg bg-white shadow transition dark:bg-gray-700">
          <ul class="py-2 text-medium-grey body-m dark:text-gray-200">
            <For each={options}>
              {(option, i) => (
                <li>
                  <a
                    href="#"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    {option.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>
    </div>
  );
};
