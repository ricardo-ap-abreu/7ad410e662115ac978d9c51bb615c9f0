export class MaskInput {
  static getSocialNumberMask() {
    return [
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '.',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '.',
      /[0-9]/,
      /[0-9]/,
      /[0-9]/,
      '-',
      /[0-9]/,
      /[0-9]/,
    ];
  }
}
