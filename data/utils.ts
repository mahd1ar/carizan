export function emptyArray<T>(arr: T[]) {
  arr.splice(0, arr.length)
}

export function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, '');
}