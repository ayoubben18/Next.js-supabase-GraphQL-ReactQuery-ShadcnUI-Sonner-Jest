import { cn } from "@/lib/utils";
import React from "react";

const PageWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "container flex min-h-[calc(100vh-80px)] flex-col items-center",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default PageWrapper;
