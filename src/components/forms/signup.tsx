"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useSignup } from "@/apis/auth/signup";

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "Darshan Ponikar",
      email: "itspossnikar@gmail.com",
      phone: "7602137148",
      password: "Darshan@1234",
      confirmPassword: "Darshan@1234",
    },
  });

  const { mutateAsync, isPending } = useSignup();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      if (data.confirmPassword !== data.password) {
        toast({
          title: "Password did not match",
          description: "Please make sure the password matches",
        });
        return;
      }

      await mutateAsync({
        user_details: {
          email: data.email,
          name: data.name,
          phone: data.phone,
          password: data.password,
        },
        // TODO: Change the email to the agency email
        user_type_details: {
          type: "Agency",
          name: data.name,
          email: "agssengy@gmail.com",
          phone: data.phone,
        },
      });
      toast({
        title: "Success",
        description: "You have successfully signed up",
      });
    } catch (e) {
      console.log("ERROR", e);
      toast({
        title: "Error",
        description: "An error occurred while signing up",
      });
    }
  }

  return (
    <div className={cn("grid gap-6 h-full", className)} {...props}>
      <Form {...form}>
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-1">
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirm Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button isLoading={isPending} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
