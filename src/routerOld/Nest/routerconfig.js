

import Index, { List,Edit } from "./Index"
import My, { YHQ, Order, Pingfen } from "./My"
import Info from "./Info"


export const routerconfig = [
    {
        path: '/index',
        component: Index,
        exact: true,
        son: [{
            path: '/list',
            component: List,
            exact: true,
            son:[{
                path:'/edit',
                component:Edit,
                exact: true
            }]
        }]
    },
    {
        path: '/my',
        component: My,
        exact: true,
        son: [
            {
                path: '/yhq', component: YHQ, exact: true
            }, {
                path: '/order', component: Order, exact: true
            }, {
                path: '/pingfen', component: Pingfen, exact: true
            }]
    },
    {
        path: '/info', component: Info, exact: true
    }]

