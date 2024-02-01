let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = '#FFFFFF';
tg.MainButton.color = '#2cab37';

let item = "";

let ph1 = document.getElementById("ph1");
let ph2 = document.getElementById("ph2");
let mou1 = document.getElementById("mou1");
let mou2 = document.getElementById("mou2");
let mic1 = document.getElementById("mic1");
let mic2 = document.getElementById("mic2");

let key1 = document.getElementById("key1");
let key2 = document.getElementById("key2");
let hed1 = document.getElementById("hed1");
let hed2 = document.getElementById("hed2");

let gam1 = document.getElementById("gam1");
let gam2 = document.getElementById("gam2");


ph1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар телефон 1!");
		item = "1";
		tg.MainButton.show();
	}
});

ph2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар телефон 2!");
		item = "2";
		tg.MainButton.show();
	}
});

mou1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар мышка 1!");
		item = "3";
		tg.MainButton.show();
	}
});

mou2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар мышка 2!");
		item = "4";
		tg.MainButton.show();
	}
});

mic1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар микрофон 1!");
		item = "5";
		tg.MainButton.show();
	}
});

mic2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар микрофон 2!");
		item = "6";
		tg.MainButton.show();
	}
});

key1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар клавиатура 1!");
		item = "7";
		tg.MainButton.show();
	}
});

key2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар клавиатура 2!");
		item = "8";
		tg.MainButton.show();
	}
});

hed1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар наушники 1!");
		item = "9";
		tg.MainButton.show();
	}
});

hed2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар наушники 2!");
		item = "10";
		tg.MainButton.show();
	}
});

gam1.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар геймпад 1!");
		item = "11";
		tg.MainButton.show();
	}
});

gam2.addEventListener("click", function(){
	if (tg.MainButton.isVisible) {
		tg.MainButton.hide();
	}
	else {
		tg.MainButton.setText("Вы выбрали товар геймпад 2!");
		item = "12";
		tg.MainButton.show();
	}
});


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});


let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}`;

usercard.appendChild(p);
