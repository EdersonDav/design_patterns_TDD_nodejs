import { Company } from './Company';

export interface Builder {
  addRH(): void;
  addProduction(): void;
  addSales(): void;
  verifyDepartaments(): void;
}

class CompanyBuilder implements Builder {
  private company!: Company;

  constructor() {
    this.reset()
  }

  public reset() {
    this.company = new Company()
  }

  public addRH() {
    this.company.departaments.push('RH')
  }

  public addProduction() {
    this.company.departaments.push('Production')
  }

  public addSales() {
    this.company.departaments.push('Sales')
  }

  public verifyDepartaments() {
    if (this.company.departaments.length === 3) {
      this.company.departaments.push('ALL')
    }
  }

  public getCompany(): Company {
    this.verifyDepartaments()
    const result = this.company;
    this.reset();
    return result;
  }

}

export default CompanyBuilder