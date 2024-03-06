import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function VehicleStatus() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="New/Old" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Vehicle Type</SelectLabel>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="old">old</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
