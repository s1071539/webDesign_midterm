var topic = [
    "尚未開學",
    "國定假日",
    "環境準備",
    "隨機性",
    "重複性",
    "考前假日"
];

var startDate = new Date();
function setMonthAndDay(startMonth, startDay){
    //Date 物件月份從0開始!
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
    console.log(startDate)
}
setMonthAndDay(4, 1);