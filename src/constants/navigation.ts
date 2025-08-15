export interface NavItem {
  path: string
  label: string
  name: string
}

export const navItems: NavItem[] = [
  { path: '/', label: '설치', name: 'install' },
  { path: '/api', label: 'API', name: 'api' },
  { path: '/usage', label: '사용법', name: 'usage' },
]
