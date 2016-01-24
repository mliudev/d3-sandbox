var DemoGraph = (function($) {

  var dataset = [];
  var randMax = 500;

  var initData = function(numValues) {
    var xVals = [];
    for (var i = 0; i < numValues; i++) {
      var random = Math.round(Math.random() * randMax);
      xVals.push(random);
    }

    var yVals = [];
    for (var i = 0; i < numValues; i++) {
      var random = Math.round(Math.random() * randMax);
      yVals.push(random);
    }

    for (i = 0; i < numValues; i++) {
      dataset.push([xVals[i], yVals[i]]);
    }
  };

  var init = function() {
    initData(100);

    var svgWidth = 500;
    var svgHeight = 500;

    var svg = d3.select("body")
                .append("svg")
                .attr("width", svgWidth)
                .attr("height", svgHeight);

    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
          return d[0];
        })
        .attr("cy", function(d) {
          return d[1];
        })
        .attr("r", 5);

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
          return d[0] + "," + d[1];
        })
        .attr("x", function(d) {
          return d[0];
        })
        .attr("y", function(d) {
          return d[1];
        });
  };

  return {
    'init': init,
    'dataset': dataset
  };
})(jQuery);

$(function() {
  DemoGraph.init();
});
