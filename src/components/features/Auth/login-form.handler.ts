import { toast } from "@/hooks/use-toast";
import isCallError from "@/lib/calls/isCallError";
import signInUser from "@/lib/calls/signInUser";
import { useForm } from "@tanstack/react-form";
import { redirect } from "next/navigation";
import { z } from "zod";

const validatorSchema = z.object({
  email: z.string().email("Please enter valid email address"),
  password: z.string().min(1, "Please enter the password."),
});

type FormFields = z.infer<typeof validatorSchema>;

const useLoginForm = () => {
  const handler = useForm<FormFields>({
    defaultValues: {
      email: "",
      password: "",
    } as FormFields,
    onSubmit: async ({ value }) => {
      const { email, password } = value;
      const result = await signInUser(email, password);
      if (isCallError(result)) {
        toast({ title: result.error ?? "", variant: "destructive" });
      }
      toast({
        title: "Loged In Successfully!",
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
export default useLoginForm;
