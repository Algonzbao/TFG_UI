import { Reorder } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  return (
    <section className="px-8">
      <h1 className="text-white text-3xl mt-5"> Home </h1>
      <Reorder.Group
        axis="x"
        values={items}
        onReorder={setItems}
        className="grid grid-cols-7 gap-2 mt-4"
      >
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <div className="bg-white rounded-lg w-32 h-32 flex items-center justify-center text-4xl">
              {item}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  )
}
