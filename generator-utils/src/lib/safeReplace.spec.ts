import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { GeneratorStepError } from './errors';
import { safeReplace } from './safeReplace';

describe('safeReplace', () => {
  it('should replace text in a file', () => {
    const tree = createTreeWithEmptyWorkspace();

    tree.write('test.txt', 'hello world');

    safeReplace('replace world', 'test.txt', 'world', 'nx', tree);

    expect(tree.read('test.txt', 'utf8')).toBe('hello nx');
  });

  it('should replace using regex', () => {
    const tree = createTreeWithEmptyWorkspace();

    tree.write('test.txt', 'hello world');

    safeReplace('replace world', 'test.txt', /world/, 'nx', tree);

    expect(tree.read('test.txt', 'utf8')).toBe('hello nx');
  });

  it('should perform multiple replacements', () => {
    const tree = createTreeWithEmptyWorkspace();

    tree.write('test.txt', 'hello world');

    safeReplace(
      'multiple replacements',
      'test.txt',
      ['hello', 'world'],
      ['hi', 'nx'],
      tree
    );

    expect(tree.read('test.txt', 'utf8')).toBe('hi nx');
  });

  it('should throw when file does not exist', () => {
    const tree = createTreeWithEmptyWorkspace();

    expect(() =>
      safeReplace('replace text', 'missing.txt', 'a', 'b', tree)
    ).toThrow(GeneratorStepError);
  });
});
