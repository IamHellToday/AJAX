var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

// Search click event
$('#search').click(searchCountries);

// Enter keypress event
$('#country-name').bind('enterKey', function(e){
	searchCountries();
});

$('#country-name').keyup(function(e){
	if (e.keyCode === 13)
	{
		$(this).trigger('enterKey');
	}
});

function searchCountries() {
	var countryName = $('#country-name').val();

	if (!countryName.length) {
		countryName = 'Poland';
	};

	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});

}

function showCountriesList(resp) {
	countriesList.empty();

	resp.forEach(function(item) {
		$('<li>').text('Country name: ' + item.name).appendTo(countriesList);
		$('<li>').text('Country native name: ' + item.nativeName).appendTo(countriesList);
		$('<li>').text('Capital name: ' + item.capital).appendTo(countriesList);
		$('<li>').text('Currencies: ' + item.currencies).appendTo(countriesList);
	});
}
