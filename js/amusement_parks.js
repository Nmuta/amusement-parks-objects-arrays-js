module.exports = {
  indexById: function (data) {
    var idIndex = {};
    for(var i=0; i<data.length; i++){
      idIndex[data[i].id] = data[i];
    }
    return idIndex
  },

  indexByCountry: function(data){
    var countryIndex = {};
    for(var i=0; i<data.length; i++){
      countryIndex[data[i].country] = data[i];
    }
    return countryIndex;
  },

  indexingByCountryAndState: function(data){
    var countryAndStateIndex = {};
    for(var i=0; i<data.length; i++){
      countryAndStateIndex[data[i].state][data[i].country] = data[i];
    }
    return countryAndStateIndex;
  }



}
