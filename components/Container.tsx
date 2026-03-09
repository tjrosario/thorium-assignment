import { FC, HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  narrow?: boolean;
}

export const Container: FC<ContainerProps> = ({ children, className = "", narrow, ...props }) => {
  return (
    <div
      className={`mx-auto px-6 lg:px-12 ${
        narrow ? "max-w-[1200px]" : "max-w-[1440px]"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
