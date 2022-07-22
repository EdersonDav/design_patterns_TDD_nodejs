class Employee{
  role;
  constructor(role = '' ){
    this.role = role
  }
}

class Manager extends Employee{
  constructor(role){
    super(role)
  }
}

class TechLead extends Employee{
  constructor(role){
    super(role)
  }
}

class CEO extends Employee{
  constructor(role){
    super(role)
  }
}

module.exports = { Employee, Manager, TechLead, CEO }