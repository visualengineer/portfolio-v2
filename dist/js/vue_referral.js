var vueApp = new Vue({
    el: '#vueApp',
    data: {
        isDisabled: false,
        referalForm:{

            fieldContent:{
                
                "pro_name":"",
                "pro_country":"",
                "pro_coname":"",
                "pro_comment":"",
                "pro_phone":"",
                "pro_email":""
                //"vet_remember":"no",
                
                //"client_title":"",
                //"client_firstname":"",
                //"client_lastname":"",
                //"client_phone":"",
                
                //"patient_name":"",
                //"patient_species":"",
                //"patient_age":"",
                //"patient_gender":"",
                
                //"patient_insured":"yes",
                //"patient_travel":"yes",
                //"patient_notes":"",
                //"patient_reason":"",
                //"patient_terms":false

            },
            fieldStatus:{
                
                "pro_name":{validate:false,blurred:false},
                "pro_country":{validate:false,blurred:false},
                "pro_coname":{validate:false,blurred:false},
                "pro_comment":{validate:false,blurred:false},
                "pro_phone":{validate:false,blurred:false},
                "pro_email":{validate:false,blurred:false}
                //"vet_remember":{validate:false,blurred:false},

                //"client_title":{validate:false,blurred:false},
                //"client_firstname":{validate:false,blurred:false},
                //"client_lastname":{validate:false,blurred:false},
                //"client_phone":{validate:false,blurred:false},

                //"patient_name":{validate:false,blurred:false},
                //"patient_species":{validate:false,blurred:false},
                //"patient_age":{validate:false,blurred:false},
                //"patient_gender":{validate:false,blurred:false},
                //"patient_insured":{validate:false,blurred:false},
                //"patient_travel":{validate:false,blurred:false},
                //"patient_notes":{validate:false,blurred:false},
                //"patient_reason":{validate:false,blurred:false},
                //"patient_terms":{validate:false,blurred:false}
                
            },
            submitted:false,
            valid:false
        },
        messageForm:{
            messageClass:""
            ,messageStatus:false
            ,messageText:""
        }
    }
    , methods : {

        validate : function(){
            console.log("validating")
            this.resetForm();
            vetDetails = false;
            this.referalForm.fieldStatus.pro_name.blurred = true;
            this.referalForm.fieldStatus.pro_country.blurred = true;
            this.referalForm.fieldStatus.pro_coname.blurred = true;
            this.referalForm.fieldStatus.pro_comment.blurred = true;
            this.referalForm.fieldStatus.pro_phone.blurred = true;
            this.referalForm.fieldStatus.pro_email.blurred = true;
            //this.referalForm.fieldStatus.vet_remember.blurred = true;
            //clientDetails = false;
            //this.referalForm.fieldStatus.client_title.blurred = true;
            //this.referalForm.fieldStatus.client_firstname.blurred = true;
            //this.referalForm.fieldStatus.client_lastname.blurred = true;
            //this.referalForm.fieldStatus.client_phone.blurred = true;
            //patientDetails = false;
            //this.referalForm.fieldStatus.patient_name.blurred = true;
            //this.referalForm.fieldStatus.patient_species.blurred = true;
            //this.referalForm.fieldStatus.patient_age.blurred = true;
            //this.referalForm.fieldStatus.patient_gender.blurred = true;
            //this.referalForm.fieldStatus.patient_insured.blurred = true;
            //this.referalForm.fieldStatus.patient_travel.blurred = true;
            //this.referalForm.fieldStatus.patient_notes.blurred = true;
            //this.referalForm.fieldStatus.patient_reason.blurred = true;
            //this.referalForm.fieldStatus.patient_terms.blurred = true;
            let shortVet = this.referalForm.fieldStatus
            //let shortClient = this.referalForm.fieldStatus
            //let shortPatient = this.referalForm.fieldStatus
            if(shortVet.pro_name.validate && shortVet.pro_country.validate && shortVet.pro_coname.validate && shortVet.pro_comment.validate && shortVet.pro_phone.validate && shortVet.pro_email.validate){
                vetDetails = true;
                console.log("yep, got all the details")
            }
            //if(shortClient.client_title.validate && shortClient.client_firstname.validate && shortClient.client_lastname.validate && shortClient.client_phone.validate){
            //    clientDetails = true;
            //    console.log("clientDetails")
            //}
            //if(shortPatient.patient_name.validate && shortPatient.patient_species.validate && shortPatient.patient_age.validate && shortPatient.patient_gender.validate && shortPatient.patient_gender.validate){
            //    patientDetails = true;
            //    console.log("patientDetails")
            //}
            if( vetDetails ){ //&& clientDetails && patientDetails){
                console.log("valid");
                this.referalForm.valid = true;
            }

        },
        NumbersOnly(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46 && charCode !== 32 && charCode !== 43) {
              evt.preventDefault();;
            } else {
              return true;
            }
            //add 32 and 43 ----- evt.preventDefault();;
          },
        someAction : function(){
            this.isDisabled = true;
            console.log("yep, I hit the button");
        },
        resetForm : function(){
            console.log("resetting")
            this.referalForm.fieldStatus.pro_name.blurred = false;
            this.referalForm.fieldStatus.pro_country.blurred = false;
            this.referalForm.fieldStatus.pro_coname.blurred = false;
            this.referalForm.fieldStatus.pro_comment.blurred = false;
            this.referalForm.fieldStatus.pro_phone.blurred = false;
            this.referalForm.fieldStatus.pro_email.blurred = false;
            //this.referalForm.fieldStatus.vet_remember.blurred = false;

            //this.referalForm.fieldStatus.client_title.blurred = false;
            //this.referalForm.fieldStatus.client_firstname.blurred = false;
            //this.referalForm.fieldStatus.client_lastname.blurred = false;
            //this.referalForm.fieldStatus.client_phone.blurred = false;
            
            //this.referalForm.fieldStatus.patient_name.blurred = false;
            //this.referalForm.fieldStatus.patient_species.blurred = false;
            //this.referalForm.fieldStatus.patient_age.blurred = false;
            //this.referalForm.fieldStatus.patient_gender.blurred = false;
            //this.referalForm.fieldStatus.patient_insured.blurred = false;
            //this.referalForm.fieldStatus.patient_travel.blurred = false;
            //this.referalForm.fieldStatus.patient_notes.blurred = false;
            //this.referalForm.fieldStatus.patient_reason.blurred = false;
            //this.referalForm.fieldStatus.patient_terms.blurred = false;

        },
        validEmail : function(email) {
            console.log("validate email")
            //let re = /(.+)@(.+){2,}\.(.+){2,}/;
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let result = re.test(email.toLowerCase());            
            if( result){
                this.referalForm.fieldStatus.pro_email.validate = true;
                return true
            }
            
        },        
        validateText : function(strValue,prop) {
            console.log("something with text")
            if (strValue === "") {
                return false
            }
            else{                
                this.referalForm.fieldStatus[prop].validate = true;
                return true
            } 

        },        
        /*terms : function() {
            console.log("terms");                   
            this.validate();
            if (!this.referalForm.valid) {                
            console.log("terms not valid");   
                // this.referalForm.fieldStatus.patient_terms.blurred = false
               this.referalForm.fieldStatus.patient_terms.validate = false
                // this.referalForm.fieldContent.patient_terms = false
            }                
        },  */  
        submit : function(){
            console.log("submit");                   
            this.validate();
            //console.log(this.referalForm.fieldStatus)
            if(this.referalForm.valid){
                document.querySelector(".form-button").style.display = "none";
                var sending = document.querySelector(".sending");
                sending.classList.add("show");
                console.log("valid...go!"); 
                //THIS IS WHERE YOU SUBMIT DATA TO SERVER
                this.referalForm.submitted = true;
                this.post_referral();
                
            }
        } //end submit

		,post_referral:function(){				
			let formData = new FormData();			
			formData.append("pro_name"          , this.referalForm.fieldContent.pro_name);
			formData.append("pro_country"          , this.referalForm.fieldContent.pro_country);
			formData.append("pro_coname"      , this.referalForm.fieldContent.pro_coname);
			formData.append("pro_comment"      , this.referalForm.fieldContent.pro_comment);
			formData.append("pro_phone"         , this.referalForm.fieldContent.pro_phone);
			formData.append("pro_email"         , this.referalForm.fieldContent.pro_email);
			//formData.append("vet_remember"      , this.referalForm.fieldContent.vet_remember);
			//formData.append("client_title"      , this.referalForm.fieldContent.client_title);
			//formData.append("client_firstname"  , this.referalForm.fieldContent.client_firstname);
			//formData.append("client_lastname"   , this.referalForm.fieldContent.client_lastname);
			//formData.append("client_phone"      , this.referalForm.fieldContent.client_phone);
			//formData.append("patient_name"      , this.referalForm.fieldContent.patient_name);
			//formData.append("patient_species"   , this.referalForm.fieldContent.patient_species);
			//formData.append("patient_age"       , this.referalForm.fieldContent.patient_age);
			//formData.append("patient_gender"    , this.referalForm.fieldContent.patient_gender);
			//formData.append("patient_insured"   , this.referalForm.fieldContent.patient_insured);
			//formData.append("patient_travel"    , this.referalForm.fieldContent.patient_travel);
			//formData.append("patient_notes"     , this.referalForm.fieldContent.patient_notes);
			//formData.append("patient_reason"    , this.referalForm.fieldContent.patient_reason);
			//formData.append("patient_terms"     , this.referalForm.fieldContent.patient_terms);


			fetch('/post_value_email_send.php', {method: "POST", body: formData})
			.then((response) => {
				
				return response.json().then((data) => {

                    console.log(data);
					
					if(data.request_suc=='y'){
                        this.messageForm.messageText = data.request_class;
                        this.messageForm.messageText = data.request_text;
                        this.messageForm.messageStatus = true;   
                        console.log("sent!");
                        var sending = document.querySelector(".sending");
                        sending.classList.remove("show");
                        console.log("stop animation");
					}
					else{
                        this.messageForm.messageText = data.request_class;
                        this.messageForm.messageText = data.request_text;
                        this.messageForm.messageStatus = false; 
                        console.log("what has gone wrong this time?!");
					}

					return data;
                    
				})
				.catch((err) => {
					console.log(err,'err');
				})
				
			});
		}

    }

})

/*

//Obj of data to send in future like a dummyDb
const data = { username: 'example' };

//POST request with body equal on data in JSON format
fetch('https://example.com/profile', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then((response) => response.json())
//Then with the data from the response in JSON...
.then((data) => {
  console.log('Success:', data);
})
//Then with the error genereted...
.catch((error) => {
  console.error('Error:', error);
});

//	

*/