function check(){
    var c = 0;
    var questionsarea = document.getElementsByClassName('questionarea');
    var option = [document.quize.options1.value, document.quize.options2.value, document.quize.options3.value, document.quize.options4.value, document.quize.options5.value, document.quize.options6.value, document.quize.options7.value, document.quize.options8.value, document.quize.options9.value, document.quize.options10.value];
    var dynamicscore = document.getElementById('dynamicscore');
    var result = document.getElementById('result');
    var otcontentbody = document.getElementById('otcontentbody');
    var dprinword = document.getElementById('dprinword');
    var resultdetailsheading = document.getElementById('resultdetailsheading');
    var resultdetaildescription = document.getElementById('resultdetaildescription');

    for(let i=0; i<questionsarea.length; i++){
       
        if (option[i]==0){
            c+=0;
        }
        else if(option[i]==1){
            c+=1;
        }
        else if(option[i]==2){
            c+=2;
        }
        else {
            c+=3;
        }
    }
 
    dynamicscore.textContent='Your result is ${c}.';
    result.style.display="block";
    otcontentbody.style.display="none";

    
    // if((c*100)/30=0){
    //     dprinword.textContent='Minimul Depression';
    //     resultdetailsheading = 'Your results indicate that you have none, or very few signs of depression.';
    //     resultdetaildescription = 'These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.';
    // }
    // else if(c*100)/30=<50){
    //     dprinword.textContent='You are in Depression';
    //     resultdetailsheading = 'Your results indicate that you have none, or very few signs of depression.';
    //     resultdetaildescription = 'These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.';
    // }
    // else{
    //     dprinword.textContent='You are in most Depression';
    //     resultdetailsheading = 'Your results indicate that you may be experiencing signs of moderately severe depression.';
    //     resultdetaildescription = 'These results are not meant to be a diagnosis. You can meet with a doctor or therapist to get a diagnosis and/or access therapy or medications. Sharing these results with someone you trust can be a great place to start.';
    // }
}



