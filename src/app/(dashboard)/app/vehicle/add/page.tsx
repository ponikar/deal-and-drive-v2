"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { VehicleStatus } from "@/components/forms/VehicleStatus";
import { Button } from "@/components/ui/button";
import { HStack } from "@/components/layout/hstack";
import { DatePicker } from "@/components/ui/calendar-picker";

const FormSchema = z.object({
  registration_id: z.string().min(1),
  chassis_id: z.string().min(1),
  engine_id: z.string().min(1),
  manufacturing_year: z.string().min(1),
  cost_price: z.string().min(1),
  status: z.string().min(1),
  stock_entry_date: z.date(),
  location: z.string().min(1),
});
export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      stock_entry_date: new Date(),
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log("DATA", data);
  };
  return (
    <main className="mx-auto max-w-3xl p-4 border border-gray-300">
      <h2 className="scroll-m-20 mb-6 pb-2 text-3xl font-medium tracking-tight first:mt-0">
        Add Vehicle Details
      </h2>
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="registration_id"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Registration ID</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Registration ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <HStack>
            <FormField
              control={form.control}
              name="chassis_id"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-1">
                  <FormLabel>Chassis ID</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Chassis ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="engine_id"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-1">
                  <FormLabel>Engine ID</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder="Engine ID" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </HStack>

          <HStack>
            <FormField
              control={form.control}
              name="manufacturing_year"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-1">
                  <FormLabel>Manufacturing Year</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="YYYY" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="cost_price"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-1">
                  <FormLabel>Cost Price</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </HStack>

          <HStack>
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-1">
                  <FormLabel>Status</FormLabel>
                  <VehicleStatus {...field} />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="stock_entry_date"
              render={({ field }) => (
                <FormItem className="flex flex-1 flex-col gap-1">
                  <FormLabel>Stock entry date</FormLabel>
                  <FormControl>
                    <DatePicker value={field.value} onSelect={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </HStack>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Vehicle Location</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="City, State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Add Vehicle</Button>
        </form>
      </Form>
    </main>
  );
}
