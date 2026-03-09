import { FC, HTMLAttributes } from "react";

interface AnnouncementBarProps extends HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const AnnouncementBar: FC<AnnouncementBarProps> = ({ className, message, ...props }) => {
  return (
    <div className={`bg-[#001A2C] shadow-2xl ${className || ""}`} {...props}>
      <div className="px-6 py-3 text-center">
        <p className="text-[15px] font-light text-accent-ice/80">{message}</p>
      </div>
    </div>
  );
};
