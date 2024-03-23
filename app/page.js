import { Card, Title, Text } from '@tremor/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Home = () => {
  return (
    <main className='p-4 md:p-10 mx-auto max-w-7xl'>
      <Title>HomePage</Title>
      <a
        href='/dashboard/survey'
        className={classNames(
          'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
          'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
        )}
      >
        Nagigate to Survey
      </a>
    </main>
  )
}

export default Home
