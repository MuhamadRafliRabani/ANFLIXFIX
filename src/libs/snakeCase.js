export function toSnakeCase(url) {
  if (!url) return null;
  return url?.replace(/\s+/g, "-");
}
