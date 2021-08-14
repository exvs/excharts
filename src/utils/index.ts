import * as d3 from 'd3'

const xAxisSerisData = (xAxisData: any[], seriesData: any[]) => {
  const result = []
  for (let i = 0; i < xAxisData.length; i++) {
    result.push([xAxisData[i], seriesData[i]])
  }
  return result
}

const fuckUndefined = (orUndefined: any[]) => orUndefined.map(d => d!)

const anyArrToAnyAny = (arr: any[]): [any, any] => [arr[0], arr[1]]

const createDimensions = (
  width: number,
  height: number,
  top: number,
  right: number,
  bottom: number,
  left: number
) => {
  return {
    width,
    height,
    top,
    right,
    bottom,
    left,
    boundedWidth: width - left - right,
    boundedHeight: height - top - bottom
  }
}

const createSvg = (parentSelector: string, width: number, height: number) =>
  d3.select(parentSelector).append('svg').attr('width', width).attr('height', height)

const createBounds = (
  selection: d3.Selection<any, unknown, HTMLElement, any>,
  left: number,
  top: number
) => selection.append('g').style('transform', `translate(${left}px, ${top}px)`)

export { xAxisSerisData, fuckUndefined, createDimensions, createSvg, createBounds }
export default { xAxisSerisData, fuckUndefined, createDimensions, createSvg, createBounds }
