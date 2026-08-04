import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/** Centers content at the shared max-width with consistent side padding. */
export default function Container({ children, className = "", ...rest }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-6 md:px-10 ${className}`} {...rest}>
      {children}
    </div>
  );
}
