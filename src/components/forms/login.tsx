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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { useLogin } from "@/apis/auth/login";

const FormSchema = z.object({
  email: z.string().email().min(1),
  password: z.string().min(1),
});

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: UserAuthFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const { mutateAsync, isPending } = useLogin();

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      await mutateAsync({
        email: data.email,
        password: data.password,
      });
      toast({
        title: "Success",
        description: "You have successfully logged up",
      });
    } catch (e) {
      console.log("ERROR", e);
      toast({
        title: "Error",
        description: "An error occurred while logged up",
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

          <Button isLoading={isPending} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
