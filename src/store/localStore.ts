export const loadState = <T>(itemKey: string): T | undefined => {
  try {
    const serializedState = localStorage.getItem(itemKey);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as T;
  } catch (error) {
    return undefined;
  }
};

export const saveState = <T>(key: string, state: T) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(key, serializedState);
};
