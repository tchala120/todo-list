export type RouteKey = 'home' | 'todoDetail' | 'setting'

export const paths: Record<RouteKey, string> = {
  home: '/',
  todoDetail: '/todo/:id',
  setting: '/setting',
}
