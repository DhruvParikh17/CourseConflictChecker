export function hasConflict(a: any, b: any) {
  if (a.day !== b.day) return false;

  return (
    a.start < b.end &&
    b.start < a.end
  );
}