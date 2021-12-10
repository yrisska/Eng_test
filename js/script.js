var counter = 0;
var difficulty, correct = 0, incorrect = 0;
var tempTest;
const easyTest = {
    Rus : [
        "Клавиатура","Хороший", "Мяч","Человек", "Кошка", "Я", "Солнце","Красивый","Вилка","Работа"
    ],
    Eng : [
        "keyboard", "good","ball","human","cat","i","sun","beautifull","fork","job"
    ]
}
const mediumTest = {
    Rus : [
        "Универ","Мышь", "Самолёт","Ковёр", "Кошка", "Я", "Солнце","Красивый","Вилка","Работа"
    ],
    Eng : [
        "university", "mouth","plane","carpet","cat","i","sun","beautifull","fork","job"
    ]
}
const hardTest = {
    Rus : [
        "Благочестие","Лысый", "Карман","Волшебник", "Искажение", "Я", "Солнце","Красивый","Вилка","Работа"
    ],
    Eng : [
        "devoution", "bold","pocket","wizzard","distortion","i","sun","beautifull","fork","job"
    ]
}
var grade = ["Bad...", "Normal~~~","Good!!!","Shmulya"];
function Start(){
    var radioValue = $("input[name='difficulty']:checked").val();
            if(radioValue == "Easy"){
                difficulty = 1;
                tempTest = easyTest;
                $(".word").html(tempTest.Rus[0]);
            }
            else if(radioValue == "Medium"){
                difficulty = 2;
                tempTest = mediumTest;
                $(".word").html(tempTest.Rus[0]);
            }
            else{
                difficulty = 3;
                tempTest = hardTest;
                $(".word").html(tempTest.Rus[0]);
            }
    }
$('.check').keydown(function(event) {
    if (event.keyCode == 13) {
        if (document.getElementById("check").value == tempTest.Eng[counter]) {
            correct++;
            $('#Correct').text("Correct: " + correct);
            counter++;
            $("#try").html(counter + "/10");
            $(".word").html(tempTest.Rus[counter]);
            document.getElementById("check").value = "";
        }
        else{
            incorrect++;
            $('#Incorrect').text("Incorrect: " + incorrect);
            counter++;
            $("#try").html(counter + "/10");
            $(".word").html(tempTest.Rus[counter]);
            document.getElementById("check").value = "";
        }
        setTimeout(() => {
            if (counter == 10) {
                alert("Your level of English: " + grade[Math.floor(correct/3)])
                document.location.reload();
            }
        }, 2);
        return false;
    }
});