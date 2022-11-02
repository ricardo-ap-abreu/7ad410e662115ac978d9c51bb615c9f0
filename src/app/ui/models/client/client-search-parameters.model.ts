export class ClientSearchParameters {
  private socialNumber: string = '';

  public getSocialNumber(): string {
    return this.socialNumber;
  }

  public setSocialNumber(socialNumber: string): void {
    this.socialNumber = socialNumber;
  }
}
