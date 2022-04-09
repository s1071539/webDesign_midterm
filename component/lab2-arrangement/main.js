$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    var topicCount = topic.length;
    for(var x=0;x<topicCount;x++){
        $("#courseTable").append("<tr>");
        $("#courseTable").append(`<td>${x+1}</td>`);
        $("#courseTable").append(`<td id=time>${startDate.getFullYear()}/${startDate.getMonth()+1}/${startDate.getDate()}</td>`);
        if(topic[x].includes("假日"))
            $("#courseTable").append(`<td class="holiday">${topic[x]}</td>`);
        else
            $("#courseTable").append(`<td>${topic[x]}</td>`);
        $("#courseTable").append("</tr>");
        startDate.setDate(startDate.getDate() + 7);
    }


    $("input").on("change",(event)=>{
        newStartDate = new Date(event.target.value);
        console.log(newStartDate)

        $("[id=time]").each((index,element)=>{
            $(element).text(newStartDate.getFullYear()+"/"+(newStartDate.getMonth()+1)+"/"+newStartDate.getDate());
            newStartDate.setDate(newStartDate.getDate() + 7);
            console.log(newStartDate)
        })
    })
});