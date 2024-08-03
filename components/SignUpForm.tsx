"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useErrorHandler from "@/hooks/useErrorHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormError from "./FormError";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { signUpSchema } from "@/types/zod-schemas/auth-schemas";
import { useMutation } from "@tanstack/react-query";
import { signup } from "@/app/(authenticate)/register/action";
import { toast } from "sonner";

export default function LoginForm() {
  const { error, triggerError, clearError } = useErrorHandler();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: signup,
    onError: (error) => {
      triggerError(error.message);
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success("Register successful");
      clearError();
    },
  });

  return (
    <div className="mx-auto w-[25rem] space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Enter your credentials to create an Account.
        </p>
      </div>
      <div className="space-y-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((data) => mutate(data))}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="jhon doe" {...field} />
                  </FormControl>
                  <FormDescription>Enter your Name.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="jhon@mail.com" {...field} />
                  </FormControl>
                  <FormDescription>Enter your Email.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="******" {...field} />
                  </FormControl>
                  <FormDescription>
                    Enter your Password ( at least 6 characters ).
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormError message={error} />
            <Button className="w-full" type="submit" disabled={isPending}>
              Register
            </Button>
          </form>
        </Form>
        <div className="grid gap-4">
          <Link
            href={`/login`}
            className="text-center text-lg underline underline-offset-2"
          >
            Already have an account ? click to login
          </Link>
        </div>
      </div>
    </div>
  );
}
