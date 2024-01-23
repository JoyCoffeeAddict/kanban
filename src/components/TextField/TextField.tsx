import cn from "classnames";

export const TextField = ({
  id,
  label,
  placeholder,
  errorMessage
}: {
  id: string;
  label: string;
  placeholder?: string;
  errorMessage?: string;
}) => {
  const isError = errorMessage != null;
  return (
    <div class="inline-flex  flex-col items-start justify-center gap-2 dark:text-white">
      <label for="input" class="text-medium-grey body-m dark:text-white">
        {label}
      </label>

      <div
        class={cn(
          "relative flex h-10 w-[350px] justify-between rounded border border-medium-grey border-opacity-25 bg-transparent px-4 pb-2 pt-2 outline-main-purple body-l invalid:border-red focus-visible:outline focus-visible:outline-main-purple",
          { "border-red !border-opacity-100": isError }
        )}
      >
        <input
          type="text"
          id={id}
          class="min-w-0 border-none bg-transparent focus-visible:outline-none "
          placeholder={placeholder}
        />
        {errorMessage != null && <div class="text-right text-red body-l">{errorMessage}</div>}
      </div>
    </div>
  );
};
