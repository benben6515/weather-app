const bgColor = '#aaa'
const maxColor = '#fa9'
const minColor = '#9af'
const textXColor = '#ccc'
const textYColor = '#88f'

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const ChartPie = ({ information , w = 500, h = 500, fillColor = '#09d' }) => {
  const data = information.slice(0, 4).map(({ temp: { min, max } }, idx) => {
    const date = new Date()
    return {
      index: idx + 1,
      min: min - 273.15,
      max: max - 273.15,
      date: addDays(date, idx)
    }
  })
  const yRange = h * 4 / 6
  const yOffsetTop = h / 6

  const xBar = data.map((e) => (
    <text
      x={w * (e.index + 0.5) / 6}
      y={h * 5.5 / 6}
      fontSize="14"
      textAnchor="middle"
      fill={textXColor}
      key={e.index}
    >{`${e.date.getMonth() + 1}-${e.date.getDate()}`}</text>
  ))

  const yBar = Array(7).fill(null).map((e, idx) => (
    <text
      x={w * 0.75 / 6}
      y={yRange * (idx + 1) / 8 + yOffsetTop}
      fontSize="14"
      textAnchor="end"
      fill={textYColor}
      key={idx}
    >{35 - idx * 5}</text>
  ))

  const minCircle = data.map((e) => (
    <circle
      fill="#eee"
      stroke={minColor}
      strokeWidth="2"
      cx={(e.index + 0.5) / 6 * w}
      cy={(40 - e.min) / 40 * yRange + yOffsetTop}
      r="5"
      key={e.index}
    />
  ))

  const maxCircle = data.map((e) => (
    <circle
      fill="#eee"
      stroke={maxColor}
      strokeWidth="2"
      cx={(e.index + 0.5) / 6 * w}
      cy={(40 - e.max) / 40 * yRange + yOffsetTop}
      r="5"
      key={e.index}
    />
  ))

  const minPathParam = data.reduce((acc, cur) => {
    return acc + `L${(cur.index + 0.5) / 6 * w} ${(40 - cur.min) / 40 * yRange + yOffsetTop} `
  }, '').replace(/L/, 'M')

  const maxPathParam = data.reduce((acc, cur) => {
    return acc + `L${(cur.index + 0.5) / 6 * w} ${(40 - cur.max) / 40 * yRange + yOffsetTop} `
  }, '').replace(/L/, 'M')

  return (
    <div>
      <svg width={w} height={h} fill={bgColor} >

        <line stroke="gray" x1={w / 6} y1={h * 5 / 6} x2={w * 5 / 6} y2={h * 5 / 6} />
        {xBar}

        <line stroke="gray" x1={w / 6} y1={h / 6} x2={w / 6} y2={h * 5 / 6} />
        {yBar}

        <path d={minPathParam} stroke={minColor} strokeWidth="3" fill="none"/>
        <path d={maxPathParam} stroke={maxColor} strokeWidth="3" fill="none"/>

        {minCircle}
        {maxCircle}

      </svg>
    </div>
  )
}

export default ChartPie
