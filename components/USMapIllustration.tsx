import { FC, HTMLAttributes } from "react";

import Image from "next/image";

interface USMapIllustrationProps extends HTMLAttributes<HTMLDivElement> {}

export const USMapIllustration: FC<USMapIllustrationProps> = ({ className = "", ...props }) => {
  return (
    <div
      aria-label="Map of the United States showing nationwide MagnaCare coverage"
      className={`relative flex items-center justify-center ${className}`}
      role="img"
      {...props}
    >
      <Image
        alt=""
        aria-hidden="true"
        className="h-auto w-full"
        height={400}
        src="/images/us-map.png"
        width={640}
      />

      <div aria-hidden="true" className="absolute h-[203px] w-[203px]">
        <Image
          alt=""
          className="h-auto w-full"
          height={203}
          src="/images/map-marker.png"
          width={203}
        />
      </div>
    </div>
  );
};
