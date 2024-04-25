const buildParams = (
  name: string,
  position: string,
  salary: number,
  filters: string,
  sort: string
): string => {
  return (
    "?" +
    (name ? `name=${name}&` : "") +
    (position ? `position=${position}&` : "") +
    (salary ? `salary=${salary}&` : "") +
    (filters ? `filters=${filters}&` : "") +
    (sort ? `sort=${sort}` : "")
  );
};
export default buildParams;
