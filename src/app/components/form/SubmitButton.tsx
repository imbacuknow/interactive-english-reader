"use client";

import { Button } from "@/components/ui/button";
import { SubmitButtonProps } from "@/lib/utils/types/formType";
import { LoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

const SubmitButton = ({
  size,
  className,
  text,
  variant,
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button
        type="submit"
        size={size || "default"}
        className={className}
        variant={variant}
      >
        {pending ? (
          <>
            <LoaderCircle className=" animate-spin" />
            <p>loading...</p>
          </>
        ) : (
          text
        )}
      </Button>
    </>
  );
};
export default SubmitButton;
