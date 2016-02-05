var cats = {
  'Transaction Score' : {
    color: '#FF54A4',
    rowNum: 1
  },
  'Repossesion' : {
    color: 'deepskyblue',
    rowNum: 2
  },
  'Multiple Addresses' : {
    color: '#A36F30',
    rowNum: 3
  },
  'Negative Credit' : {
    color: 'forestgreen',
    rowNum: 4
  },
  'Lien' : {
    color: '#FF7C00',
    rowNum: 5
  },
  'Arrest' : {
    color: 'slateblue',
    rowNum: 6
  },
  'Risk' : {
    color: 'red',
    rowNum: 7
  }
}

var Dashboard = function Dashboard(dat) {
  this.dat = dat;
  svg = d3.select('body')
      .append("svg")
      .attr("width", 600)
      .attr("height", 400);
  this.svg = svg;

  var numCols = this.dat.length;
  this.drawLine(213, 155, 215 + (30 * numCols), 155);
  this.drawLine(213, 336, 215 + (30 * numCols), 336);
  this.drawLine(213, 366, 215 + (30 * numCols), 366);
  this.drawLine(213, 155, 213, 366);
  this.drawLine(213 + (30 * numCols), 155, 215 + (30 * numCols), 366);

  for (var i=0; i<this.dat.length; i++) {
    var entry = this.dat[i];
    var keys = Object.keys(entry);
    var ip = keys[0];
    this.drawText(ip, 230 + i * 30, 20, 8, 'tb');
  }
  this.drawText('Transaction Score', 114, 175, 12, 'lr');
  this.drawText('Repossesion', 140, 205, 12, 'lr');
  this.drawText('Multiple Addresses', 106, 235, 12, 'lr');
  this.drawText('Negative Credit', 123, 265, 12, 'lr');
  this.drawText('Lien', 177, 295, 12, 'lr');
  this.drawText('Arrest', 170, 325, 12, 'lr');
  this.drawText('Total Risk', 150, 355, 12, 'lr');
  this.render();
}

Dashboard.prototype.render = function() {
  var d3Data = [];
  for (var i=0; i<this.dat.length; i++) {
    var entry = this.dat[i];
    var keys = Object.keys(entry);
    var ip = keys[0];
    var cur = entry[ip];
    d3Data.push({
      column: i,
      row: 0,
      value: cur['Transaction Score'],
      color: cats['Transaction Score'].color
    });
    d3Data.push({
      column: i,
      row: 1,
      value: cur['Repossesion'],
      color: cats['Repossesion'].color
    });
    d3Data.push({
      column: i,
      row: 2,
      value: cur['Multiple Addresses'],
      color: cats['Multiple Addresses'].color
    });
    d3Data.push({
      column: i,
      row: 3,
      value: cur['Negative Credit'],
      color: cats['Negative Credit'].color
    });
    d3Data.push({
      column: i,
      row: 4,
      value: cur['Lien'],
      color: cats['Lien'].color
    });
    d3Data.push({
      column: i,
      row: 5,
      value: cur['Arrest'],
      color: cats['Arrest'].color
    });
    d3Data.push({
      column: i,
      row: 6,
      value: cur['Risk'],
      color: cats['Risk'].color
    });
  }

  var circle = svg.selectAll("circle")
      .data(d3Data);
  circle.enter().append('circle');

  circle.attr("cx", function(d) { return d.column * 30 + 230 })
  .attr("cy", function(d) { return d.row * 30 + 170; })
  .attr("r", function(d) { return d.value/8; })
  .attr("stroke", function(d) { return (d.selected ? '#000' : "#BBB") } )
  .attr("stroke-width", function(d) { return (d.selected ? 3 : 1) } )
  .style("fill", function(d) { return d.color });
  circle.exit().remove();
  var self = this;
  d3.selectAll("circle").on("click", function(d) {self.select(d.id)});
}

Dashboard.prototype.select = function(id) {
  for (var i=0; i<this.dat.length; i++) {
    this.dat[i].selected = (this.dat[i].id === id) ? true : false;
  }
  this.render();
}

Dashboard.prototype.drawLine = function(x1, y1, x2, y2) {
  this.svg.append("line")
      .attr("x1", x1)
      .attr("y1", y1)
      .attr("x2", x2)
      .attr("y2", y2)
      .attr("stroke", '#AAA')
}

Dashboard.prototype.drawText = function(text, x, y, fontSize, mode) {
  this.svg.append("text")
      .attr("x", x)
      .attr("y", y)
      .attr("font-size", fontSize)
      .attr("writing-mode", mode)
      .attr("glyph-orientation-vertical", "0")
      .text(text)
}
