export type RouteKey = 'home' | 'todoDetail'

export const paths: Record<RouteKey, string> = {
  home: '/',
  todoDetail: '/todo/:id',
}
