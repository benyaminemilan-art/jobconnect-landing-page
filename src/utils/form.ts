/**
 * Validates common form field patterns for future contact/signup forms.
 */
export function isValidEmail(value: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value.trim());
}

export function isValidPhone(value: string): boolean {
  const phonePattern = /^[\d\s+()-]{8,20}$/;
  return phonePattern.test(value.trim());
}

export function isNonEmpty(value: string, minLength = 1): boolean {
  return value.trim().length >= minLength;
}
