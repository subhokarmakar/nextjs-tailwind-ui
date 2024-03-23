import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from '@tremor/react'

export default function SurveysTable({ surveys }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Username</TableHeaderCell>
          <TableHeaderCell>Email</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {surveys.map((survey) => (
          <TableRow key={survey?.id}>
            <TableCell>{survey?.name}</TableCell>
            <TableCell>
              <Text>{survey?.username}</Text>
            </TableCell>
            <TableCell>
              <Text>{survey?.email}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
