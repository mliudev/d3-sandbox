var DemoGraph = (function($) {

  var dataset = [];
  var randMax = 100;

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

    var svgWidth = 1000;
    var svgHeight = 500;
    var yPadding = 20;
    var xPadding = 30;

    /* Draw SVG */
    var svg = d3.select("body")
                .append("svg")
                .attr("width", svgWidth)
                .attr("height", svgHeight);

    /* Scales */
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

    /* Scatterplot */
    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
          return xScale(d[0]);
        })
        .attr("cy", function(d) {
          return yScale(d[1]);
        })
        .attr("r", function(d) {
            return rScale(d[1]);
        });

    /* Point labels */
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
          return d[0] + "," + d[1];
        })
        .attr("x", function(d) {
          return xScale(d[0]);
        })
        .attr("y", function(d) {
          return yScale(d[1]);
        });

    /* Axes */
    var xAxis = d3.svg.axis()
                        .scale(xScale)
                        .orient("bottom")
                        .ticks(5);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(0,"+ (svgHeight - yPadding) +")")
        .call(xAxis);

    var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(5);

    svg.append("g")
        .attr("class", "axis")
        .attr("transform", "translate(" + xPadding + ",0)")
        .call(yAxis);
  };

  return {
    'init': init,
    'dataset': dataset
  };
})(jQuery);

$(function() {
  DemoGraph.init();
});
