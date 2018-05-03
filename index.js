var nameIt = function() {
d3.select("body")
  .transition()
  .style("background-color", function(){
    return "hsl(" + Math.random() * 360 + ", 90%, 80%)"});
d3.selectAll("p")
  .style("color", function(){
    return "hsl(" + Math.random() * 360 + ", 100%, 50%)"});
}

setInterval(nameIt, 100)

d3.select('button')
  .on('click', function () {
    d3.select('body')
      .append('h3')
      .text('Today is a beautiful day!!');
    });
d3.selectAll('circle')
  .attr("r", 0)
  .transition()
  .attr("r", 42.5);
