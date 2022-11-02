export class Client {
  private socialNumber: string = '';
  private name: string = '';
  private situation: string = '';
  private id: string = '';

  constructor() {}

  public getSocialNumber(): string {
    return this.socialNumber;
  }

  public setSocialNumber(socialNumber: string): void {
    this.socialNumber = socialNumber;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getSituation(): string {
    return this.situation;
  }

  public setSituation(situation: string): void {
    this.situation = situation;
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }
}
