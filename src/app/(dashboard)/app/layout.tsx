import { DashboardHeader } from "@/components/headers/dashboard";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <DashboardHeader />
      <div className="flex-1 space-y-4 p-8 pt-6">{children}</div>
    </main>
  );
}
