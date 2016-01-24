var DemoGraph = (function($) {

  var dataset = [];
  var radiusMax = 20;

  var initData = function() {
    for (var i = 0; i < 5; i++) {
      var random = Math.round(Math.random() * radiusMax);
      dataset.push(random);
    }
  };

  var init = function() {
    initData();

    var width = 500;
    var height = 50;

    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    circles = svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle");

    circles.attr("cx", function(d, i) {
      return (i * 50) + 25;
    })
    .attr("cy", height/2)
    .attr("r", function (d) {
      return d;
    })
    .attr("fill", "green")
    .attr("stroke", "red")
    .attr("stroke-width", function(d) {
      return d/2;
    })
    .attr("opacity", function(d) {
      return d/radiusMax;
    });
  };

  return {
    'init': init,
    'dataset': dataset
  };
})(jQuery);

$(function() {
  DemoGraph.init();
})
