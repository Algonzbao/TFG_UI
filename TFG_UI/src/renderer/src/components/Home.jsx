import { Reorder } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  return (
    <section className="px-8 overflow-hidden">
      <h1 className="text-white text-3xl mt-5"> Home </h1>
      <Reorder.Group
        axis="x"
        values={items}
        onReorder={setItems}
        layoutScroll
        className="flex gap-11 mt-16 overflow-auto apps pb-8"
      >
        {items.map((item) => (
          <Reorder.Item key={item} value={item}>
            <div className="bg-white rounded-lg w-52 h-[22rem] bg-gradient-to-t from-[#2f3241] flex items-center justify-center text-4xl text-black font-medium">
              {item}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  )
}
