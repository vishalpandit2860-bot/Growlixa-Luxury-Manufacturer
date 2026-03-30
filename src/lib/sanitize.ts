/** Strip HTML tags and trim whitespace to prevent XSS */
export const sanitize = (input: string): string =>
  input.replace(/<[^>]*>/g, "").trim();
