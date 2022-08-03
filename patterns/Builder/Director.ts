import { Builder } from "./CompanyBuilder";

class Director {
  private builder!: Builder;


  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildRHCompany(): void {
    this.builder.addRH();
  }

  public buildProductionCompany(): void {
    this.builder.addProduction();
  }

  public buildSalesCompany(): void {
    this.builder.addSales();
  }

  public buildFullCompany(): void {
    this.buildRHCompany();
    this.buildProductionCompany();
    this.buildSalesCompany();
  }
}

export default Director