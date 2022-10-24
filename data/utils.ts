export function emptyArray<T>(arr: T[]) {
  arr.splice(0, arr.length)
}

export function stripHtml(html: string) {
  return html.replace(/<[^>]*>?/gm, '');
}

export const validateEmail = (email : string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};