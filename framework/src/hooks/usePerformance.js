import now from "performance-now";

export default fn => {
  const t1 = now();
  const data = fn();
  const t2 = now();

  return [t2 - t1, data];
};
