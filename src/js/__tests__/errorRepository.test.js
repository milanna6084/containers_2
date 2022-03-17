import ErrorRepository from '../errorRepository';

describe('function translate', () => {
  test("There isn't error with this code in ErrorRepository", () => {
    const result = ErrorRepository.translate(10);
    const expected = 'Unknown error';
    expect(expected).toBe(result);
  });

  test('There is error with this code in ErrorRepository and functioun return error message', () => {
    const result = ErrorRepository.translate(1);
    const expected = 'Invalide value';
    expect(expected).toBe(result);
  });
});
