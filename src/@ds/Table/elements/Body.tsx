import React from 'react'

export interface TableBodyProps
  extends React.HTMLProps<HTMLTableSectionElement> {}

const Body: React.FC<TableBodyProps> = ({ height, ...props }) => {
  return (
    <tbody {...props} className="tbody">
      {props.children}
    </tbody>
  )
}

export default Body
