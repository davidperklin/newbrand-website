import React from 'react'

export interface TableHeadProps
  extends React.HTMLProps<HTMLTableSectionElement> {}

const Head: React.FC<TableHeadProps> = ({ ...props }) => {
  return (
    <thead {...props} className="thead">
      {props.children}
    </thead>
  )
}

export default Head
