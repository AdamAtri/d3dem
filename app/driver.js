d3.select('body').append('h1').text('DrawingShapes');
const svg1 = d3.select('body').append('svg')
                              .attr('height', 200)
                              .attr('width', 600)
                              .attr('id', 'svg1');


const rect = svg1.append('rect').attr('width', 50).attr('height', 150).style('fill', '#FBB');
const circle = svg1.append('circle').attr('cx', 50).attr('cy', 75).attr('r', 40).style('fill', '#397');

svg1.append('text').text('Simple Sauce').attr('x', 15).attr('y', 75).style('fill', 'red').style('font-size', '2em');


/**
  DATA DRIVEN EXAMPLE
*/

d3.select('body').append('h1').text('DataDriven');
const
  s2w = 600,
  s2h = 200,
  svg2 = d3.select('body').append('svg')
                              .attr('height', s2h)
                              .attr('width', s2w)
                              .attr('id', 'svg2')
                              .style('background', 'rgba(20, 42, 90, 0.7)');

const dataset = [5, 10, 15, 20, 25, 30, 35, 40];
svg2.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
      .attr('x', (d, i) => i * (s2w / dataset.length) )
      .attr('y', d => s2h - (d * 2))
      .attr('width', () => (s2w/dataset.length) - 10 )
      .attr('height', d => d * 2)
      .attr('id', d => `rect_${d}`);

const sv2rects = svg2.selectAll('rect')._groups[0].forEach(rect => {
  rect.addEventListener('mousedown', ondownbasic);
  rect.addEventListener('mouseup', onupbasic);
  rect.addEventListener('click', onclickbasic);
});

svg2.append('text').text('example of data driven rendering').attr('x', 15).attr('y', 35).style('fill', '#999').style('font-size', '1.5em');
function ondownbasic(e) {
  d3.select('#' + e.target.id).style('fill', 'red');
}
function onupbasic(e) {
  d3.select('#' + e.target.id).style('fill', 'black');
}
function onclickbasic(e) {
  console.log('click');
}


/**
  BAR CHART EXAMPLE
*/
d3.select('body').append('h1').text('BarChart').style('border-top', '1px solid #999');
let s3data = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];
const
  s3w = Math.min(window.visualViewport.width, 600),
  s3h = 515,
  svg3 = d3.select('body').append('svg')
                              .attr('height', s3h)
                              .attr('width', s3w)
                              .attr('id', 'svg3');
svg3.append('text').text('This is a bar chart with labels').attr('x', 15).attr('y', 35).style('fill', '#999').style('font-size', '1.5em');

function colorpick(val) {
  if (val < 500) {
    return '#444444';
  }
  return '#AB0033'
}
function s3getWidth() {
  return (s3w/s3data.length) - 5;
}
svg3.selectAll('rect')
  .data(s3data)
  .enter()
  .append('rect')
    .attr('x', (d, i) => i * (s3w/s3data.length))
    .attr('y', d => s3h - d)
    .attr('width', () => s3getWidth())
    .attr('height', d => d)
    .attr('fill', d => colorpick(d))
svg3.selectAll('text')
  .data(s3data)
  .enter()
  .append('text')
    .text(d => d)
    .attr('x', (d, i) => i * (s3w/s3data.length) + (s3getWidth()/2) - 7)
    .attr('y', s3h - 16)
    .attr('fill', d => d <= 16 ? '#333':'#FFF');
    // .style('transform', 'rotate(90deg)');





/**
  LINE CHART EXAMPLE
*/
d3.select('body').append('h1').text('LineChart').style('border-top', '1px solid #999');
const
  s4data = [
    {month: 0, hummers: 0  },
    {month: 4, hummers: 20  },
    {month: 8, hummers: 25  },
    {month: 12, hummers: 20 },
    {month: 16, hummers: 6  },
    {month: 20, hummers: 17 },
    {month: 24, hummers: 12 },
    {month: 28, hummers: 2  },
    {month: 32, hummers: 15 },
    {month: 36, hummers: 13 },
    {month: 40, hummers: 6  },
    {month: 44, hummers: 0  },
    {month: 48, hummers: 0  },
    {month: 52, hummers: 0  },
    {month: 56, hummers: 0  },
    {month: 60, hummers: 0  },
  ],
  s4w = Math.min(window.visualViewport.width, 615),
  s4h = 175,
  svg4 = d3.select('body').append('svg')
                              .attr('height', s4h)
                              .attr('width', s4w)
                              .attr('id', 'svg4');
  svg4.append('text').text('Graph of number of blowjobs per 3 month period over 5 years')
      .attr('x', 15).attr('y', 35).style('fill', '#999').style('font-size', '1.5em');

  const bjLine = d3.line()
    .x(d => d.month*9)
    .y(d => s4h - (d.hummers * 4))
    .curve(d3.curveBasis);

  const s4viz = svg4.append('path')
    .attr('d', bjLine(s4data))
    .attr('stroke', '#444')
    .attr('stroke-width', 4)
    .attr('fill', 'none');

  const s4labels = svg4.selectAll('text')
    .data(s4data)
    .enter()
    .append('text')
      .text(d => d.hummers)
      .attr('x', d => d.month*9 + 3)
      .attr('y', d => s4h - (d.hummers * 4) - 3);


/**
  LINE CHART EXAMPLE
*/
d3.select('body').append('h1').text('ScatterPlot').style('border-top', '1px solid #999');
const
  s5data = [
    {month: 0, hummers: 0  },
    {month: 4, hummers: 20  },
    {month: 8, hummers: 25  },
    {month: 12, hummers: 20 },
    {month: 16, hummers: 6  },
    {month: 20, hummers: 17 },
    {month: 24, hummers: 12 },
    {month: 28, hummers: 2  },
    {month: 32, hummers: 15 },
    {month: 36, hummers: 13 },
    {month: 40, hummers: 6  },
    {month: 44, hummers: 0  },
    {month: 48, hummers: 0  },
    {month: 52, hummers: 0  },
    {month: 56, hummers: 0  },
    {month: 60, hummers: 0  },
  ],
  s5w = Math.min(window.visualViewport.width, 665),
  s5h = 175,
  svg5 = d3.select('body').append('svg')
                              .attr('height', s5h)
                              .attr('width', s5w)
                              .attr('id', 'svg5');
  svg5.append('text').text('ScatterPlot of number of blowjobs per 3 month period over 5 years')
      .attr('x', 15).attr('y', 35).style('fill', '#999').style('font-size', '1.5em');

  const dots = svg5.selectAll('circle')
    .data(s5data)
    .enter()
    .append('circle')
      .attr('cx', d => d.month*9 + 3)
      .attr('cy', d => s4h - (d.hummers * 4) - 5)
      .attr('r', 5)
      .attr('fill', d => d.hummers > 5 ? '#0F0' : '#F00');
