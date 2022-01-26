import React from 'react'

export interface TableProps extends React.HTMLProps<HTMLTableElement> {}

const Table: React.FC<TableProps> = ({ ...props }) => {
  return (
    <table aria-label={props['aria-label']} {...props}>
      {props.children}
    </table>
  )
}

export default Table
