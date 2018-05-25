
function gPhone(e){
  return e.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}


module.exports = {
   gPhone
}