/* eslint-disable */
import React, { useEffect, useState } from "react"

const dots = {
  0: "",
  1: ".",
  2: "..",
  3: "...",
}

const MainTitle = () => {
  const [innerWidth, setInnerWidth] = useState(0)
  const [dotCount, setDotCount] = useState(0)
  let count = 0

  const onChangeDotCount = () => {
    if (count === 3) {
      setDotCount(0)
      count = 0
      return
    }
    setDotCount(count + 1)
    count += 1
    return
  }

  const onResize = () => {
    setInnerWidth(window.innerWidth)
  }

  useEffect(() => {
    onResize()
    window.addEventListener("resize", onResize)
    setInterval(onChangeDotCount, 1000)
    return () => {
      clearInterval(onChangeDotCount)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  return (
    <>
      <h1 className="text-xl md:text-4xl text-center font-normal flex">
        <div className="p-1 w-1/2 text-right">Status Update:</div>
        <div className="p-1 w-1/2 text-left text-yellow-700 font-bold">
          Work in Progress{innerWidth >= 426 && dots[dotCount]}
        </div>
      </h1>
      <p className="md:text-2xl text-md text-center font-light">
        Sorry for the dust! I know it’s taking a while but sit tight and this
        site will be up very soon.
      </p>
    </>
  )
}

export default MainTitle
