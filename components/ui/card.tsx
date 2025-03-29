import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {children}
    </div>
  );
};
