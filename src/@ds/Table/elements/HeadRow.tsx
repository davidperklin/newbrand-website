import React from 'react'

export interface TableHeadRowProps
  extends React.HTMLProps<HTMLTableRowElement> {}

const HeadRow: React.FC<TableHeadRowProps> = ({ ...props }) => {
  return <tr {...props}>{props.children}</tr>
}

export default HeadRow
