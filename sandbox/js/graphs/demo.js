var DemoGraph = (function($) {

  var dataset = [];
  var randMax = 2000;

  var initData = function(numValues) {
    var xVals = [];
    var random;
    for (var i = 0; i < numValues; i++) {
      random = Math.round(Math.random() * randMax);
      xVals.push(random);
    }

    var yVals = [];
    for (var j = 0; j < numValues; j++) {
      random = Math.round(Math.random() * randMax);
      yVals.push(random);
    }

    for (i = 0; i < numValues; i++) {
      dataset.push([xVals[i], yVals[i]]);
    }
  };

  var init = function() {
    initData(100);

    var svgWidth = 100;
    var svgHeight = "500";
    var yPadding = 20;
    var xPadding = 1;

    var svg = d3.select("body")
                .append("svg")
                .attr("width", svgWidth + "%")
                .attr("height", svgHeight);

    var xScale = d3.scale.linear()
                    .domain([0, d3.max(dataset, function(d) {
                        return d[0];
                    })])
                    .range([xPadding, svgWidth - xPadding * 7]);

    var yScale = d3.scale.linear()
                    .domain([0, d3.max(dataset, function(d) {
                        return d[1];
                    })])
                    .range([svgHeight - yPadding, yPadding]);

    var rScale = d3.scale.linear()
                    .domain([0, d3.max(dataset, function(d) {
                        return d[1];
                    })])
                    .range([2,5]);

    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
          return xScale(d[0]) +"%";
        })
        .attr("cy", function(d) {
          return yScale(d[1]);
        })
        .attr("r", function(d) {
            return rScale(d[1]);
        });

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
          return d[0] + "," + d[1];
        })
        .attr("x", function(d) {
          return xScale(d[0]) + "%";
        })
        .attr("y", function(d) {
          return yScale(d[1]);
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
