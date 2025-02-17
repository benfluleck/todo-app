const ErrorMessage = ({ error }: { error: string }) => (
  <div className="py-1.5 px-4 text-red-600 text-sm">{error}</div>
);

export default ErrorMessage;
