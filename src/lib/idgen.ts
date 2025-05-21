import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('123456789abcdefghijklmnpqrstuvwxyz', 7);

export function generateId(): string {
  return nanoid();
}
