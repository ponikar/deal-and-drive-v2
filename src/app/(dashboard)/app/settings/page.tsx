"use client";
import { ProfileForm } from "@/components/settings/edit-profile";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});
export default function Settings() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {};

  return <ProfileForm />;
  // return (
  //   <main className="mx-auto max-w-3xl p-4 border border-gray-300">
  //     <h2 className="scroll-m-20 mb-6 pb-2 text-3xl font-medium tracking-tight first:mt-0">
  //       Update your details
  //     </h2>
  //     <Form {...form}>
  //       <form
  //         className="w-full flex flex-col gap-5"
  //         onSubmit={form.handleSubmit(onSubmit)}
  //       >
  //         <FormField
  //           control={form.control}
  //           name="email"
  //           render={({ field }) => (
  //             <FormItem className="flex flex-col gap-1">
  //               <FormLabel>Email</FormLabel>
  //               <FormControl>
  //                 <Input type="email" {...field} />
  //               </FormControl>
  //               <FormMessage />
  //             </FormItem>
  //           )}
  //         />

  //         <FormField
  //           control={form.control}
  //           name="name"
  //           render={({ field }) => (
  //             <FormItem className="flex flex-col gap-1">
  //               <FormLabel>Name</FormLabel>
  //               <FormControl>
  //                 <Input type="text" {...field} />
  //               </FormControl>
  //               <FormMessage />
  //             </FormItem>
  //           )}
  //         />

  //         <Button type="submit">Update Details</Button>
  //       </form>
  //     </Form>
  //   </main>
  // );
}
