export const required = value => (value || typeof value === 'number' ? undefined : 'Required');
export const email = value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined);
export const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or less` : undefined);
export const phoneNumber = value => (value && !/^[+]+[0-9]{12}$/.test(value) ? 'Invalid Phone number' : undefined);
export const matchPassword = (value, allValues) => (value !== allValues.Password ? 'This field must match with your password field' : undefined);
export const minLength6 = minLength(6);
export const minLength12 = minLength(12);
