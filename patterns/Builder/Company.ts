export class Company {
  public departaments: string[] = [];

  public listParts(): string {
    if (this.departaments.includes('ALL')) {
      return 'ALL'
    } else {
      return this.departaments.join(' ')
    }
  }
}