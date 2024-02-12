const from = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'AIzaSyD1ov2el6bz3gUI8qebqbndaTE9itkTnV4';

function searchAddressHandler(event: Event){
    event.preventDefault();
    const enteredAddress = addressInput.ariaValueMax;

 
}

from?.addEventListener('submit', searchAddressHandler);




// AIzaSyD1ov2el6bz3gUI8qebqbndaTE9itkTnV4
//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=
