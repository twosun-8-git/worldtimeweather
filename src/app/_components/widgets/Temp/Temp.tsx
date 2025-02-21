import { TempIcon } from "@/app/_components/shared";

export function Temp() {
  return (
    <div className="flex items-center gap-x-1">
      <TempIcon size={16} />
      <span>36°C / 96.8°F</span>
    </div>
  );
}
