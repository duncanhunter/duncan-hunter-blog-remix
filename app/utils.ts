export function formatDate(date: string) {
  return new Date(date).toUTCString().replace(/(\d\d\d\d) .*/, "$1");
}
