

//最近七天和最近三十天时间
function timeForMat (count) {
// 拼接时间
　　let time1 = new Date()
　　time1.setTime(time1.getTime() - (24 * 60 * 60 * 1000))
　　let Y1 = time1.getFullYear()
　　let M1 = ((time1.getMonth() + 1) > 10 ? (time1.getMonth() + 1) : '0' + (time1.getMonth() + 1))
　　let D1 = (time1.getDate() > 10 ? time1.getDate() : '0' + time1.getDate())
　　let timer1 = Y1 + '-' + M1 + '-' + D1 // 当前时间
　　let time2 = new Date()
　　time2.setTime(time2.getTime() - (24 * 60 * 60 * 1000 * count))
　　let Y2 = time2.getFullYear()
　　let M2 = ((time2.getMonth() + 1) > 9 ? (time2.getMonth() + 1) : '0' + (time2.getMonth() + 1))
　　let D2 = (time2.getDate() > 9 ? time2.getDate() : '0' + time2.getDate())
　　// let timer2 = Y2 + '-' + M2 + '-' + D2 // 之前的7天或者30天
　　// return {
　　// // t1: timer1,
　　// // t2: timer2
　　// }
　　return Y2 + '-' + M2 + '-' + D2;
}
// 获取今天
function sevenToday () {
　　let timer = timeForMat(0)
　　return timer;
}
// 获取最近7天
function sevenDays () {
　　let timer = timeForMat(7)
　　return timer;
}
// 获取最近30天
function thirtyDays () {
　　let timer = timeForMat(30)
　　return timer
}




module.exports = {
    timeForMat,
    sevenDays,
    thirtyDays,
    sevenToday
}