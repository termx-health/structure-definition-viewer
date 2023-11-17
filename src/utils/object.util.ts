export type RecursiveKeyOf<TObj> = {
  [TKey in keyof TObj & (string | number)]:
  TObj[TKey] extends any[] ? `${TKey}` :
    TObj[TKey] extends object
      ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
      : `${TKey}`;
}[keyof TObj & (string | number)];

export function getPathValue<T, R>(obj: T | undefined, path: string | RecursiveKeyOf<T> | undefined): R | undefined {
  if (isDefined(obj) && isDefined(path)) {
    return path.split('.').reduce((obj: any, t) => obj?.[t], obj) as R;
  }
}

export function isDefined<T>(value: T): value is NonNullable<T> {
  return !isNil(value);
}

export function isNil(value: any): value is (undefined | null) {
  return typeof value === 'undefined' || value === null;
}

