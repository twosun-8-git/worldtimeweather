type Props = {
  label?: string;
};

export function SubmitButton({ label = "Submit" }: Props) {
  return (
    <button className="bg-blue w-[108px] h-9 text-white rounded-full text-sm cursor-pointer sm:w-[126px] sm:text-base sm:h-10">
      {label}
    </button>
  );
}
