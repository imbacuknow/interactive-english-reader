import { StoryListFormType } from "./mainType";

export type FormContainerProps = {
    action: (formData: FormData) => void;
    children: React.ReactNode;
    className?: string;
};

export type ActionState<T> = {
    message: string;
    timestamp: string | null; // ใช้ null เพื่อสื่อว่ายังไม่มีค่าเริ่มต้น
    data?: T
};

export type ActionStateFunc = (
    prevState: ActionState<StoryListFormType>,
    formData: FormData,
) => Promise<ActionState<StoryListFormType>>;

export type SubmitButtonProps = {
    size?: "default" | "sm" | "lg";
    className?: string;
    text?: string;
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
};

export type FormInputProps = {
    name: string;
    label?: string;
    defaultValue?: string;
    placeholder?: string;
};

export type FormCheckboxProps = {
    name: string;
    value?: string;
    label?: string;
    isChecked?: boolean;
    className?: string;
    onChange?: (checked: boolean) => void;
};