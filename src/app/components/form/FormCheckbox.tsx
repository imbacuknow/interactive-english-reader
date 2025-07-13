import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormCheckboxProps } from "@/lib/utils/types/formType";

const FormCheckbox = ({
  name,
  value,
  label,
  isChecked,
  onChange,
  className,
}: FormCheckboxProps) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Checkbox
        id={name}
        name={name}
        value={value || "true"}
        checked={isChecked || false}
        onCheckedChange={onChange}
      />
      {label && (
        <Label className={className} htmlFor={name}>
          {label}
        </Label>
      )}
    </div>
  );
};
export default FormCheckbox;
