import { FC, HTMLAttributes, SVGProps } from "react";

interface DotPatternProps extends HTMLAttributes<HTMLDivElement> {
  dotColor?: string;
}

export const DotPattern: FC<DotPatternProps> = ({
  className = "",
  dotColor = "#005595",
  ...props
}) => {
  const rows = 6;
  const cols = 5;
  const dotSize = 35.55;
  const gap = 20;

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        display: "grid",
        gap: `${gap}px`,
        gridTemplateColumns: `repeat(${cols}, ${dotSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${dotSize}px)`,
      }}
      {...props}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div
          className="rounded-full"
          key={i}
          style={{
            backgroundColor: dotColor,
            height: dotSize,
            width: dotSize,
          }}
        />
      ))}
    </div>
  );
};

interface PlusCrossProps extends SVGProps<SVGSVGElement> {}

export const PlusCross: FC<PlusCrossProps> = ({ className = "", ...props }) => {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      height="52"
      viewBox="0 0 52 52"
      width="52"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Vertical Line */}
      <line x1="26" y1="0" x2="26" y2="52" stroke="#54C9FF" strokeWidth="3" />
      {/* Horizontal Line */}
      <line x1="0" y1="26" x2="52" y2="26" stroke="#54C9FF" strokeWidth="3" />
    </svg>
  );
};
