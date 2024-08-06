type labelProps = {
  htmlFor: string;
  children: React.ReactNode;
};
export function Label({ htmlFor, children }: labelProps) {
  return (
    <>
      <label className="text-xs text-primary" htmlFor={htmlFor}>
        {children}
      </label>
    </>
  );
}
