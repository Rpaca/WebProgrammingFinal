var myAudio = new Audio("Gothic Music - The Sealed Kingdom.mp3");
var moveCount = 0;
var moveChane = 8;
            function fnMove(seq){
                $("#s" + seq).css("display", "flex");
                var offset = $("#s" + seq).offset();
                $('html, body').animate({scrollTop : offset.top}, 500);
            }

            function OnDisplay(choice, nonChoice, num){
                if($("#s" + nonChoice).css("display")!="none"){
                    return;}
                $("#a" + num).css("color", "red");
                $("#s" + choice).css("display", "flex");
                $("#s" + choice).css("flex-direction", "column");
                $("#s" + choice).css("justify-content", "center");
                $("#s" + choice).css(" align-items", "center");
                fnMove(choice);
            }

            function GoToLiving(){
                $("#a5").css("color", "red");
                //아이템을 모두 찾은 경우
                if($("#item1").css("display") && $("#item2").css("display")=="flex"){
                    fnMove(22);
                    $("#item1" ).css("display", "none");
                    $("#item2" ).css("display", "none");
                }

                else{
                    fnMove(23);
                }

                //아이템을 모두 찾지 못한 경우
            }

            function PlayMusic(){
                myAudio.play();
                $(".slidecontainer").css("visibility","visible");
                $(".SoundOff").css("display","none");
                $(".SoundOn").css("display","flex");
            }
            function StopMusic(){
                myAudio.pause();
                $(".slidecontainer").css("visibility","hidden");
                $(".SoundOn").css("display","none");
                $(".SoundOff").css("display","flex");
            }
            function SizingVolume(){
                myAudio.volume = 0.2;
            }
            function SetValue(obj){
                myAudio.volume = obj.value * 0.01;
                $(".slider").prop("value",obj.value);
            }
            function GoToTop(){
                $('html').scrollTop(0);
            }
            function Reload(){
                window.location.reload();
                GoToTop();
            }
            function GetItem(n){
                $("#item" + n).css("display", "flex");
            }
            function CheckCount(){
                moveCount++;
                if(moveChane < moveCount)
                {
                    fnMove(24);
                }
            }