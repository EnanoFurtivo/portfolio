/**
 * Persists a value to the local storage with the specified key.
 * @template T - The type of the value to be stored.
 * @param key - The key to use for storing the value in the local storage.
 * @param value - The value to persist.
 */
export const persistLocalStorage = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Clears a value from the local storage with the specified key.
 * @param key - The key to use for removing the value from the local storage.
 */
export const clearLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};

/**
 * Reads a value from the local storage with the specified key.
 * @template T - The type of the value to be read, useful for hinting.
 * @param key - The key to use for retrieving the value from the local storage.
 * @returns The retrieved value from the local storage, or undefined if the key doesn't exist.
 */
export const readLocalStorage = <T>(key: string): T | null => {
  const el = localStorage.getItem(key);
  if (el == null) return null;
  try {
    return <T>JSON.parse(el);
  } catch {
    return el as T;
  }
};
