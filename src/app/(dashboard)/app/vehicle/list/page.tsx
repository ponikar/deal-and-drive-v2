import { PaginationList } from "@/components/ui/pagination-list";
import { VehicleList } from "@/components/vehicle/vehicle-list";

export default function Page() {
  return (
    <section>
      <VehicleList />
      <PaginationList />
    </section>
  );
}
