import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};



export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'addip', title: '添加ip', name: 'add_ip', component: () => import('@/views/own-space/addip.vue') },
        { path: 'loureover', title: '楼盘删除', name: 'lou_reover', component: () => import('@/views/own-space/remove/lou.vue') },
        { path: 'fangreover', title: '房源删除', name: 'fang_reover', component: () => import('@/views/own-space/remove/fang.vue') },
        { path: 'district', title: '添加区域', name: 'dist_rict', component: () => import('@/views/own-space/add/district.vue') },
        { path: 'metro', title: '添加地铁', name: 'add_metro', component: () => import('@/views/own-space/add/metro.vue') },
        { path: 'recordingimg', title: '图片记录', name: 'recording_img', component: () => import('@/views/own-space/recording/img.vue') },
        { path: 'rizhie', title: '操作日志', name: 'rizhis', component: () => import('@/views/own-space/recording/rizhi.vue') },
        { path: 'daoqie', title: '房源到期日期', name: 'daoqi', component: () => import('@/views/own-space/recording/daoqi.vue') },
        { path: 'kehudaoqiw', title: '客户到期日期', name: 'kehudaoqi', component: () => import('@/views/own-space/recording/kehudaoqi.vue') },
        { path: 'alternation', title: '客户提醒间隔', name: 'alterna_tion', component: () => import('@/views/own-space/recording/alternation.vue') },
        { path: 'followups', title: '跟进记录', name: 'follow_up', component: () => import('@/views/own-space/recording/followup.vue') },
        { path: 'useradmin', title: '用户管理', name: 'user_admin', component: () => import('@/views/own-space/user.vue') },
        { path: 'help', title: '帮助中心', name: 'help', component: () => import('@/views/help/help.vue') },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') },
        { path: 'Dealadd', title: '成交报告添加', name: 'Deal_add', component: () => import('@/views/office/1/Deal/add.vue') },
        { path: 'addlst', title: '成交报告编辑', name: 'addl_st', component: () => import('@/views/office/1/Deal/addlst.vue') },
        { path: 'DealLooke', title: '成交报告详情', name: 'Deal_Looke', component: () => import('@/views/office/1/Deal/loook.vue') },
        { path: 'buildingaddedit', title: '楼盘编辑', name: 'buildingadd_edit', component: () => import('@/views/office/2/buildingaddedit.vue') },
        { path: 'buildinglook', title: '楼盘查看', name: 'building_look', component: () => import('@/views/office/2/buildinglook.vue') },
        { path: 'loucontas', title: '楼盘联系人', name: 'lou_contas', component: () => import('@/views/office/2/loucontas.vue') },
        { path: 'housetas', title: '房源联系人', name: 'hou_setas', component: () => import('@/views/office/3/housetas.vue') },
        { path: 'houseaddedit', title: '房源编辑', name: 'houseadd_edit', component: () => import('@/views/office/3/houseaddedit.vue') },
        { path: 'housefollow', title: '房源跟进', name: 'house_follow', component: () => import('@/views/office/3/housefollow.vue') },
        { path: 'houselook', title: '房源详情页', name: 'house_look', component: () => import('@/views/office/3/houselook.vue') },
        { path: 'clientaddedit', title: '客户编辑', name: 'clientadd_edit', component: () => import('@/views/office/4/clientaddedit.vue') },
        { path: 'clientaddlook', title: '客户查看', name: 'clientadd_look', component: () => import('@/views/office/4/clientaddlook.vue') },
        { path: 'directoryaddst', title: '企业名录编辑', name: 'directoryadd_st', component: () => import('@/views/office/5/directoryaddst.vue') },
        { path: 'directorytas', title: '企业名录联系人', name: 'directory_tas', component: () => import('@/views/office/5/directorytas.vue') },
        { path: 'directorylook', title: '企业名录查看', name: 'directory_look', component: () => import('@/views/office/5/directorylook.vue') },
        { path: 'print', title: '企业名录打印', name: 'print_s', component: () => import('@/views/office/5/print.vue') },
        { path: 'sharedadd', title: '添加品牌', name: 'shared_add', component: () => import('@/views/office/6/sharedadd.vue') },
        { path: 'sharedaddst', title: '编辑品牌', name: 'sharedadd_st', component: () => import('@/views/office/6/sharedaddst.vue') },
        { path: 'sharedaddedit', title: '共享办公楼盘编辑', name: 'sharedadd_edit', component: () => import('@/views/office/6/buildingaddeditw.vue') },
        { path: 'sharedaddg', title: '添加工位', name: 'shared_addg', component: () => import('@/views/office/6/sharedaddg.vue') },
        { path: 'sharedlook', title: '共享办公跟进', name: 'shared_look', component: () => import('@/views/office/6/sharedlook.vue')},
        { path: 'recommend', title: '选址推荐书生成', name: 'recomm_end', component: () => import('@/views/office/1/recommend.vue')},
        { path: 'newsadd', title: '添加新闻', name: 'news_add', component: () => import('@/views/office/7/newsadd.vue')},
        { path: 'bespokels', title: '预约客户跟进', name: 'bespokels', component: () => import('@/views/office/8/bespokels.vue')},
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/overview',
        icon: 'ios-home',
        name: 'overview',
        title: '工作概览',
        component: Main,
        children: [
            { path: 'work', icon: 'android-radio-button-off', title: '工作概览', name: 'work', component: () => import('@/views/office/1/work.vue')},
            { path: 'Deal', icon: 'android-radio-button-off', title: '成交报告', name: 'Deal', component: () => import('@/views/office/1/Deals.vue')},
            { path: 'book', icon: 'android-radio-button-off', title: '选址推荐书', name: 'book_s', component: () => import('@/views/office/1/books.vue')},
        ]
    },
    {
        path: '/building',
        icon: 'ios-keypad',
        name: 'building',
        title: '楼盘字典',
        component: Main,
        children: [
            { path: 'buildingls', icon: 'android-radio-button-off', title: '楼盘列表', name: 'buildingls', component: () => import('@/views/office/2/building.vue')},
            { path: 'buildingsadd', icon: 'android-radio-button-off', title: '添加楼盘', name: 'buildingsadd', component: () => import('@/views/office/2/buildingadd.vue')}
        ]
    },
    {
        path: '/house',
        icon: 'ios-keypad-outline',
        name: 'house',
        title: '房源管理',
        component: Main,
        children: [
            { path: 'housels', icon: 'android-radio-button-off', title: '房源列表', name: 'housels', component: () => import('@/views/office/3/house.vue')},
            { path: 'houseadd', icon: 'android-radio-button-off', title: '房源添加', name: 'houseadd', component: () => import('@/views/office/3/houseadd.vue')},
            { path: 'shared', icon: 'android-radio-button-off', title: '共享办公', name: 'shared_l', component: () => import('@/views/office/6/shared.vue')},
        ]
    },
    {
        path: '/client',
        icon: 'person',
        name: 'client',
        title: '客户管理',
        component: Main,
        children: [
            { path: 'clients', icon: 'android-radio-button-off', title: '客户列表', name: 'clients', component: () => import('@/views/office/4/client.vue')},
            { path: 'clientadd', icon: 'android-radio-button-off', title: '客户添加', name: 'client_add', component: () => import('@/views/office/4/clientadd.vue')},
            { path: 'directory', icon: 'android-radio-button-off', title: '企业名录', name: 'directory', component: () => import('@/views/office/5/directory.vue')},
            { path: 'directoryadd', icon: 'android-radio-button-off', title: '添加企业名录', name: 'directory_add', component: () => import('@/views/office/5/directoryadd.vue')},
        ]
    },
    {
        path: '/access',
        icon: 'person-stalker',
        name: 'access',
        title: '客户预约',
        component: Main,
        children: [
            { path: 'bespoke', title: '客户预约列表', name: 'bespoke', component: () => import('@/views/office/8/bespoke.vue') }
        ]
    },
    // {
    //     path: '/access',
    //     icon: 'key',
    //     name: 'access',
    //     title: '新闻管理',
    //     component: Main,
    //     children: [
    //         { path: 'news', title: '新闻列表', name: 'newst', component: () => import('@/views/office/7/news.vue') }
    //     ]
    // },
    // {
    //     path: '/access-test',
    //     icon: 'lock-combination',
    //     title: '权限测试页',
    //     name: 'accesstest',
    //     access: 0,
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '权限测试页', name: 'accesstest_index', access: 0, component: () => import('@/views/access/access-test.vue') }
    //     ]
    // },
    // {
    //     path: '/component',
    //     icon: 'social-buffer',
    //     name: 'component',
    //     title: '组件',
    //     component: Main,
    //     children: [
    //         {
    //             path: 'text-editor',
    //             icon: 'compose',
    //             name: 'text-editor',
    //             title: '富文本编辑器',
    //             component: () => import('@/views/my-components/text-editor/text-editor.vue')
    //         },
    //         {
    //             path: 'image-editor',
    //             icon: 'crop',
    //             name: 'image-editor',
    //             title: '图片预览编辑',
    //             component: () => import('@/views/my-components/image-editor/image-editor.vue')
    //         },
    //         {
    //             path: 'draggable-list',
    //             icon: 'arrow-move',
    //             name: 'draggable-list',
    //             title: '可拖拽列表',
    //             component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
    //         },
    //         {
    //             path: 'file-upload',
    //             icon: 'android-upload',
    //             name: 'file-upload',
    //             title: '文件上传',
    //             component: () => import('@/views/my-components/file-upload/file-upload.vue')
    //         }
    //     ]
    // },
    // {
    //     path: '/form',
    //     icon: 'android-checkbox',
    //     name: 'form',
    //     title: '表单编辑',
    //     component: Main,
    //     children: [
    //         { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
    //         { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

    //     ]
    // },
    // {
    //     path: '/tables',
    //     icon: 'ios-grid-view',
    //     name: 'tables',
    //     title: '表格',
    //     component: Main,
    //     children: [
    //         { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
    //         { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
    //     ]
    // },
    // {
    //     path: '/advanced-router',
    //     icon: 'ios-infinite',
    //     name: 'advanced-router',
    //     title: '高级路由',
    //     component: Main,
    //     children: [
    //         { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
    //         { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
    //     ]
    // },
    // {
    //     path: '/error-page',
    //     icon: 'android-sad',
    //     title: '错误页面',
    //     name: 'errorpage',
    //     component: Main,
    //     children: [
    //         { path: 'index', title: '错误页面', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
    //     ]
    // },
    // {
    //     path: '/floor',
    //     icon: 'android-sad',
    //     title: '楼盘',
    //     name: 'floor',
    //     component: Main,
    //     children: [
    //         { path: 'floorss', title: '楼盘', name: 'floorss', icon: 'link', component: () => import('@/views/floor/floor.vue') },
    //         { path: 'floors', title: '楼盘s', name: 'floors', icon: 'android-send', component: () => import('@/views/floor/floors.vue') }
    //     ]
    // },
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
