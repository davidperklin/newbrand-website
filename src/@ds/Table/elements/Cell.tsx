import React from 'react'

export interface TableCellProps
  extends React.HTMLProps<HTMLTableCellElement> {}

const Cell: React.FC<TableCellProps> = ({ ...props }) => {
  return (
    <td {...props} className="td">
      {props.children}
    </td>
  )
}

export default Cell
