const { createEmployees } = require('../factoryEmployees');
const { Employee } = require('../Employee');

describe('Design Pattern Factory Test', () =>{
  it('should create Manager employee verify if instaceof Employees class', () =>{
    const Manager = createEmployees('manager');

    expect(Manager).toBeInstanceOf(Employee);
    expect(Manager.role).toBe('manager');
  });

  it('should create CEO employee verify if instaceof Employees class', () =>{
    const CEO = createEmployees('ceo');

    expect(CEO).toBeInstanceOf(Employee);
    expect(CEO.role).toBe('ceo');
  });


  it('should create TechLead employee verify if instaceof Employees class', () =>{
    const TechLead = createEmployees('techlead');

    expect(TechLead).toBeInstanceOf(Employee);
    expect(TechLead.role).toBe('techlead');
  });

  it('should create Employee Default employee verify if instaceof Employees class', () =>{
    const EmployeeDefault = createEmployees('');

    expect(EmployeeDefault).toBeInstanceOf(Employee);
    expect(EmployeeDefault.role).toBe('');
  });

})