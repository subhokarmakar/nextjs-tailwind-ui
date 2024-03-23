import { Card, AreaChart, Title, Text } from '@tremor/react'

const data = [
  {
    Month: 'Jan 24',
    Sales: 2890,
    Profit: 2400,
  },
  {
    Month: 'Feb 24',
    Sales: 1890,
    Profit: 1398,
  },
  {
    Month: 'March 24',
    Sales: 3890,
    Profit: 2980,
  },
]

export default function Chart() {
  return (
    <Card className='mt-8'>
      <Title>Stats Chart</Title>
      <Text>Comparison between Surveys Completed and Payments Received</Text>
      <AreaChart
        className='mt-4 h-80'
        data={data}
        categories={['Surveys', 'Payments']}
        index='Month'
        colors={['indigo', 'fuchsia']}
        valueFormatter={(number) =>
          `$ ${Intl.NumberFormat('us').format(number).toString()}`
        }
        yAxisWidth={60}
      />
    </Card>
  )
}
