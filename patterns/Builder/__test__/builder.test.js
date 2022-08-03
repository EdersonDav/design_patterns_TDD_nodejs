const CompanyBuilder = require('../CompanyBuilder');
const Director = require('../Director');

describe('Design Pattern Builder Test', () =>{
  let director = new Director();

  it('should create full company', () => {
    const builder = new CompanyBuilder();

    director.setBuilder(builder);

    director.buildFullCompany()

    const company = director.getProduct()

    expect(company.type).toBe('FULL')
  });

  it('should create only RH company', ()=>{
    director.setBuilder(builder);

    director.buildFullCompany()

    const company = director.getProduct()

    expect(company.type).toBe('RH')
  });

  it('should add Production departament in RH company', ()=>{
    director.setBuilder(builder);

    director.buildFullCompany()

    const company = director.getProduct()

    expect(company.type).toBe('RH, Production')
  });

})