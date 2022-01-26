import React from 'react'

export interface TableRowProps
  extends React.HTMLProps<HTMLTableRowElement> {}

const Row: React.FC<TableRowProps> = ({ ...props }) => {
  return (
    <tr {...props} className="tr">
      {props.children}
    </tr>
  )
}

export default Row
