import { toast } from "@/hooks/use-toast";
import isCallError from "@lib/calls/isCallError";
import signUpUser from "@lib/calls/signupUser";
import { useForm } from "@tanstack/react-form";
import { redirect } from "next/navigation";
import { z } from "zod";

const validatorSchema = z
  .object({
    email: z.string().email("Please enter valid email address"),
    password: z.string().min(1, "Please enter the password."),
    confirmPassword: z.string().min(1, "Please enter the password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormFields = z.infer<typeof validatorSchema>;

const useSignUpForm = () => {
  const handler = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    } as FormFields,
    onSubmit: async ({ value }) => {
      const { email, password } = value;
      const result = await signUpUser(email, password);

      if (isCallError(result)) {
        toast({ title: result.error ?? "", variant: "destructive" });
        return;
      }
      toast({
        title: "Registered Successfully!",
        variant: "success",
        color: "",
      });
      redirect("/overview");
    },
    validators: {
      onChange: validatorSchema,
      onChangeAsync: validatorSchema,
    },
  });
  return handler;
};
export default useSignUpForm;
