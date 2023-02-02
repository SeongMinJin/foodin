var foodInfo = new Array();
var modalOpen = false;

window.onload = function() {
	fetch('http://127.0.0.1:3000/data/foods.json')
	.then(response => response.json())
	.then(data => {
		Object.keys(data.maindishes).forEach(key => {
			foodInfo.push(data.maindishes[key]);
		});

	function mainDish() {
		var root = document.getElementById('root');
		var container = document.createElement('div');
		var image = document.createElement('img');
		var duration = Math.floor(Math.random() * 10) + 5;
		var index = Math.floor(Math.random() * foodInfo.length);

		container.classList.add('container');
		container.style.left = Math.random() * 100 + 'vw';
		container.style.animationDuration = duration + 's';
	
		image.classList.add('image');
		image.style.width = "100px";
		image.style.height = "100px";
		image.style.animationDuration = duration + 's';
		image.src = foodInfo[index].image;
		container.addEventListener('click', function(event) {
			if (!modalOpen) {
				modalOpen = true;
				openModal(event, foodInfo[index])
			}
		});
	
	
		container.appendChild(image);	
		root.appendChild(container);
	
	
		setInterval(() => {
			container.remove();
		}, duration * 1000);
	
	}
	setInterval(mainDish, 500);
	// mainDish();
	});
};

var openModal = function(event, foodInfo) {

	var root = document.getElementById('root');
	var modalBox = document.createElement('div');
	var title = document.createElement('h4');
	var closeButton = document.createElement('button');
	var findButton = document.createElement('button');


	modalBox.style.width = '50vw';
	modalBox.style.height = '60vh';
	modalBox.style.position = 'relative';
	modalBox.style.zIndex = '100';
	modalBox.style.backgroundColor = 'pink';
	modalBox.style.opacity = '0.8';
	modalBox.style.display = 'flex';
	modalBox.style.flexDirection = 'column';
	modalBox.style.justifyContent = 'center';
	modalBox.style.alignContent = 'center';
	

	title.innerText = foodInfo.korean;
	

	closeButton.style.position = 'relative';
	closeButton.style.width = '40%';
	closeButton.style.height = '20%';
	closeButton.innerHTML = '닫기';
	closeButton.addEventListener('click', function(event) {
		modalOpen = false;
		modalBox.remove();
	});


	findButton.style.position = 'relative';
	findButton.style.width = '40%';
	findButton.style.height = '20%';
	findButton.innerHTML = '찾기';
	findButton.addEventListener('click', function(event) {
		fetch('http://10.18.241.128:3000/find', {
			method: 'POST'
		})
		.then(data => {
			console.log(data.body);
		});
	});

	modalBox.appendChild(title);
	modalBox.appendChild(closeButton);
	modalBox.appendChild(findButton);
	root.appendChild(modalBox);
}