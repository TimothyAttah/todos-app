import { ReactNode } from "react";

export interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

export interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => void;
  className?: string;
  onSubmit?: () => void;
}

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}

export interface TodoProps {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}
