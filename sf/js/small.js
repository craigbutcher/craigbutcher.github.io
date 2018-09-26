// Set Date
document.getElementById("year").innerHTML = new Date().getFullYear();

// Grow Textarea box
var growBox = function(){

	var onInput = function() {
		this.style.height = "auto";
		this.style.height = (this.scrollHeight) + "px";
	};

	var textarea = document.getElementsByTagName("textarea");
	for (var i = 0; i < textarea.length; i++) {
		textarea[i].setAttribute("style", "height:" + (textarea[i].scrollHeight) + "px:overflow-y: hidden;");
		textarea[i].addEventListener("input", onInput, false);
	}

};

// DOM ready?
document.addEventListener("DOMContentLoaded", function() {
	growBox();
});

// BitPay
function checkRequiredFields(form){
    function isFilled(field){
      if (field.value.length < 1){
        return false;
      }
      return true;
    }
    var elements = form.elements;
    var invalid = false;
    for(var i=0; i<elements.length; i++) {
      elements[i].className = elements[i].className.replace('bitpay-donate-error', '');
      if(elements[i].className.indexOf("required") != -1) {
        if(!isFilled(elements[i])){
          elements[i].className = elements[i].className + ' bitpay-donate-error';
          invalid = true;
        };
      };
    }
    if ( invalid ) {
       return false;
    }
    var donationElement = document.getElementById('donation-value');
    if(donationElement){
      var enteredDonation = Number(donationElement.value);
      var maximumDonation = Number(document.getElementById('reference-maximum').value);
      if(enteredDonation > maximumDonation){
        alert("Your donation was larger than the allowed maximum of " + Number(maximumDonation).toFixed(2))
        return false;
      };
    };
    return true;
  };
