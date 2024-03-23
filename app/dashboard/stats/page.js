import Chart from '../../ui/chart'
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react'

const surveys = [
  { name: 'Total Received', value: 1230 },
  { name: 'Completed', value: 751 },
  { name: 'In-Progress', value: 471 },
  { name: 'Cancelled', value: 280 },
  { name: 'Pending', value: 78 },
]

const payments = [
  { name: 'Completed', value: 453 },
  { name: 'In-Progress', value: 351 },
  { name: 'Cancelled', value: 271 },
]

const data = [
  {
    category: 'Surveys',
    stat: '10,234',
    data: surveys,
  },
  {
    category: 'Payments',
    stat: '12,543',
    data: payments,
  },
]

const Stats = () => {
  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Grid numItemsSm={2} numItemsLg={3} className='gap-6'>
        {data.map((item) => (
          <Card key={item.category}>
            <Title>{item.category}</Title>
            <Flex
              justifyContent='start'
              alignItems='baseline'
              className='space-x-2'
            >
              <Metric>{item.stat}</Metric>
              <Text>Total ( In Numbers )</Text>
            </Flex>
            <Flex className='mt-6'>
              <Text>Stats</Text>
              <Text className='text-right'>{''}</Text>
            </Flex>
            <BarList
              data={item.data}
              valueFormatter={(number) =>
                Intl.NumberFormat('us').format(number).toString()
              }
              className='mt-2'
            />
          </Card>
        ))}
      </Grid>
      <Chart />
    </main>
  )
}

export default Stats
