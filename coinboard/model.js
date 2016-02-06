var Model = function Model(numIp) {
  var sz = numIp ? ( (numIp > 20) ? 20 : numIp ) : 0;
  this.fixedIps = [
      '230.73.120.127', '206.190.36.105', '192.64.119.237', '204.79.197.200', '154.239.25.192',
      '199.101.63.129', '217.111.65.227', '74.125.224.142', '62.116.130.183', '211.145.27.231',
      '216.231.19.101', '108.61.189.160', '204.32.141.217', '107.180.20.190', '31.313.177.136',
      '23.372.211.177', '23.172.211.148', '24.422.224.630', '104.216.57.123', '70.142.170.175'
  ];
  this.fixedReports = {
    '230.73.120.127' : `Lorem ipsum dolor sit amet, <span class="highlight">lien</span>consectetur
                        adipiscing elit. Morbi malesuada turpis a odio fermentum, in suscipit turpis
                        posuere. Nulla dapibus a sapien sed vulputate. Donec in purus ac neque sollicitudin
                        lacinia. Vivamus sit amet sapien at ex venenatis semper vel sed sapien. Donec sed
                        erat pellentesque, placerat enim in, condimentum orci. Suspendisse egestas,
                        odio non iaculis tristique, purus magna mattis purus, <span class="highlight">arrest</span> ut condimentum magna
                        ante eget eros. Donec tempus est tempus tristique mollis. Fusce ultrices quis
                        justo non gravida. Suspendisse vitae ornare eros.

                        Mauris accumsan sem turpis, eu porta felis imperdiet et. Donec ut orci id lacus
                        semper dignissim at eget nisi. Integer consectetur facilisis libero, vel laoreet
                        tortor vulputate ac. Proin tristique tincidunt mauris eget malesuada. In posuere
                        sed velit sit amet vestibulum. Aenean volutpat tortor vitae sodales sodales. Nulla
                        nec placerat sapien, eleifend lobortis neque. Proin vulputate sed libero at auctor.
                        Cras dapibus est nibh, vel pellentesque enim semper vitae. Duis blandit risus et porta
                        sollicitudin. Cras ac ligula convallis, rhoncus ligula vel, vulputate lectus.`,
    '206.190.36.105' : `Once upon a time <span class="highlight">lien</span> there lived a king`
  };

  this.ipData = [];
  for (var i=0; i<sz; i++) {
    var ip = this.fixedIps[i];
    var subOb = {
      'Transaction Score' : {val: this.r(), id: ip},
      'Repossesion' : {val: 0},
      'Multiple Addresses' : {val: 0},
      'Negative Credit' : {val: 0},
      'Lien' : {val: 0},
      'Arrest' : {val: 0},
      'Risk' : {val: 0}
    };
    var ob = {};
    ob[ip] = subOb;
    this.ipData.push(ob);
  }
}

Model.prototype.getIpData = function() {
  return this.ipData;
}

Model.prototype.r = function() {
  var r = parseInt(Math.random() * 100);
  r = (r < 5) ? 5 : r;
  return r;
}

Model.prototype.populate = function(ip) {
  var sz = this.ipData.length;
  var idx = undefined;
  for (var i=0; i<sz; i++) {
    if (this.fixedIps[i] == ip) {
      idx = i;
    }
  }
  var ip = this.fixedIps[idx];

  var cur = this.ipData[idx][ip];
  var subOb = {
    'Transaction Score' : cur['Transaction Score'],
    'Repossesion' : {val: this.r()},
    'Multiple Addresses' : {val: this.r()},
    'Negative Credit' : {val: this.r()},
    'Lien' : {val: this.r()},
    'Arrest' : {val: this.r()}
    // 'Risk' : {val: this.r()}
  };
  var avg = (subOb['Transaction Score'].val + subOb['Repossesion'].val + subOb['Multiple Addresses'].val + subOb['Negative Credit'].val + subOb['Lien'].val + subOb['Arrest'].val) / 6;
  subOb.Risk = {val: avg};
  var ob = {};
  ob[ip] = subOb;
  this.ipData[idx] = ob;
  return this.ipData;
}

Model.prototype.reportFor = function(ip) {
  return this.fixedReports[ip];
}

Model.prototype.weightData = function() {
  console.log('WEIGHTING data ');
}
