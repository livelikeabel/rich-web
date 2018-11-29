import List from './pages/List'
import Chat from './pages/Chat'

export const routes = [
  {
    path: "/",
    component: List,
    exact: true
  },
  {
    path: '/chat:id',
    component: Chat
  }
]