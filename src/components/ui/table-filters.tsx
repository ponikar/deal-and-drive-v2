import React from "react";
import { Input } from "./input";
import { Button } from "./button";

export const TableFilters = () => {
  return (
    <section className="flex mb-5 gap-3 border-b py-3 pb-8 border-b-gray-200 flex-row items-center">
      <Input
        type="search"
        placeholder="Search..."
        className="md:w-[100px] ml-auto lg:w-[300px]"
      />

      <Button>Search</Button>
    </section>
  );
};
