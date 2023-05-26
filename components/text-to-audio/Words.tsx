import { NextPage } from 'next'
import React from 'react'

interface Props {
  item: {
    text: string,
    startTime: number,
  },
  currentTime: number,
}

const Words : NextPage<Props> = ({ item, currentTime }) => {
  return (
    <span className={`${item.startTime <= currentTime ? 'text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-purple-300' : 'text-gray-900'}`}>{item.text}</span>
  )
}

export default Words