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
import { FormControl } from "../ui/form";

export const VehicleStatus = React.forwardRef<unknown, any>((props, ref) => {
  return (
    <Select onValueChange={props.onChange} defaultValue={props.value}>
      <FormControl>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="New/Old" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Vehicle Type</SelectLabel>
          <SelectItem value="new">New</SelectItem>
          <SelectItem value="old">Old</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
