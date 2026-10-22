import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}

export function Container({
  children,
  className,
  as: Comp = "div",
}: ContainerProps) {
  return (
    <Comp
      className={cn(
        "mx-auto w-full max-w-[1120px] px-5 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </Comp>
  );
}
