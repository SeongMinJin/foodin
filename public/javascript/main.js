var foodInfo = new Array();
var modalOpen = false;


window.onload = function() {
	fetch('http://192.168.0.3:3000/data/foods.json')
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

	root.addEventListener('beforeunload', (event) => {
		alert('out of focus!');
	});

	setInterval(mainDish, 600);
	// mainDish();
	});
};

var openModal = function(event, foodInfo) {

	var root = document.getElementById('root');
	var curtain = document.createElement('div');
	var modalBox = document.createElement('div');
	var closeButtonBox = document.createElement('div');
	var closeButton = document.createElement('button');
	var closeButtonIcon = document.createElement('img');
	var titleBox = document.createElement('div');
	var title = document.createElement('p');
	var findButtonBox = document.createElement('div');
	var findButton = document.createElement('button');
	var findButtonText = document.createElement('p');

	curtain.classList.add('curtain');
	modalBox.classList.add('modal-box');
	closeButtonBox.classList.add('close-button-box');
	closeButton.classList.add('close-button');
	closeButtonIcon.classList.add('close-button-icon');
	titleBox.classList.add('title-box');
	title.classList.add('title');
	findButtonBox.classList.add('find-button-box');
	findButton.classList.add('find-button');
	findButtonText.classList.add('find-button-text');
	
	
	curtain.addEventListener('click', function() {
		modalOpen = false;
		modalBox.remove();
		curtain.remove();
	});


	closeButton.addEventListener('click', function(event) {
		modalOpen = false;
		curtain.remove();
		modalBox.remove();
	});

	closeButtonIcon.src = '/images/icons/close.png';
	title.innerText = foodInfo.korean;
	
	findButtonText.innerText = '내 주위 식당 찾기';
	// findButton.addEventListener('click', function(event) {
		// 	fetch('http://10.18.241.128:3000/find', {
			// 		method: 'POST'
	// 	})
	// 	.then(data => {
		// 		console.log(data.body);
		// 	});
		// });
		
	closeButtonBox.appendChild(closeButton);
	closeButton.appendChild(closeButtonIcon);
	titleBox.appendChild(title);
	findButtonBox.appendChild(findButton);
	findButton.appendChild(findButtonText);


	modalBox.appendChild(closeButtonBox);
	modalBox.appendChild(titleBox);
	modalBox.appendChild(findButtonBox);
	root.appendChild(modalBox);
	root.appendChild(curtain);
}
