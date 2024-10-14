(function (window) {
	loadUpsellData();
})(this);

function loadUpsellData() {
	var url = 'https://api.fornpay.com/api/api';

	var urlParams = new URLSearchParams(window.location.search);
	var venda = urlParams.get('fpay');
	var domain = urlParams.get('domain');

	if(typeof domain !== 'undefined' && domain !== null){
		var newDomain = domain;
	}else{
		var newDomain = `https://upsell.quero.click`;
	}

	var upsells = document.querySelectorAll('[data-fornpay]') || [];
	upsells.forEach(upsell => {

		var hash_upsell = upsell.getAttribute('data-fornpay');

		upsell.addEventListener('click', event => {
			event.target.innerHTML = "Aguarde, processando pagamento...";
			event.target.remove();

			window.location.href = `${newDomain}/process-upsell?uh=${hash_upsell}&fpay=${venda}`;

		})
	});

	var downsell = document.querySelectorAll('[data-downsell]') || [];
	downsell.forEach(downsell => {

		var url_downsell = downsell.getAttribute('data-downsell');

		downsell.addEventListener('click', event => {
			event.target.innerHTML = "Aguarde, processando pagamento...";
			event.target.remove();

			window.location.href = `${url_downsell}?fpay=${venda}`;
		})
	});
}
