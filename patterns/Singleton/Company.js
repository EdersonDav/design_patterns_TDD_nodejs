class Company{
  info;
  constructor(){
    this.info = {}
  }

  setInfos(infos){
    this.info = {...this.info, ...infos}
  }
}

module.exports = new Company()