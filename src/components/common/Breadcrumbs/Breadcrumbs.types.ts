export type Crumb = {
  label: string
  path: string
  isActive?: boolean
}

export interface BreadcrumbsProps {
  crumbs: Array<Crumb>
}
