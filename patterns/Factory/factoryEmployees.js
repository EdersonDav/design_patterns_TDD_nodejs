const {CEO, Manager, TechLead, Employee} = require('./Employee');

const createEmployees = (role) =>{
  const rolesClass = {
    ceo: CEO,
    manager: Manager,
    techLead:TechLead
  }
  
  return new (rolesClass[role] || Employee)(role)
}

module.exports = {createEmployees}