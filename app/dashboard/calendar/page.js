import { Card, Title, Text } from '@tremor/react'
import Calendar from './calendar'

const CalendarPage = () => {
  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Title>Calendar</Title>
      {/* <Text></Text> */}
      <Calendar />
    </main>
  )
}

export default CalendarPage
