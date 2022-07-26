const Company = require('./Company');


module.exports = setCompanyEmployes = ()=> {
  Company.setInfos({
    employes: 5
  });

  return Company
}