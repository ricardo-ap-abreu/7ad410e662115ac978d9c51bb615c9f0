export class Masks {
  private static maxLength(value: string, max: number): string {
    if (!value) return '';

    return value.substring(0, max);
  }

  static socialNumberMask(value: string): string {
    if (!value) return '';

    value = value.replace(/\D/g, '');
    value = this.maxLength(value, 11);
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    return value;
  }
}
