var sendForm = (function() {
	var form = document.getElementsByTagName('form')[0];
	var inputs = form.getElementsByTagName('input');

	var methodsValidation = {
		'name' : function(elem) {
			var reg = /(^[A-Z]{1}[a-z]+)|(^[А-Я]{1}[а-я]+)/;
			return reg.test(elem.value);
		},
		'phone' : function(elem) {
			var reg = /\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}/;
			return reg.test(elem.value);
		},
		'email' : function(elem) {
			var reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
			console.log(reg.test(elem.value))
			return reg.test(elem.value);
		}
	};
	function sendDataToServer(e) {
		for(var i = 0; i < inputs.length; i++) {
			inputs[i].classList.remove('error');
		}
		e.preventDefault();
		if( validation() ) {
			console.log('все ушло')
			var succses = document.createElement('div');
			var succsesText = document.createTextNode('все ушло');
			succses.appendChild(succsesText);
			document.body.appendChild(succses);
		} else {
			console.log('что-то не так')
			var err = document.createElement('div');
			var errorText = document.createTextNode('что-то не так');
			err.appendChild(errorText);
			document.body.appendChild(err);
		}
	}
	function validation() {
		for(var i = 0; i < inputs.length; i++) {
			var inputCurrent = inputs[i];
			if( !methodsValidation[ inputCurrent.name ](inputCurrent) ) {
				errorAlarm( inputCurrent );
				return false
			}
		}
		return true
	}
	function errorAlarm(elem) {
		elem.classList.add('error');
	}
	return {
		init : function() {
			form.addEventListener('submit', sendDataToServer, false);
		}
	}
})();
// document.getElementsByTagName('form') && sendForm.init();
sendForm.init();