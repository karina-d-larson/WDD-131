const form = document.querySelector('#checkoutForm');
const errors = document.querySelector('.errors');

const cardNumber = document.querySelector('#cardNumber');
const month = document.querySelector('#month');
const year = document.querySelector('#year');

function isCardNumberValid(num) {
  return num === '1234123412341234';
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  errors.textContent = '';

  let message = '';

  const rawNumber = cardNumber.value.replace(/\s+/g, '');

  if (!/^\d{16}$/.test(rawNumber)) {
    message += 'Card number must be 16 digits\n';
  } else if (!isCardNumberValid(rawNumber)) {
    message += 'Card number is not valid\n';
  }

  const expMonth = Number(month.value);
  const expYear = Number(year.value);
  const now = new Date();

  if (expMonth < 1 || expMonth > 12) {
    message += 'Expiration month must be between 01 and 12\n';
  }

  const fullYear = 2000 + expYear;
  if (
    fullYear < now.getFullYear() ||
    (fullYear === now.getFullYear() && expMonth <= now.getMonth() + 1)
  ) {
    message += 'Card is expired\n';
  }

  if (message) {
    errors.textContent = message;
    return;
  }

  form.innerHTML = '<h2 style="text-align:center">Payment Successful ✅</h2>';
});