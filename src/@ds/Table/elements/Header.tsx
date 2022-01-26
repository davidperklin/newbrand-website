import React from 'react'

export interface TableHeaderProps
  extends React.HTMLProps<HTMLTableCellElement> {}

const Header: React.FC<TableHeaderProps> = ({ ...props }) => {
  return (
    <th {...props} className="td th">
      {props.children}
    </th>
  )
}

export default Header
