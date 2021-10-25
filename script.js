function FindDaysBeforeHB() {
	var inputData = prompt('Введите свою Дату рождения. (дд.мм.2022)')
	var patern = /(\d{2})\.(\d{2})\.(\d{4})/
	var DateTime = new Date(inputData.replace(patern, '$3-$2-$1'))
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
	document.getElementById('ChangeResult').innerHTML = 'Результат: ' + document.getElementById('FieldChange').value
}

function ChangeSizeImage() {
	SetSize(parseInt(document.getElementById('Size').value))
}


function SetSize(size) {
	document.getElementById('Dodge').style.width = size + '%';
	document.getElementById('Dodge').style.height = size + '%';
}