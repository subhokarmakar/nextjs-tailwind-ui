import { Card, Title, Text } from '@tremor/react'
import SurveysTable from './surveys-table'
import Search from '../../ui/search'

const Surveys = () => {
  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Title>Surveys</Title>
      <Text>A list of surveys received.</Text>
      <Search searchPlaceholder={'Survey Name'} />
      <Card className='mt-6'>
        <SurveysTable surveys={[]} />
      </Card>
    </main>
  )
}

export default Surveys
