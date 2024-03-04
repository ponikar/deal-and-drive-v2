import React, { FC } from "react";
import { DashboardNavigation } from "./dashboard-navigation";
import { UserNav } from "./user-navigation";

export const DashboardHeader: FC = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4">
        {/* <TeamSwitcher /> */}
        <DashboardNavigation className="mx-6" />
        {/* <div className="ml-auto flex items-center space-x-4"> */}
        {/* <Search /> */}
        <UserNav />
        {/* </div> */}
      </div>
    </div>
  );
};
