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
          <TableHeaderCell>Survey Id</TableHeaderCell>
          <TableHeaderCell>Title</TableHeaderCell>
          <TableHeaderCell>Received On</TableHeaderCell>
          <TableHeaderCell>Status</TableHeaderCell>
          <TableHeaderCell>Action</TableHeaderCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {surveys.map((survey) => (
          <TableRow key={survey?.id}>
            <TableCell>{survey?.id}</TableCell>
            <TableCell>
              <Text>{survey?.title}</Text>
            </TableCell>
            <TableCell>
              <Text>{survey?.receivedOn}</Text>
            </TableCell>
            <TableCell>
              <Text>{survey?.status}</Text>
            </TableCell>
            <TableCell>
              <Text></Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
