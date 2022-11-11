let position=1;
$('.btn').click(function(){
    let from=$('#from').val();
    console.log(from);
    let to=$("#to").val();
    console.log(to);
    
    console.log(position)
    if(from==1&&to==2){
        $('.rectangel1').animate({position:"absolute",left:'145px',top:'270px'});
        position=2;
    }
    else if(from==1&&to==3){
        $('.rectangel1').animate({position:"absolute",left:'271px'});
        position=3;
    } 
    else if(from==1&&to==1){
        $('.rectangel1').animate({position:"absolute",left:'35px'});
        position=3;
    } 
    
    
        if(from==2&&to==1){
            $('.rectangel2').animate({position:"absolute",left:'25px'});
            
        }
        else if(from==2&&to==3){
            $('.rectangel2').animate({position:"absolute",left:'262px'});
            
        }
        else if(from==2&&to==2){
            $('.rectangel2').animate({position:"absolute",left:'135px'});
        }   
    
     

   
        if(from==3&&to==1){
            $('.rectangel3').animate({position:"absolute",left:'15px'});
            
        }
        else if(from==3&&to==2){
            $('.rectangel3').animate({position:"absolute",left:'135px'});
        }
        else if(from==3&&to==3){
            $('.rectangel3').animate({position:"absolute",left:'251px'});
            
        }
    
    
})

// if(from>0&&to>0||from<=3&&to<=3){
    
        
           
    
    
        if(from==2&&to==1){
            $('.rectangel2').animate({position:"absolute",left:'135px'});
            position=1;
        }
        else if(from==2&&to==3){
            $('.rectangel2').animate({position:"absolute",left:'262px'});
            position=3;
        }    
    
    
        if(from==3&&to==1){
            $('.rectangel2').animate({position:"absolute",left:'125px'});
            position=1;
        }
        else if(from==3&&to==2){
            $('.rectangel2').animate({position:"absolute",left:'251px'});
            position=2;
        }    
    
// else{
//     alert("are chu...")
// }