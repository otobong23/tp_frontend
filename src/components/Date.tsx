'use client';
import React, { FC, useEffect, useState } from 'react'

export const CurrentDate = () => {
  const [getCurrentDate, setCurrentDate] = useState(new Date())
  const timer = () => setInterval(()=> {
    setCurrentDate(new Date())
  },1000)

  useEffect(()=> {
    timer()
    return () => {
      clearInterval(timer())
    }
  }, [getCurrentDate])
  return (
    <>{getCurrentDate.toDateString()}</>
  )
}


interface StringDataProps {
  str: string
}
export const StringDate:FC<StringDataProps> = ({ str }) => {
  const [getCurrentDate, setCurrentDate] = useState(new Date(str))
  return (
    <>{getCurrentDate.toDateString()}</>
  )
}