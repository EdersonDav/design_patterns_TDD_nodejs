const Company = require('../Company');
const informCompany = require('../informCompany');
const setCompanyEmployes = require('../setCompanyEmployes');

describe('Design Pattern Singleton Test', () =>{
  Company.setInfos({
    name: 'Singleton ltda',
    country: 'Brazil',
  });

  it('should verify company informations in diff files', () =>{
    const companyInstance = informCompany()

    expect(companyInstance.info.name).toBe(Company.info.name);
    expect(companyInstance.info.country).toBe(Company.info.country);
  });

  it('should verify company employes instance', () =>{
    setCompanyEmployes(5)

    expect(Company.info.name).toBe('Singleton ltda');
    expect(Company.info.country).toBe('Brazil');
    expect(Company.info.employes).toBe(5);
  });

})