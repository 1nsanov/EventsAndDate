function FindDaysBeforeHB() {
	var DateTime = new Date(document.getElementById('InputDate').value);
	var currentDate = new Date();
	var days = Math.ceil((DateTime.getTime() - currentDate.getTime()) / 86400000)
	alert('До вашего дня рождения осталось ' + days + ' д.');
}

function BlockInput() {
	document.getElementById('FieldInput').disabled = true;
}

function UnblockInput() {
	document.getElementById('FieldInput').disabled = false;
}

function Accept() {
	alert('Вы действительно хотите осуществить этот выбор?')
}

function ChangeResult() {
	var result = document.getElementById('FieldChange').value
	document.getElementById('ChangeResult').innerHTML = 'Результат: ' + result
}

function ChangeSizeImage() {
	switch (parseInt(document.getElementById('Size').value)) {
		case 100:
			SetSize(100);
			break;
		case 50:
			SetSize(50);
			break;
		case 33:
			SetSize(33);
			break;
		case 25:
			SetSize(25);
			break;
		case 10:
			SetSize(10);
			break;
	}
}


function SetSize(size) {
	document.getElementById('Dodge').style.width = size + '%';
	document.getElementById('Dodge').style.height = size + '%';
}