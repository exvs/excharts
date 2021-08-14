import { defineComponent, onMounted } from 'vue'
import * as d3 from 'd3'
import { createBounds, createDimensions, createSvg, fuckUndefined, xAxisSerisData } from '../utils'
const BasicLineChart = defineComponent({
  setup() {
    onMounted(() => {
      const { width, height, left, top, boundedHeight, boundedWidth } = createDimensions(
        400,
        300,
        30,
        30,
        50,
        50
      )
      const dataset = xAxisSerisData(
        ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        [150, 230, 224, 218, 135, 147, 260]
      ) as [any, any][]

      const xAccessor = (d: any) => d[0]
      const yAccessor = (d: any) => d[1]

      const xScale = d3.scaleBand().domain(dataset.map(xAccessor)).range([0, boundedWidth])

      const yScale = d3
        .scaleLinear()
        .domain(fuckUndefined(d3.extent(dataset, yAccessor)))
        .range([boundedHeight, 0])
        .nice()

      const svg = createSvg('#basic-line-chart', width, height).attr('background-color', '#f8f9fa')
      const bounds = createBounds(svg, left, top)

      bounds
        .selectAll('line')
        .data(dataset)
        .join('line')
        .attr('x1', 0)
        .attr('y1', d => yScale(yAccessor(d)))
        .attr('x2', boundedWidth)
        .attr('y2', d => yScale(yAccessor(d)))
        .attr('stroke', '#bdc3c7')

      const lineGenerator = d3
        .line(
          d => xScale(xAccessor(d)),
          d => yScale(yAccessor(d))
        )
        .curve(d3.curveLinear)

      const line = bounds.append('path').attr('d', lineGenerator(dataset)).attr('stroke', '#34495e')

      bounds
        .selectAll('circle')
        .data(dataset)
        .join('circle')
        .attr('cx', d => xScale(xAccessor(d))!)
        .attr('cy', d => yScale(yAccessor(d)))
        .attr('r', 3)
        .attr('stroke', '#34495e')
        .attr('fill', '#f8f9fa')

      const yAxisGenerator = d3.axisLeft(yScale).ticks(5)
      const yAxis = bounds.call(yAxisGenerator)

      const xAxisGenerator = d3.axisBottom(xScale)
      const xAxis = bounds
        .append('g')
        .call(xAxisGenerator)
        .style('transform', `translateY(${boundedHeight}px)`)
    })
  },
  render: () => <div id='basic-line-chart' style={{ fontFamily: 'Ubuntu Mono' }}></div>
})
export { BasicLineChart }
export default BasicLineChart
