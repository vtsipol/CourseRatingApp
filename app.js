const nameInput = document.querySelector('#input-name');
const ratingInput = document.querySelector('#input-rating');
const addBtn = document.querySelector('#btn-add');
const ratingList = document.querySelector('#rating-list');

addBtn.addEventListener('click', () => {
    const enteredName = nameInput.value;
    const enteredRating = ratingInput.value;

    if (
        enteredName.trim().length <= 0 ||
        enteredRating < 1 ||
        enteredRating > 5 ||
        enteredRating.trim().length <= 0
    ) {
        const alert = document.createElement('ion-alert');
            alert.header = 'Invalid inputs';
            alert.message = 'Please enter a valid reason and amount!';
            alert.buttons = ['Okay'];
            document.body.appendChild(alert);
            return alert.present();
    }
    const newItem = document.createElement('ion-item');

    newItem.innerHTML = `<strong>${enteredName}:</strong>&nbsp;${enteredRating}/5`;

    ratingList.appendChild(newItem);

    nameInput.value = '';
    ratingInput.value = '';
});