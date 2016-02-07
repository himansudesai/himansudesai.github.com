var Model = function Model(numIp) {
  var sz = numIp ? ( (numIp > 20) ? 20 : numIp ) : 0;
  this.fixedIps = [
      '230.73.120.127', '206.190.36.105', '192.64.119.237', '204.79.197.200', '154.239.25.192',
      '199.101.63.129', '217.111.65.227', '74.125.224.142', '62.116.130.183', '211.145.27.231',
      '216.231.19.101', '108.61.189.160', '204.32.141.217', '107.180.20.190', '31.313.177.136',
      '23.372.211.177', '23.172.211.148', '24.422.224.630', '104.216.57.123', '70.142.170.175'
  ];
  this.fixedReports = {
    '230.73.120.127' : `consectetur adipiscing elit. Morbi malesuada turpis a odio <span class="highlight">fraud</span> fermentum, in suscipit turpis posuere. Nulla
                        dapibus a sapien sed vulputate. Donec in purus ac neque sollicitudin lacinia. Vivamus sit amet sapien
                        at ex venenatis semper vel sed sapien. Donec sed erat pellentesque, placerat enim in, condimentum orci.
                        Suspendisse egestas, odio non iaculis tristique, purus magna mattis purus, ut condimentum magna ante eget
                        eros. Donec tempus est tempus tristique mollis. Fusce ultrices quis justo non gravida. Suspendisse vitae
                        ornare eros. Mauris accumsan <span class="highlight">warrant</span> sem turpis, eu porta felis imperdiet et. Donec ut orci id lacus semper
                        dignissim at eget nisi. Integer consectetur facilisis libero, vel laoreet tortor vulputate ac. Proin
                        tristique tincidunt mauris eget malesuada. In posuere sed velit sit amet vestibulum. Aenean volutpat
                        tortor vitae sodales sodales. Nulla nec placerat sapien, eleifend lobortis neque. Proin vulputate sed
                        libero at auctor. Cras <span class="highlight">transaction</span> dapibus est nibh, vel pellentesque enim sempersollicitudin. Cras <span class="highlight">bitcoin</span> ac ligula convallis,
                        rhoncus ligula vel, vulputate lectus.`,
    '206.190.36.105' : `In et consequat ipsum. <span class="highlight"> bank</span> Sed <span class="highlight">lien</span> eget elit enim. Fusce nec odio vel elit molestie posuere
                        eget et velit. Mauris et ligula vitae sapien dignissim gravida vitae nec libero. Quisque
                        nec nulla varius, interdum urna ac, mollis sem. Nam et dapibus magna. Morbi et orci eget
                        elit luctus porttitor at sed orci. <span class="highlight">warrant</span> Aenean facilisis nunc interdum dolor blandit, nec elementum
                        velit egestas. Ut nec venenatis lorem, ac venenatis tellus.`,
    '192.64.119.237' : `Vestibulum sem <span class="highlight">prison</span> risus, facilisis ut dolor eu, finibus venenatis leo. Fusce fringilla libero
                        vel ultricies viverra. Duis libero enim, egestas id massa non, tincidunt congue lectus. Morbi
                        imperdiet justo leo, id ultricies orci imperdiet vel. Aliquam rhoncus elit nunc, in hendrerit
                        justo congue congue. Vestibulum consequat suscipit ipsum, id tempus eros. Vestibulum vestibulum
                        libero vel suscipit dignissim. Nulla nec tincidunt tellus. Proin et metus arcu. Proin tincidunt
                        elit sed cursus volutpat. <span class="highlight">police</span> Sed non risus aliquet, accumsan erat id, consectetur dolor. Suspendisse
                        tempus mauris ullamcorper mollis fringilla. Cras sodales metus in lectus euismod finibus.
                        Suspendisse non turpis tristique, ullamcorper risus sit amet, dapibus massa.`,
    '204.79.197.200' : `Fusce eget vulputate purus. Pellentesque quam mauris, molestie quis felis a, faucibus ultricies
                        turpis. Morbi faucibus quis <span class="highlight">news</span> urna at hendrerit. Nullam interdum lacus massa, at venenatis leo aliquet
                        id. Aliquam ac volutpat erat. Maecenas tincidunt molestie nunc, vitae posuere massa viverra ut.
                        Praesent pulvinar at libero <span class="highlight">jail</span>at pulvinar. Fusce fringilla, eros sed rutrum mattis, dolor felis egestas
                        enim, id porta arcu mi eu elit. Vivamus commodo lacus fringilla, accumsan eros eu, sollicitudin eros.
                        Sed vitae lacinia augue. Cras convallis libero non sollicitudin rutrum. Integer suscipit, arcu vel
                        placerat egestas, libero libero placerat leo, vel laoreet tortor enim sed tellus.`,
    '154.239.25.192' : `Suspendisse blandit felis fermentum ex fringilla sagittis. Etiam massa lacus, feugiat sed risus ut,
                        efficitur tristique tortor. Integer diam nisi, mollis quis auctor in, efficitur et lacus. Maecenas
                        sed ex elementum, feugiat turpis non, sagittis urna. Nulla volutpat elementum malesuada. Nullam ex
                        neque, elementum id odio non, <span class="highlight">jail</span> aliquet sodales mi. Maecenas eget tortor in diam dignissim aliquet.
                        Vestibulum auctor ullamcorper quam, non ornare urna gravida a. Fusce elit eros, faucibus rutrum
                        convallis id, viverra vel nisl. Morbi convallis, dolor in gravida lacinia, leo dolor pharetra dui,
                        non ornare ex nibh sed justo. Integer <span class="highlight">money</span> urna diam, hendrerit vel scelerisque sed, vestibulum et diam.
                        Curabitur viverra ante vel risus rhoncus, nec tincidunt risus aliquet. Aliquam varius lobortis ipsum,
                        in varius erat pharetra vel.`,
    '199.101.63.129' : `Quisque ultricies mollis ultricies. Pellentesque eu sapien <span class="highlight">arrest</span> quis enim mattis mollis. Duis pharetra ex
                        in elit congue, ac efficitur massa suscipit. Nam nibh sapien, mollis quis tincidunt ut, consequat id
                        tellus. Cras porta varius libero, vel pellentesque leo feugiat sed. Pellentesque malesuada eros nulla,
                        eget tempus eros accumsan id. Donec condimentum fermentum augue eget aliquet. Praesent quis enim in
                        ipsum iaculis aliquet. <span class="highlight"> bank</span> Suspendisse potenti. Phasellus quis dui massa. Sed aliquet massa vitae blandit
                        interdum. Nullam sit amet vulputate dui. Nulla varius neque eu ante faucibus commodo. Ut porttitor
                        turpis id tortor mollis vestibulum. Sed elementum tortor a sapien consequat, at iaculis enim gravida.
                        Pellentesque suscipit imperdiet mi vitae varius.`,
    '217.111.65.227' : `Donec varius convallis sapien, <span class="highlight">watch</span> facilisis consequat elit tempus ut. Sed rhoncus turpis vitae risus
                        condimentum porttitor. Vivamus id ultrices diam. Nunc tristique, magna quis dapibus consequat, tortor
                        lorem efficitur lacus, a sagittis risus lorem vitae libero. Duis mi felis, imperdiet id nulla ut, varius
                        varius velit. Sed vel mi ac ipsum malesuada <span class="highlight">bitcoin</span> hendrerit vel in tellus. Duis molestie congue vulputate.
                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus vel
                        ultricies est. In vitae libero lobortis, malesuada nunc nec, viverra justo. Aliquam eu neque leo.
                        Curabitur egestas consequat ligula sed elementum. Curabitur imperdiet magna dui, sed convallis lectus
                        semper nec.`,
    '74.125.224.142' : `Suspendisse dignissim <span class="highlight">bitcoin</span> sapien id nunc dignissim, id bibendum mauris pharetra. Curabitur mollis risus
                        placerat, dictum eros facilisis, finibus leo. Pellentesque habitant morbi tristique senectus et netus
                        et malesuada fames ac turpis egestas. <span class="highlight">fraud</span> Donec non sapien lectus. Mauris malesuada iaculis mi vitae aliquam.
                        Maecenas quis mauris et dui lobortis varius. Aliquam non enim enim. Quisque faucibus est non magna
                        condimentum convallis. Nulla sit amet massa tempor, fringilla erat vitae, maximus odio. Mauris ligula
                        leo, semper vitae malesuada quis, interdum ac turpis. Etiam pharetra turpis sed viverra maximus.`,
    '62.116.130.183' : `Cras a tempus massa. Mauris dignissim <span class="highlight">laundering</span> nulla velit. Nulla id dapibus mauris. Sed molestie tortor eu
                        lorem fringilla ultricies vel in diam. Nulla in mauris volutpat libero tincidunt vestibulum. Integer
                        id orci diam. Vestibulum nec laoreet risus.`,
    '211.145.27.231' : `Mauris non pellentesque mi, eget convallis velit. Suspendisse sit amet ex sit amet diam vestibulum
                        congue nec vitae sem. Quisque sit amet ullamcorper odio, nec rhoncus tortor. Mauris et felis eget
                        tellus elementum commodo. Vestibulum ex sapien, pulvinar non mi sed, tempor tincidunt dolor. Fusce
                        neque sapien, ullamcorper eget varius quis, pulvinar et neque. Praesent placerat commodo nunc, quis
                        finibus diam. Quisque malesuada, ipsum ac maximus <span class="highlight">bitcoin</span> suscipit, erat neque posuere ex, eu pulvinar eros
                        odio nec nulla. Aliquam cursus dui sed lacus iaculis, sed pretium arcu tincidunt. Maecenas est est,
                        gravida in lorem et, suscipit semper felis. Morbi pretium condimentum leo, sed luctus leo placerat vel.`,
    '216.231.19.101' : `Nunc sit amet nisi mattis, semper nibh a, convallis lorem. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos <span class="highlight">bitcoin</span> himenaeos. Sed ac purus tellus. Vestibulum molestie tincidunt
                        quam, sit amet vestibulum nisi tincidunt sit amet. Cras sed nisi ante. Sed suscipit lobortis augue, eu
                        varius nunc tincidunt non. Donec <span class="highlight">fraud</span> eget accumsan augue.`,
    '108.61.189.160' : `Morbi sodales sapien consequat magna congue dignissim. Morbi et orci non elit placerat sollicitudin.
                        Fusce sollicitudin auctor <span class="highlight">money</span> velit, sed ornare sem tincidunt eu. Vestibulum turpis mauris, aliquet a
                        feugiat eget, luctus non risus. Duis pharetra sit amet ex a suscipit. Suspendisse potenti. Duis vitae
                        laoreet lectus. Pellentesque <span class="highlight">bitcoin</span> habitant morbi tristique senectus et netus et malesuada fames ac turpis
                        egestas. Maecenas in massa ante. Nam sit amet tincidunt lacus, et dapibus sem. Nunc porta non ante vitae
                        volutpat. Suspendisse libero nisi, suscipit a rutrum quis, efficitur quis arcu. Sed turpis sem, laoreet
                        sit amet molestie mattis, pretium non nisl.`,
    '204.32.141.217' : `Aliquam arcu sapien, tincidunt in tempor <span class="highlight">news</span> vel, tempor vitae enim. Donec sed quam vel urna vestibulum
                        consequat ut at velit. Nulla eleifend lacus et erat malesuada commodo. Nam eu tortor nisi. Maecenas
                        elementum felis volutpat pellentesque elementum. Etiam ex massa, finibus vel aliquam ornare, porta ut
                        tellus. Aliquam venenatis velit eget massa sagittis <span class="highlight">fraud</span> pulvinar. Fusce non pharetra risus, egestas varius
                        nulla. Suspendisse nisi sem, ultrices nec lectus nec, lobortis sollicitudin magna.`,
    '107.180.20.190' : `Integer congue enim ac sem tempor feugiat. Sed tempus ut nibh sit amet ultrices. Mauris vulputate, felis
                        a dictum dapibus, odio mi feugiat lorem, ultricies lacinia odio urna eu magna. Proin commodo accumsan
                        sagittis. Proin ornare sollicitudin tempus. <span class="highlight">news</span> Phasellus malesuada aliquet est in hendrerit. Nulla luctus
                        libero quis felis interdum commodo. Nunc ut suscipit lectus. Sed finibus id dolor non lobortis. Fusce
                        tincidunt id justo at posuere. Phasellus egestas ipsum pharetra, auctor ex vel, luctus metus. Etiam sit
                        amet justo non sapien bibendum elementum ut imperdiet dolor. Nulla facilisi.`,
    '31.313.177.136' : `Suspendisse a elit magna. In at pellentesque turpis. Duis <span class="highlight">fraud</span> dapibus sodales nisl sed pellentesque. Phasellus
                        tristique pharetra metus, at tincidunt elit malesuada eu. Morbi pulvinar vulputate massa a eleifend.
                        Nunc pulvinar cursus eros, quis finibus urna blandit quis. Nunc eu arcu neque. Nulla a efficitur purus,
                        at viverra velit. Suspendisse ut <span class="highlight">news</span> sem non risus mollis cursus vel et massa. Nam consectetur tellus eget
                        dignissim iaculis.`,
    '23.372.211.177' : `Nunc semper porta est, non tincidunt erat posuere at. Pellentesque quis massa eget risus sollicitudin
                        porta eu in augue. Proin in malesuada odio. Duis orci purus, sodales et erat eget, viverra faucibus sapien.
                        Mauris velit lacus, imperdiet sit amet luctus viverra, faucibus vel nisi. Nunc dignissim, dolor ac suscipit
                        faucibus, nulla diam condimentum mauris, sit amet fringilla nulla eros non ipsum. Praesent metus mauris,
                        consectetur a commodo eu, vestibulum id ex. Suspendisse rutrum malesuada molestie. Quisque fermentum orci
                        lorem, et accumsan lacus condimentum sit amet. Suspendisse nisi lorem, bibendum sed pretium sed, tincidunt
                        quis nisi. Nullam vel egestas nisl. Fusce in <span class="highlight">bitcoin</span> mattis augue, eget posuere tellus. Phasellus vulputate, tortor
                        in ultricies tincidunt, odio enim luctus nisi, ac iaculis ante turpis ut odio. Nulla hendrerit, nunc eu
                        suscipit mollis, risus felis porttitor eros, id bibendum libero nibh tincidunt enim.`,
    '23.172.211.148' : `In tempor ex sit amet finibus iaculis. Ut molestie malesuada ipsum quis elementum. Pellentesque habitant
                        morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras ultrices mattis nulla in mollis.
                        Ut lobortis purus egestas <span class="highlight">police</span> nibh commodo convallis. Integer efficitur urna vitae elementum ullamcorper. Donec
                        tincidunt tristique ante, in finibus metus fermentum at. Quisque mattis vel nibh quis sodales. Vestibulum
                        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus maximus non enim et
                        eleifend. Vivamus neque lacus, porttitor at nisi rhoncus, faucibus suscipit dolor.`,
    '24.422.224.630' : `Vestibulum interdum tempus enim non iaculis. Nullam pretium dui vel eros pellentesque pulvinar. Aenean
                        blandit, tellus vitae imperdiet tincidunt, <span class="highlight">police</span> lacus turpis tempus quam, consectetur efficitur leo elit at tortor.
                         Nullam vitae justo auctor, molestie dolor ac, luctus mauris. Sed aliquam varius placerat. Aliquam euismod
                         condimentum felis, id hendrerit velit placerat id. Nullam id sapien vel odio tincidunt vehicula ut eget lacus.
                         Suspendisse potenti. Fusce sodales sollicitudin velit id egestas. Pellentesque egestas erat id erat placerat,
                         quis tempus lectus dapibus. Cras purus nisi, aliquet eu pretium sit amet, lacinia eget risus. Nullam cursus
                         quam quis justo posuere porta. Vivamus egestas est justo, eget laoreet odio dignissim sit amet.`,
    '104.216.57.123' : `Donec justo ex, sodales vitae imperdiet ut, pharetra id leo. In vulputate leo in est auctor sollicitudin. Integer
                        tincidunt orci in elementum auctor. Sed diam dui, cursus quis mi vitae, suscipit volutpat ipsum. Pellentesque
                         elit velit, rutrum vitae diam ac, facilisis cursus velit. Phasellus vitae sem ac lacus porttitor sollicitudin
                          sed eget velit. In nec nibh ligula. Cras ornare eleifend auctor. Nullam velit nunc, tempus id elementum ac,
                           volutpat sed mauris. Pellentesque nibh nunc, pretium tempus purus vel, viverra tincidunt neque. In
                           consectetur accumsan <span class="highlight">warrant</span> consectetur. Pellentesque at quam laoreet, eleifend eros eget, posuere libero.`,
    '70.142.170.175' : `Duis vitae erat condimentum, dictum mauris mattis, bibendum justo. Pellentesque suscipit dapibus tempus.
                        Curabitur nec facilisis mi. Maecenas nec dolor eget eros pellentesque tincidunt quis eu sapien. Donec
                        tincidunt erat ac urna pretium sollicitudin. Sed aliquet auctor quam, sit amet interdum lacus porttitor non.
                        Maecenas vel dui metus. Cras fermentum iaculis odio nec ornare. Aliquam ut nulla feugiat, mattis diam quis,
                        sagittis dolor. Integer posuere imperdiet orci sed dictum. Nullam iaculis, sapien nec accumsan venenatis, urna
                        est placerat nisl, quis sollicitudin nisl quam eu tortor. Duis eget laoreet sapien. Praesent aliquam, urna sit
                        amet suscipit porta, diam tellus <span class="highlight">warrant</span> congue mi, sit amet pharetra sem elit eu nunc. Nam viverra ligula eu sapien blandit,
                        eu mattis dolor molestie.`
  };

  this.ipData = [];
  for (var i=0; i<sz; i++) {
    var ip = this.fixedIps[i];
    var subOb = {
      'Block Score' : {val: this.r(), id: ip},
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
    'Block Score' : cur['Block Score'],
    'Repossesion' : {val: this.r()},
    'Multiple Addresses' : {val: this.r()},
    'Negative Credit' : {val: this.r()},
    'Lien' : {val: this.r()},
    'Arrest' : {val: this.r()}
  };
  var avg = (subOb['Block Score'].val + subOb['Repossesion'].val + subOb['Multiple Addresses'].val + subOb['Negative Credit'].val + subOb['Lien'].val + subOb['Arrest'].val) / 6;
  subOb.Risk = {val: avg};
  var ob = {};
  ob[ip] = subOb;
  this.ipData[idx] = ob;
  return this.ipData;
}

Model.prototype.reportFor = function(ip) {
  return this.fixedReports[ip];
}

Model.prototype.weighData = function(category, ratio) {
  for (var i=0; i<this.ipData.length; i++) {
    var cur = this.ipData[i];
    var firstKey = (Object.keys(cur))[0];
    var data = cur[firstKey];
    var oldValue = data[category].val;
    var newValue = ratio * oldValue;
    if (newValue > 100) {
      newValue = 100;
    } else if (newValue < 5) {
      newValue = 5;
    }
    data[category].val = newValue;
    var avg = (data['Block Score'].val + data['Repossesion'].val + data['Multiple Addresses'].val + data['Negative Credit'].val + data['Lien'].val + data['Arrest'].val) / 6;
    data.Risk = {val: avg};
  }
  return this.ipData;
}
