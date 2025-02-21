import { FC } from "react";

type ErrorMessageProps = {
  error: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ error }) => (
  <div className="absolute bottom-0 py-1.5 px-4 text-red-600 text-sm">
    {error}
  </div>
);

export default ErrorMessage;
