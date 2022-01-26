export interface AlertProps extends React.HTMLProps<HTMLDivElement> {
  intent?: 'default' | 'danger' | 'warning' | 'success'
  message: string | any
}
