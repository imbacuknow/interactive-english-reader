import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormInputProps } from "@/lib/utils/types/formType";

const FormInput = (props: FormInputProps) => {
  const { name, label, defaultValue, placeholder } = props;
  return (
    <div className="flex flex-col gap-2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        name={name}
        defaultValue={defaultValue || ""}
        placeholder={placeholder}
      ></Input>
    </div>
  );
};
export default FormInput;
