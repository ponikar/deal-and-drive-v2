import React, { FC, PropsWithChildren } from "react";

export const HStack: FC<PropsWithChildren> = ({ children }) => {
  return (
    <section className="w-full flex gap-4 flex-row items-center">
      {children}
    </section>
  );
};
