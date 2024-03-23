'use client'

import { Card, Title, Text } from '@tremor/react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import _mock from './_mock'

function renderEventContent(eventInfo) {
  const eventDetails = eventInfo.event?._def
  return (
    <div style={{ overflow: 'hidden' }}>
      <Card
        title={`${eventDetails?.title} - ${eventDetails?.extendedProps.description}`}
      >
        <Text>
          <Text>{eventInfo.timeText}</Text>
          <Text>{eventDetails?.title}</Text>
          <Text>{eventDetails?.extendedProps.description}</Text>
        </Text>
      </Card>
    </div>
  )
}

const Calendar = () => {
  return (
    <FullCalendar
      headerToolbar={{
        start: 'title', // Will show us the Calendar's month & year on the start
        end: 'today prev,next', // Will give us the option of the buttons on the right to navigate
      }}
      plugins={[dayGridPlugin]} // Calendar View type
      events={_mock} // List of all the events to be displayed
      eventContent={renderEventContent} // Extra content to be diplayed
    />
  )
}

export default Calendar
