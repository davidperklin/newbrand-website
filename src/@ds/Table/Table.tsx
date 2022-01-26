import React from 'react'
import { TableProps, TableSubComponents } from './Table.types'
import { Body, Cell, Head, Header, HeadRow, Row } from './elements'

import './styles.scss'

const Table: React.FC<TableProps> & TableSubComponents = ({
  ...props
}) => {
  return (
    <div className="table-container">
      <table {...props} role="table" className="table">
        {props.children}
      </table>
    </div>
  )
}

Table.Head = Head
Table.HeadRow = HeadRow
Table.Header = Header

Table.Body = Body
Table.Row = Row
Table.Cell = Cell

export default Table
