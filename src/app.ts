const from = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event){
    event.preventDefault();
    const enteredAddress = addressInput.ariaValueMax;

    // send this to Google's API!
}

from?.addEventListener('submit', searchAddressHandler);

