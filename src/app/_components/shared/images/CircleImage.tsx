import Image from "next/image";

type Props = {
  src: string;
  alt: string;
};

export function CircleImage({ src, alt }: Props) {
  return (
    <div className="block relative w-6 h-6 rounded-full border border-gray-100 overflow-hidden">
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
}
