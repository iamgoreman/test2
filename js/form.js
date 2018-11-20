window.addEventListener("load",function() {

    var submitBtn = document.getElementById("submit");
	var resetBtn = document.getElementById("reset");
	
	submitBtn.addEventListener("click", onSubmitForm);
    resetBtn.addEventListener("click", onReset);

    var formIsValid;
    var validCheckMark = "&#10003";
    var validBorderColor = "#62f441"
    var errorBorderColor = "#f44242"

    function isValidDateFormat(dateString) {
        var regex = /^\d{2}-\d{2}-\d{4}$/;
        return dateString.match(regex);
    }

    function isValidEmailFormat(emailString) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailString.match(regex);
    }

    function isValidURLFormat(urlString) {
        var regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
        return urlString.match(regex);
    }

    function isNumeric(n) {	
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function validateMultipleSelect(selectId, min, max, errorMsg) {
    }

    function validateNotEmpty(inputFieldId, errorMsg) {
        var inputField = document.getElementById(inputFieldId);
        var errorField = document.getElementById(inputFieldId + "Error");
		
        if (inputField.value === ""){
            inputField.style.borderColor = errorBorderColor;
            errorField.innerHTML = errorMsg;
            errorField.style.color = errorBorderColor;
            formIsValid = false;
			
			errorField.style.marginBottom = "0.5em";
            errorField.style.marginTop = "-0.5em";
        }
        else {
            inputField.style.borderColor = validBorderColor;
            errorField.innerHTML = validCheckMark;
            errorField.style.color = validBorderColor;
        }
     
    }
	
	function resetField(inputFieldId){
			var inputField = document.getElementById(inputFieldId);
			var errorField = document.getElementById(inputFieldId + "Error");
			
			inputField.value="";
			errorField.value="";
			
			inputField.style.borderColor = "#000000";
			errorField.style.color = "#e7e7e7";
	}

    function onSubmitForm(evt){
        formIsValid = true;

        validateNotEmpty("firstname", "Please, enter your First name");
		validateNotEmpty("lastname", "Please, enter your Last name");
        validateNotEmpty("email", "Please, enter your personal email address");
        validateNotEmpty("jobtitle", "Please, enter your current job title");
        validateNotEmpty("date", "Please, enter the current date");
        validateNotEmpty("headline", "Please, enter the headline you want to publish");
		validateNotEmpty("storytext", "Please, submit a story you wish to see published");


        if (!formIsValid) {
            evt.preventDefault();
        }
       // else {
            
        //}
    };
	
	function onReset(evt){
        resetField("firstname");
		resetField("lastname");
		resetField("email");
		resetField("jobtitle");
		resetField("date");
		resetField("headline");
		resetField("storytext");
    };
})
