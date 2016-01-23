var DemoGraph = (function($) {

  var dataset = []

  var initData = function() {
    for (var i = 0; i < 365; i++) {
      var random = Math.round(Math.random() * 30);
      dataset.push(random);
    }
  };

  var init = function() {
    initData();
    d3.select("body").selectAll("div")
        .data(dataset)
        .enter()
        .append("div")
        .attr("class", "bar")
        .style("height", function(d) {
          var barHeight = d * 5;  //Scale up by factor of 5
          return barHeight + "px";
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
