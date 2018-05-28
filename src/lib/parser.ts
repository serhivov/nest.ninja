import * as cheerio from "cheerio"

// interface Point {
//   x: number
//   y: number
// }
// type Polygon = [Point]

// export function polygonify(el:SVGElement):Polygon {
//   SVGtoWKT.convert(el)
//   return [{ x: 0, y: 0 }]
// }

class Parser {
  private $: CheerioStatic

  constructor(svg: string) {
    this.$ = cheerio.load(svg)
  }

  get paths() {
    return this.$("path").map((_, el) => {
      return this.$(el).attr("d")
    })
  }
}

export default Parser
