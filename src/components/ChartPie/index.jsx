const ChartPie = ({ data, width, height, fillColor }) => {
  const pathParam = `M${width / 2} ${height / 2},L${width / 2} ${width / 4},A${width / 4} ${width / 4} 0 0 0 ${width / 4} ${width / 2},Z`
  const pathParam2 = `M${width / 2} ${height / 2},L${width / 2} ${width / 4},A${width / 4} ${width / 4} 0 1 1 ${width / 4} ${width / 2},Z`

  // TODO: add data

  return (
    <div>
      <svg width={width} height={height} transform="scale(1.5)">
        <path d={pathParam} fill="#666" />
        <path d={pathParam2} fill="#09d" />
      </svg>
    </div>
  )
}

export default ChartPie
