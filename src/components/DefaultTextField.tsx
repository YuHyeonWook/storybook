import { ChangeEvent, useState } from "react";
import { ErrorMessage } from "./ErrorMessage";
import IconButton from "./IconButton";

interface DefaultTextFieldProps {
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onIconClick: () => void;
  type?: "text" | "password";
  hasIcon?: boolean;
  placeholder: string;
  isError?: boolean;
  errorMessage?: string;
}

export default function DefaultTextField({
  id,
  onChange,
  onIconClick,
  placeholder,
  type = "text",
  value = "",
  hasIcon = true,
  isError = false,
  errorMessage = "다시 시도해주세요",
}: DefaultTextFieldProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`border-b text-base ${
          isFocused ? "border-secondary" : "border-primary"
        }`}
      >
        <input
          id={id}
          className=".placeholder-mono200"
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          value={value}
        />
        {!!value && hasIcon && (
          <IconButton
            iconPath={
              type === "text"
                ? "/icons/ic-delete-dark.svg"
                : "/icons/ic-view.svg"
            }
            onClick={onIconClick}
          />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
}
