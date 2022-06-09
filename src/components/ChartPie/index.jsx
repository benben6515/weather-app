const ChartPie = ({ data = 75, width, height, fillColor = '#09d' }) => {

  const startAngle = 90
  const deg1 = (data * 3.6) + startAngle
  const deg2 = ((100 - data) * 3.6) + deg1
  const cx = width / 2
  const cy = width / 2
  const r = width / 4

  const x0 = cx + r * Math.cos(startAngle * Math.PI / 180)
  const y0 = cy - r * Math.sin(startAngle * Math.PI / 180)

  const x1 = cx + r * Math.cos(deg1 * Math.PI / 180)
  const y1 = cy - r * Math.sin(deg1 * Math.PI / 180)

  const x2 = cx + r * Math.cos(deg2 * Math.PI / 180)
  const y2 = cy - r * Math.sin(deg2 * Math.PI / 180)

  const isDeg1BigThan180 = data > 50 ? 1 : 0
  const isDeg2BigThan180 = data < 50 ? 1 : 0

  const pathParam1 = `M${cx} ${cy},L${x0} ${y0},A${r} ${r} 0 ${isDeg1BigThan180} 0 ${x1} ${y1},Z`
  const pathParam2 = `M${cx} ${cy},L${x1} ${y1},A${r} ${r} 0 ${isDeg2BigThan180} 0 ${x2} ${y2},Z`

  return (
    <div>
      <svg width={width} height={height} transform="scale(1.5)">
        <path d={pathParam1} fill={fillColor} />
        <path d={pathParam2} fill="#666" />
      </svg>
    </div>
  )
}

export default ChartPie
