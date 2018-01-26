   /*sreekanth korampally*/ 

    function validateForm () {
        var fName = document.myform.firstName.value;
        var lName = document.myform.lastName.value;
        var smail = document.myform.Email.value;
        
        //for checking any blank fields
        if (fName=="" || lName=="" || smail=="") {
            alert("Please fill out all the details");
            return false;
        }
        //for checking proper first fName
        var checkFirst= /[A-Za-z]/;
        if(!checkFirst.test(fName)){
            alert('Please enter a valid firstname');
            return false;
        }
        //for checking proper last name
        var checkLast= /[A-Za-z]/;
        if(!checkLast.test(lName)){
            alert('Please enter a valid lastname');
            return false;
        }
        //for checking proper email format
        var checkEmail =/[A-Za-z0-9]@[A-Za-z0-9].[A-Za-z]/;
        if(!checkEmail.test(smail)){
            alert('Please enter a valid email');
            return false;
        }
      
      //load the values into local storage
        if(localStorage) {
            for (var i = 0; i < AllSelect.length; i++) {
    
                localStorage.setItem('ASelect'+ i, AllSelect[i]);
    
                
            }
            localStorage.setItem('FName',fName);
            localStorage.setItem('LName',lName);
            localStorage.setItem('EID',smail);

            if(localStorage.length+1>6){

                for(i=4;i<localStorage.length;i++){

                    localStorage.removeItem('ASelect'+i);
                }
            }


        }else{
    
            //setting cookies
    
            SetCookie('ASelect0', AllSelect[0]);
            SetCookie('ASelect1', AllSelect[1]);
            SetCookie('Aselect2', AllSelect[2]);
    
    
    
    
            SetCookie('FName',fName);
            SetCookie('LName',lName);
            SetCookie('EID',smail);
            
            
        }
        

        return true;
    }


        