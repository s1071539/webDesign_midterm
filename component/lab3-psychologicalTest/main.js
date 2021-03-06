$(function(){
    //儲存目前作答到第幾題
    var currentQuiz = null;

    var currentStack = [];

    //當按鈕按下後，要做的事情
    $("#startButton").on("click",function(){
        
        if(currentQuiz==null){
            currentQuiz=0;
            $("#question").text(questions[0].question);
            $("#options").empty();
            questions[0].answers.forEach(function(element,index,array){
            $("#options").append(`<input name='options' type='radio'
            value='${index}'><label>${element[0]}</label><br><br>`);
            });
            $("#startButton").text("下一題");
        }
        else{
            $.each($(":radio"),function(i,val){
                if(val.checked){
                    if(isNaN(questions[currentQuiz].answers[i][1])){
                    var finalResult = questions[currentQuiz].answers[i][1];
                    $("#question").text(finalAnswers[finalResult][0]);
                    $("#options").empty();
                    $("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                    currentQuiz=null;
                    $("#startButton").text("重新開始");
                }else{
                    currentQuiz = questions[currentQuiz].answers[i][1]-1;
                    currentStack.push(currentQuiz);
                    console.log(currentStack);
                    $("#question").text(questions[currentQuiz].question);
                    $("#options").empty();
                    questions[currentQuiz].answers.forEach(function(element,index,array){
                            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
                        });
                    }

                    return false;
                }
            });
        }

        if(currentStack.length > 0){
            $("#backButton").css("display","initial");
        }
    });


    
    $("#backButton").on("click",function(){
        currentQuiz = currentStack.pop()-1;
        console.log(currentStack);
        console.log(currentQuiz)
        $("#question").text(questions[currentQuiz].question);
        $("#options").empty();
        questions[currentQuiz].answers.forEach(function(element,index,array){
            $("#options").append(`<input name='options' type='radio' value='${index}'><label>${element[0]}</label><br><br>`);
        });

        if(currentStack.length == 0){
            $("#backButton").css("display","none");
        }
    });

    
});