import { useState } from 'react'

const Counter = () => {
  // not in use
  const [count, setCount] = useState(0)

  return (
    <div>
      <button type="button" onClick={() => setCount((count) => count + 1)}>
        count is: {count}
      </button>
    </div>
  )
}

export default Counter
