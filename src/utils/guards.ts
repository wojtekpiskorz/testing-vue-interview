export const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined'
export const isNull = (value: unknown): value is null => value === null
export const isNumber = (value: unknown): value is number => typeof value === 'number'

export const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'
export const isString = (value: unknown): value is string => typeof value === 'string'
export const isObject = (value: unknown): value is object => typeof value === 'object'
export const isFunction = (value: unknown): value is 'function' => typeof value === 'function'
export const isArray = <T>(value: unknown): value is Array<T> =>
    Object.prototype.toString.call(value) === '[object Array]'
