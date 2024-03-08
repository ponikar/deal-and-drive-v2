import { DashboardHeader } from "@/components/headers/dashboard";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="space-y-0.5 pb-5 border-gray-200 flex flex-row items-center justify-between">
          <h2 className="text-2xl font-medium tracking-tight">
            List of Vehicles
          </h2>
          <Button>Add Vehicle</Button>
        </div>
        {children}
      </div>
    </main>
  );
}
