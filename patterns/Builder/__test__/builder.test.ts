import CompanyBuilder from '../CompanyBuilder';
import Director from '../Director';

describe('Design Pattern Builder Test', () => {
  const director = new Director();
  const builder = new CompanyBuilder();

  it('should create full company', () => {
    director.setBuilder(builder);

    director.buildFullCompany()

    expect(builder.getCompany().listParts()).toBe('ALL')
  });

  it('should create only RH company', () => {
    director.setBuilder(builder);

    director.buildRHCompany()

    expect(builder.getCompany().listParts()).toBe('RH')
  });

  it('should add Production departament in RH company', () => {
    director.setBuilder(builder);

    director.buildRHCompany()
    director.buildProductionCompany()

    expect(builder.getCompany().listParts()).toBe('RH Production')
  });

})