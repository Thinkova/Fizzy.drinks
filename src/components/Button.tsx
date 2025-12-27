import clsx from "clsx";

type Props = {
  buttonText: string;
  className?: string;
  onClick?: () => void;
};

export default function Button({ buttonText, className, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
        className,
      )}
    >
      {buttonText}
    </button>
  );
}
