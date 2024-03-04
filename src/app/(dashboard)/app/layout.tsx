import { DashboardHeader } from "@/components/headers/dashboard";
import { Button } from "@/components/ui/button";

export default function Layout() {
  return (
    <main>
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Vehicles</h2>
          <div className="flex items-center space-x-2">
            <Button>Add Vehicle</Button>
          </div>
        </div>
      </div>
    </main>
  );
}