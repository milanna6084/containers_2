export default class ErrorRepository {
  static translate(code) {
    return (ErrorRepository.repository.get(code)) ? ErrorRepository.repository.get(code) : 'Unknown error';
  }
}

ErrorRepository.repository = new Map([
  [1, 'Invalide value'],
  [2, 'kkk'],
  [3, 'fff'],
  [44, 'ddd'],
]);
// console.log(ErrorRepository.translate(44));
