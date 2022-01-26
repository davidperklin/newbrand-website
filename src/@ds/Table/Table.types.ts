import {
  TableBodyProps,
  TableCellProps,
  TableHeaderProps,
  TableHeadProps,
  TableHeadRowProps,
  TableRowProps,
} from './elements'

export interface TableProps extends React.HTMLProps<HTMLTableElement> {}

export interface TableSubComponents {
  Head: React.FC<TableHeadProps>
  HeadRow: React.FC<TableHeadRowProps>
  Header: React.FC<TableHeaderProps>

  Body: React.FC<TableBodyProps>
  Row: React.FC<TableRowProps>
  Cell: React.FC<TableCellProps>
}
