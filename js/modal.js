const backedAmount = document.querySelector('.backed');
const modalContainer = document.querySelector('.modal-container');
const rewardRadioButtons = document.querySelectorAll('.radio');
const pledgeInputs = document.querySelectorAll('input[type="number"]');
const continueBtns = document.querySelectorAll('.continue-btn');
const selectRewardBtns = document.querySelectorAll('button[data-id="reward-btn"]');

//Updates proggress bar
const updatePorgressBar = () => {
	const totalAmount = document.querySelector('.total-backed');
	const progressFilled = document.querySelector('.progress-bar__filled');
	const percent = (parseInt(backedAmount.textContent) / parseInt(totalAmount.textContent)) * 100;
	progressFilled.style.width = `${percent}%`;
};

//Shows modal
const showModal = () => {
	modalContainer.classList.add('container-active');
};

//Hides modal
const hideModal = (e) => {
	if (e.target === modalContainer) {
		modalContainer.classList.remove('container-active');
	} else if (e.target === document.querySelector('.modal__close')) {
		e.stopPropagation();
		modalContainer.classList.remove('container-active');
	}
};

//Checks value of radio input
const onRewardRadioClick = (e) => {
	const rewardIndex = parseInt(e.target.value);
	selectReward(rewardIndex);
};

//Switches between reward options in modal
const selectReward = (rewardIndex) => {
	const modalRewards = document.querySelectorAll('.modal__reward');
	const enterPledges = document.querySelectorAll('.modal__enter-pledge');
	for (let i = 0; i < modalRewards.length; i++) {
		const reward = modalRewards[i];
		const pledgeInput = pledgeInputs[i];
		const enterPledge = enterPledges[i];

		if (i === rewardIndex) {
			rewardRadioButtons[i].checked = true;
			reward.classList.add('modal__reward-active');
			pledgeInput.focus();
			enterPledge.classList.add('modal__enter-pledge-active');
		} else {
			enterPledge.classList.remove('modal__enter-pledge-active');
			reward.classList.remove('modal__reward-active');
		}
	}
};

//Opens modal with right option marked when 'Select Reward' btn clicked
const handleSelectBtn = (e) => {
	for (i = 0; i < selectRewardBtns.length; i++) {
		if (e.target == selectRewardBtns[i]) {
			showModal();
			selectReward(i + 1);
		}
	}
};

//handles continue btn in modal
const handleContinueBtn = (e) => {
	for (let i = 0; i < continueBtns.length; i++) {
		if (e.target == continueBtns[i]) {
			backedAmountIncrease(pledgeInputs[i].value);
			handleConfirmModal();
			updatePorgressBar();
			rewardsAmountDecrease(i);
		}
	}
};

//Changes amount of total backers and backed amount
const backedAmountIncrease = (value) => {
	const totalBackers = document.querySelector('.total-backers');
	modalContainer.classList.remove('container-active');

	let backed = Number(value) + parseInt(backedAmount.textContent.replace(/,/g, ''));

	backedAmount.textContent = backed.toString().slice(0, -3) + ',' + backed.toString().slice(-3);

	let backers = parseInt(totalBackers.textContent.replace(/,/g, '')) + 1;

	totalBackers.textContent = backers.toString().slice(0, -3) + ',' + backers.toString().slice(-3);
};

//Changes amount of rewards left
const rewardsAmountDecrease = (rewardIndex) => {
	const rewardsLeft = document.querySelectorAll('.reward-number');
	rewardsLeft[rewardIndex - 1].textContent--;
	rewardsLeft[rewardIndex + 2].textContent--;
};

//Handles cofirm modal
const handleConfirmModal = () => {
	const confirmModal = document.querySelector('.confirm-container');
	confirmModal.classList.toggle('confirm-container-active');
};

// --------Listeners---------
document.querySelector('.main-btn').addEventListener('click', showModal);
selectRewardBtns.forEach((btn) => btn.addEventListener('click', handleSelectBtn));
modalContainer.addEventListener('click', hideModal);

rewardRadioButtons.forEach((radio) => {
	radio.addEventListener('click', onRewardRadioClick);
});

continueBtns.forEach((btn) => btn.addEventListener('click', handleContinueBtn));

document.querySelector('.confirm-btn').addEventListener('click', handleConfirmModal);
