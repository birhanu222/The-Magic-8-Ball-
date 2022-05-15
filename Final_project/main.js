// https://github.com/birhanu222/magic8ball
let images = new Array(
    
    "magic/magic8ball_1.png",
    "magic/magic8ball_2.png",
    "magic/magic8ball_3.png",
    "magic/magic8ball_4.png",
    "magic/magic8ball_5.png",
    "magic/magic8ball_6.png",
    "magic/magic8ball_7.png",
    "magic/magic8ball_8.png",
    "magic/magic8ball_9.png",
    "magic/magic8ball_10.png",
    "magic/magic8ball_11.png",
    "magic/magic8ball_12.png",
    "magic/magic8ball_13.png",
    "magic/magic8ball_14.png",
    "magic/magic8ball_15.png",
    "magic/magic8ball_16.png",
    "magic/magic8ball_17.png",
    "magic/magic8ball_18.png",
    "magic/magic8ball_19.png",
    "magic/magic8ball_20.png",
    "magic/magic8ball_extra.png",
    "magic/magic8ball_start.png",
);


function ask(){
    let question = document.getElementById("question").value;
    if(question == ""){
        alert("Insert your question please!");
    }else{   
    let random = Math.floor(Math.random() * (images.length));
    document.getElementById('answer').src = images[random];
    // console.log(images[random]);
    
    }

    };
    
    

// function getQuestion(){
//     let  Question = prompt("your question please",""); 
//         if( Question !== null && Question !==""){
//             document.getElementById("question").value = Question;
            
//         }else{
//             alert("Type your question please");
//             getQuestion();
            
//         }
//         };
    
   


