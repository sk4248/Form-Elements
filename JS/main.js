/*Sreekanth Korampally*/

//Function for the movement of logo Picture

var AllSelect = [];
function myPic(){
        var pic= document.getElementById("virat");
        var loc=-170;
        var mv=setInterval(fin,5);
        function fin(){
            if (loc==500){
                clearInterval(mv);
            }
            else{
                loc++;
                pic.style.top = loc +'px';
                
            }
        }
    }

    
// Main Function
function make(dom){


//Checks if this is the first time?

	var contain=document.createElement('div');
	contain.setAttribute('id','cricket');

	if(dom == 'List'){
		var hold=data[dom];

	}else{

		var hold=data[dom.value];


  //Stores the All selected Values
        AllSelect = AllSelect.concat(dom.value);
		
   //Removes the selected options when the user changes in the first place
		while (dom.parentNode != dom.parentNode.parentNode.lastChild) {
                dom.parentNode.parentNode.removeChild(dom.parentNode.parentNode.lastChild);
            }

            //Function to remove the form when options are changed in the previous steps

            if (parseInt(document.getElementById('move').style.left) > 0) {
                //moving the form backwards

                document.getElementById('move').style.left = -200 + 'px';
                while (document.getElementById('move').childNodes.length != 0) {
            
               //remove the children
                    document.getElementById('move').removeChild(document.getElementById('move').firstChild);
                }
            }



	}

    //hold is the house for holding the data 
	if(hold[0] !== null){


 // Creating heading and select options
		var header = document.createElement('h4');
		var textNode=document.createTextNode(hold[0]);
		header.appendChild(textNode);
		document.getElementById('container').appendChild(header);

		var choose=document.createElement('select');
		choose.setAttribute('id',hold[1]);


        if(IE7){
                 choose.setAttribute('onchange',function(){make(this);});
            }else{
        choose.setAttribute('onchange','make(this);');
    }

        choose.setAttribute('name',hold[1]);
        for(var k=1;k<hold.length;k++){
        	var option = document.createElement('option');
        	option.setAttribute('value',hold[k]);
        	var detail=document.createTextNode(hold[k]);
        	option.appendChild(detail);
        	choose.appendChild(option);
        }
        contain.appendChild(choose);
        document.getElementById('container').appendChild(contain);

	}else{


		    //Form Creation
            var sree = document.createElement('form');
            sree.setAttribute('name', 'myform');
            sree.setAttribute('action', 'final.html');
            sree.setAttribute('method', 'post');
            sree.setAttribute('onsubmit', 'return validateForm(this)');
          

            //Form Heading
            var formhead = document.createElement('h4');
            formhead.setAttribute('style','position:relative;left:80px;top:20px');
            var  know = document.createTextNode('You want to..');
            formhead.appendChild(know);
            sree.appendChild(formhead);
            

            //Information
            var infor1=document.createElement('h5');
            infor1.setAttribute('style','position:relative;left:30px;top:10px;');
            var info1=document.createTextNode('Know about: ' + AllSelect[AllSelect.length-1]);
            infor1.appendChild(info1)
            sree.appendChild(infor1);

            var infor2=document.createElement('h5');
            infor2.setAttribute('style','position:relative;left:30px');
            var info2=document.createTextNode('Of: ' + AllSelect[AllSelect.length-2]);
            infor2.appendChild(info2)
            sree.appendChild(infor2);

            var infor3=document.createElement('h5');
            infor3.setAttribute('style','position:relative;left:30px');
            var info3=document.createTextNode('From: ' + AllSelect[AllSelect.length-3]);
            infor3.appendChild(info3)
            sree.appendChild(infor3);


            var formhead2 = document.createElement('h4');
            formhead2.setAttribute('style','position:relative;left:80px');
            var  who = document.createTextNode('Your Details?');
            formhead2.appendChild(who);
            sree.appendChild(formhead2);


            //Form's FirstName
            var first = document.createElement('label');
            first.setAttribute('style','');
            var Fnode = document.createTextNode('First Name:');
            first.setAttribute('style','position:relative;');
            first.appendChild(Fnode);
            sree.appendChild(first);
            var Firstin = document.createElement('input');
            Firstin.setAttribute('id','Frs');
            Firstin.setAttribute('type', 'text');
            Firstin.setAttribute('style',"padding-left:20px;color:black");
            

            if (localStorage) {

                var getf = localStorage.getItem('FName');
                if(getf==null ){
                    Firstin.setAttribute('value','');
                }else {
                    Firstin.setAttribute('value', getf);
                }

            } else {

                var cookf = GetCookie('FName');
                Firstin.setAttribute('value', cookf);

            }

            Firstin.setAttribute('name', 'firstName');
            sree.appendChild(Firstin);


            //Gap
            var line = document.createElement('br');
            sree.appendChild(line);

            //Form's LastName
            var last = document.createElement('label');
            last.setAttribute('style','position:relative');
            var Lnode = document.createTextNode('Last Name:');
            last.appendChild(Lnode);
            sree.appendChild(last);
            var Lastin = document.createElement('input');
            Lastin.setAttribute('id','scd');
            Lastin.setAttribute('type', 'text');
            Lastin.setAttribute('style',"padding-left:5px;color:black");

            if (localStorage) {

                var getl = localStorage.getItem('LName');

                if(getl==null ){
                    Lastin.setAttribute('value','');
                }else {
                    Lastin.setAttribute('value', getl);
                }

            } else {

                var cookl = GetCookie('LName');
                Lastin.setAttribute('value', cookl);
            }

            
            Lastin.setAttribute('name', 'lastName');
            sree.appendChild(Lastin);

            //Gap
            var line2 = document.createElement('br');
            sree.appendChild(line2);


            //Form's Email
            var Email = document.createElement('label');
            Email.setAttribute('style','postion:relative;');
            var Enode = document.createTextNode('Email:');
            Email.appendChild(Enode);
            sree.appendChild(Email);
            var Emailin = document.createElement('input');
            Emailin.setAttribute('id','eid');
            Emailin.setAttribute('type', 'text');
            Emailin.setAttribute('style',"");

            if (localStorage) {

                var gete = localStorage.getItem('EID');
                if(gete==null ){
                    Emailin.setAttribute('value','');
                }else {
                    Emailin.setAttribute('value', gete);
                }

            } else {

                var cooke = GetCookie('EID');
                einput.setAttribute('value', cooke);
            }


            Emailin.setAttribute('name', 'Email');
            sree.appendChild(Emailin);

            //Gap
            var line3 = document.createElement('br');
            sree.appendChild(line3);


            //Form's Submit Button
            var FAction = document.createElement('input');
            FAction.setAttribute('style',"position:relative;left:100px;top:20px");
            FAction.setAttribute('type', 'submit');
            FAction.setAttribute('value', 'Submit!');

            if(IE7){
                FAction.setAttribute('onclick',function(){validateForm(this);});
            }else{
                FAction.setAttribute('onclick', 'validateForm(this);');
            }
            
            sree.appendChild(FAction);


            //Appending elements to the division
            var FInfo = document.createElement('div');
          FInfo.setAttribute('id', 'forms');
          FInfo.setAttribute('style', "background-color:#f9f3cc;width:300px;height:300px;border-radius:6%");
          FInfo.appendChild(sree);
            document.getElementById('move').appendChild(FInfo);

            //Form movement
            (function moveIt() {
                var formMove = document.getElementById('move');
                if (parseInt(formMove.style.left) < 100) {
                    formMove.style.left = parseInt(formMove.style.left) + 5 + 'px';
                    setTimeout(function() {
                        moveIt();
                    }, 30);
                }
            })();
            
        }
    }