export interface TagProps extends React.HTMLProps<HTMLSpanElement> {
  content: string
  intent?: 'default' | 'danger' | 'warning' | 'success'
}
