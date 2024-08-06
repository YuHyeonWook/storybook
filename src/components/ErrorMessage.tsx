export function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p className="text-xs text-error">{children}</p>
    </>
  );
}
