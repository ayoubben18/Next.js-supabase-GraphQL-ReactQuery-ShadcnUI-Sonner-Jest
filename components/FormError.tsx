import { CircleAlert } from "lucide-react";

interface FormErrorProps {
  message?: string;
}

function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <div className="flex w-full items-center gap-x-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive">
      <CircleAlert className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
}
export default FormError;
