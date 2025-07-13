import { FormContainerProps } from "@/lib/utils/types/formType";

const FormContainer = ({ action, children, className }: FormContainerProps) => {
  return (
    <form action={action} className={className}>
      {children}
    </form>
  );
};
export default FormContainer;
