function check(){
    let c = 0;
    var q1 = document.quize.options1.value;
    var q2 = document.quize.options2.value;
    var q3 = document.quize.options3.value;
    var q4 = document.quize.options4.value;
    var q5 = document.quize.options5.value;
    var q6 = document.quize.options6.value;
    var q7 = document.quize.options7.value;
    var q8 = document.quize.options8.value;
    var q9 = document.quize.options9.value;
    var q10 = document.quize.options10.value;

    var otcontentbody = document.getElementById('otcontentbody');
    var result = document.getElementById('result');
    var urscore = document.getElementById('urscore');
   

   
    if (q1==0){
        c+=0;
    }
    else if(q1==1){
        c+=1;
    }
    else if(q1==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q2==0){
        c+=0;
    }
    else if(q2==1){
        c+=1;
    }
    else if(q2==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q3==0){
        c+=0;
    }
    else if(q3==1){
        c+=1;
    }
    else if(q3==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q4==0){
        c+=0;
    }
    else if(q4==1){
        c+=1;
    }
    else if(q4==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q5==0){
        c+=0;
    }
    else if(q5==1){
        c+=1;
    }
    else if(q5==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q6==0){
        c+=0;
    }
    else if(q6==1){
        c+=1;
    }
    else if(q6==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q7==0){
        c+=0;
    }
    else if(q7==1){
        c+=1;
    }
    else if(q7==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q8==0){
        c+=0;
    }
    else if(q8==1){
        c+=1;
    }
    else if(q8==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q9==0){
        c+=0;
    }
    else if(q9==1){
        c+=1;
    }
    else if(q9==2){
        c+=2;
    }
    else {
        c+=3;
    }

    if (q10==0){
        c+=0;
    }
    else if(q10==1){
        c+=1;
    }
    else if(q10==2){
        c+=2;
    }
    else {
        c+=3;
    }
    var total= c;
    // window.alert(c);
    // document.write(c);
    // document.getElementById('urscore').innerHTML= total;
    otcontentbody.style.display="none";
    result.style.display="block";
    // document.write((c*100)/30);
}


// .submitbtn.onclick = ()=>{
//         const scoreText = result.querySelector(".urscore");
//         const threesentence = result.querySelector(".dprinword");
//         const heading = result.querySelector(".resultdetailsheading");
//         const depression = result.querySelector(".resultdetaildescription");
//         if (c = 0){ 
           
//             let scoreTag = c;
//             scoreText.innerHTML = scoreTag;  
//             threesentence.innerHTML = "Minimal Depression"; 
//             heading.innerHTML = "Your results indicate that you have none, or very few signs of depression."; 
//             depression.innerHTML = "These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.";  

//         else if(c <= 50){ // if user scored more than 1
//             let scoreTag = c;
//             scoreText.innerHTML = scoreTag;  
//             threesentence.innerHTML = "Minimal Depression"; 
//             heading.innerHTML = "Your results indicate that you have none, or very few signs of depression."; 
//             depression.innerHTML = "These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start."; 
//         }
//         else{ // if user scored less than 1
//             let scoreTag = c;
//             scoreText.innerHTML = scoreTag;  
//             threesentence.innerHTML = "Minimal Depression"; 
//             heading.innerHTML = "Your results indicate that you have none, or very few signs of depression."; 
//             depression.innerHTML = "These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start."; 
//         }
   
// }
