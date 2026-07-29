import { deepMerge } from './deepMerge';

describe('deepMerge', () => {
  it('should merge flat objects', () => {
    const result = deepMerge({ a: 1 }, { b: 2 });

    expect(result).toEqual({
      a: 1,
      b: 2,
    });
  });

  it('should override primitive values', () => {
    const result = deepMerge({ a: 1 }, { a: 2 });

    expect(result).toEqual({
      a: 2,
    });
  });

  it('should merge nested objects recursively', () => {
    const result = deepMerge(
      {
        permission: {
          read: true,
        },
      },
      {
        permission: {
          write: true,
        },
      }
    );

    expect(result).toEqual({
      permission: {
        read: true,
        write: true,
      },
    });
  });

  it('should concatenate arrays', () => {
    const result = deepMerge(
      {
        permissions: ['read'],
      },
      {
        permissions: ['write'],
      }
    );

    expect(result).toEqual({
      permissions: ['read', 'write'],
    });
  });

  it('should merge multiple objects', () => {
    const result = deepMerge({ a: 1 }, { b: 2 }, { c: 3 });

    expect(result).toEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });
});
