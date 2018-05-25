//引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random;

//使用mockjs模拟数据
Mock.mock('/api/data', (req, res) => {
    let data = [];
    for (let i = 0; i < 100; i++) {
        let newArticleObject = {
            name: Random.csentence(5),
            time: Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            img: Random.image('400x400', 'png', '#FFF', 'deyu'),
            email: Random.email(),
            data:[Random.datetime('yyyy-MM-dd A HH:mm:ss'),Random.image('400x400', 'png', '#FFF', 'deyu'),Random.email()]
        }
        data.push(newArticleObject)
    }

    return {
        data: data
    }
})

//使用mockjs模拟数据 头像
Mock.mock('/api/img', (req, res) => {
    return {
        img: Random.image('400x400', 'png', '#FFF', 'deyu')
    }
})

//使用mockjs模拟数据 图表一
Mock.mock('/api/echartss', (req, res) => {

    let data = [{
        xAxisdata:[Random.date(),Random.date(),Random.date(),Random.date(),Random.date(),Random.date(),Random.date()],
        seriesdata:[{
                        name:'录入房源',
                        type:'line',
                        stack: '总量',
                        data:[Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100)]
                    },
                    {
                        name:'房源跟进',
                        type:'line',
                        stack: '总量',
                        data:[Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100)]
                    },
                    {
                        name:'录入客户',
                        type:'line',
                        stack: '总量',
                        data:[Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100)]
                    },
                    {
                        name:'客户跟进',
                        type:'line',
                        stack: '总量',
                        data:[Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100)]
                    },
                    {
                        name:'录入照片',
                        type:'line',
                        stack: '总量',
                        data:[Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100), Random.natural(60, 100)]
                    }
                ]
    }]
    return {
        data: data
    }
})




//使用mockjs模拟数据 图表2
Mock.mock('/api/echartss2', (req, res) => {
    return {
        data: [Random.natural(60, 100),Random.natural(60, 100),Random.natural(60, 100),Random.natural(60, 100),Random.natural(60, 100)]
    }
})


//使用mockjs模拟数据 人员
Mock.mock('/api/people', (req, res) => {
    let data = [];
    let datas = 1; 
    for (let i = 0; i < Random.natural(3, 8); i++) {
        let newArticleObject = {
                value: Mock.mock('@increment'),
                label: datas++ +'部',
                children: [
                    {
                        value:Random.cname(),
                        label:Random.cname()
                    },
                    {
                        value:Random.cname(),
                        label:Random.cname()
                    },
                    {
                        value:Random.cname(),
                        label:Random.cname()
                    }
                ]
            }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})



//使用mockjs模拟数据 首页房源跟进模拟
Mock.mock('/api/roomData', (req, res) => {
    let data = [];
    for (let i = 0; i < 20; i++) {
        let newArticleObject = {
            id: 'FY00'+Random.increment(),
            men: Random.natural(1, 80)+Random.character()+"-"+Random.natural(1, 50)+Random.character(),
            gen: Random.cname(),
            time: Random.datetime(),
            con: Random.cparagraph(),
        }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})



//使用mockjs模拟数据 隐藏联系人
Mock.mock('/api/showLi', (req, res) => {
    let data = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
            tongguo:Random.boolean(), //通过
            jujue:Random.boolean(), //拒绝
            xin: Random.csentence(5,15),
            lei: Random.boolean(),
            shen: Random.cname(),
            time: Random.now(),
            yuan: Random.csentence(5),
            bei: Random.csentence(5),
            zhuang: Random.csentence(5)
        }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})


//使用mockjs模拟数据 工作提醒
Mock.mock('/api/offices', (req, res) => {
    let data = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
             time:Random.now(),
             fa:'自动提醒',
             nei:Random.cparagraph(),
             lei:Random.natural(1, 3),
            }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})



//使用mockjs模拟数据 首页房源跟进模拟
Mock.mock('/api/roomDatas', (req, res) => {
    let data = [];
    for (let i = 0; i < 20; i++) {
        let newArticleObject = {
            zhu: `【${Random.date()}】- ${Random.cname()} - 工作总结`,
            fa: Random.cname(),
            time: Random.datetime(), //时间
            action: Random.boolean(),
        }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})



//使用mockjs模拟数据 成交报告
Mock.mock('/api/Deal', (req, res) => {
    let data = [];
    for (let i = 0; i < 10; i++) {
        let newArticleObject = {
                id:'00'+Random.increment(),
                name:'【'+Random.cname()+'】 - 浦江智地精品商务园6号楼'+Random.natural(1, 80)+Random.character()+"-"+Random.natural(1, 50)+Random.character()+' - 成交报告单',
                Remarks:Random.ctitle(),
                ok:Random.boolean(),
                time:Random.datetime(),
                Timeline:[Random.boolean(),Random.boolean(),Random.boolean(),Random.boolean(),Random.boolean(),Random.boolean(),Random.boolean()]
            }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})



//使用mockjs模拟数据 成交报告
Mock.mock('/api/house', (req, res) => {
    let data = [];
    for (let i = 0; i < 5; i++) {
        let newArticleObject = {
                id: Random.natural(100, 800),
                men: Random.natural(1, 80)+"F"+"-"+Random.natural(1, 50),
                mian: Random.natural(100, 800),
                Yjia: Random.natural(1, 80),
                Yjias: Random.natural(1, 80),
                yetype: Random.natural(0, 1),
                zuitime: Random.datetime(),
                zhuangt: '下架/有效',
                ren: 'admin',
            }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})



//使用mockjs模拟数据 成交报告
Mock.mock('/api/houses', (req, res) => {
    let data = [];
    for (let i = 0; i < 20; i++) {
        let newArticleObject = {
             id: Random.natural(1, 80),
             name:'江苏大厦',
             esa:Random.natural(1, 80),
             diyu:Random.province(),
             ditie:Random.province()+'站'
            }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})



Mock.mock('/api/housess', (req, res) => {
    let data = [];
    for (let i = 0; i < 20; i++) {
        let newArticleObject = {
                id: Random.natural(100, 800),
                men: Random.natural(1, 80)+"F"+"-"+Random.natural(1, 50),
                mian: Random.natural(100, 800),
                Yjia: Random.natural(1, 80),
                Yjias: Random.natural(1, 80),
                yetype: Random.natural(0, 1),
                zuitime: Random.datetime(),
                zhuangt: '下架/有效',
                ren: 'admin',
            }
        data.push(newArticleObject)
    }
    return {
        data: data
    }
})



// Random.natural(60, 100)