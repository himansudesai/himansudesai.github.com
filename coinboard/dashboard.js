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

var Dashboard = function Dashboard(dat, cb) {
  this.dat = dat;
  this.selected = cb;
  svg = d3.select('.dashboard')
      .append("svg")
      .attr("width", 600)
      .attr("height", 370);
  this.svg = svg;

  var numCols = this.dat.length;
  this.drawLine(212, 155, 218 + (30 * numCols), 155);
  this.drawLine(212, 336, 218 + (30 * numCols), 336);
  this.drawLine(212, 366, 218 + (30 * numCols), 366);
  this.drawLine(212, 155, 212, 366);
  this.drawLine(218 + (30 * numCols), 155, 218 + (30 * numCols), 366);

  for (var i=0; i<this.dat.length; i++) {
    this.drawText((Object.keys(this.dat[i]))[0], 230 + i * 30, 20, 8, 'tb');
  }
  this.drawText('Block Score', 140, 175, 12, 'lr');
  this.drawText('Repossesion', 136, 205, 12, 'lr');
  this.drawText('Multiple Addresses', 102, 235, 12, 'lr');
  this.drawText('Negative Credit', 119, 265, 12, 'lr');
  this.drawText('Lien', 180, 295, 12, 'lr');
  this.drawText('Arrest', 168, 325, 12, 'lr');
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
    var index = 0;
    ['Transaction Score', 'Repossesion', 'Multiple Addresses', 'Negative Credit', 'Lien', 'Arrest', 'Risk'].forEach(function(cat) {
      d3Data.push({
        column: i,
        row: index++,
        value: cur[cat].val,
        color: cats[cat].color,
        id: cur[cat].id
      })
    });
    this.d3Data = d3Data;
  }

  this.reRender();
}

Dashboard.prototype.reRender = function() {
  var circle = svg.selectAll("circle")
      .data(this.d3Data);
  circle.enter().append('circle');
  circle.attr("cx", function(d) { return d.column * 30 + 230 })
      .attr("cy", function(d) { return d.row * 30 + 170; })
      .attr("r", function(d) { return d.value / 8; })
      .attr("stroke", function(d) { return (d.selected ? '#000' : "#BBB") } )
      .attr("stroke-width", function(d) { return (d.selected ? 3 : 1) } )
      .style("fill", function(d) { return d.color });
  circle.exit().remove();
  var self = this;
  d3.selectAll("circle").on("click", function(d) { self.select(d.id) });
}

Dashboard.prototype.select = function(id) {
  if (id) {
    for (var i=0; i<this.d3Data.length; i++) {
      this.d3Data[i].selected = (this.d3Data[i].id === id) ? true : false;
    }
    this.reRender();
    this.selected && this.selected(id);
  }
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
