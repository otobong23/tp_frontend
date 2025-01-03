'use client';
import React, { FC, useState } from 'react'


interface StringDataProps {
  str: string
}
export const StringDate:FC<StringDataProps> = ({ str }) => {
  const [getCurrentDate] = useState(new Date(str))
  return (
    <>{getCurrentDate.toDateString()}</>
  )
}