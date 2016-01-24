var DemoGraph = (function($) {

  var dataset = [];
  var randMax = 100;

  var initData = function(numValues) {
    for (var i = 0; i < numValues; i++) {
      var random = Math.round(Math.random() * randMax);
      dataset.push(random);
    }
  };

  var init = function() {
    initData(100);

    var width = 500;
    var height = 500;

    var barsInRow = 20;
    var barWidth = (width - barsInRow) / barsInRow;
    var maxBarHeight = randMax;

    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function(d, i) {
          xpos = i % barsInRow;
          return xpos * (barWidth + 1);
        })
        .attr("y", function(d, i) {
          ypos = i/barsInRow;
          return (parseInt(ypos) + 1) * maxBarHeight - d;
        })
        .attr("width", barWidth)
        .attr("height", function(d) {
          return d;
        })
        .attr("fill", function(d) {
          return "rgb(" + (d*3) + ",0,0)";
        });

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(function(d) {
          return d;
        })
        .attr("x", function(d, i) {
          xpos = i % barsInRow;
          return xpos * (barWidth + 1) + barWidth/2;
        })
        .attr("y", function(d, i) {
          ypos = i/barsInRow;
          y = (parseInt(ypos) + 1) * maxBarHeight - d + 12;
          if (d > 12) {
            return y;
          }
          else {
            return y - 13;
          }
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white")
        .attr("text-anchor", "middle");
  };

  return {
    'init': init,
    'dataset': dataset
  };
})(jQuery);

$(function() {
  DemoGraph.init();
});
