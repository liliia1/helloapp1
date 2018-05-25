$.getJSON('clients.json', function (clients)){
	var output = '<ul class= "searchresults">';
	$.each(clients, function(key, val){
		output += '<li>';
		output += '<h2>'+val.general +'</h2>';
		output += '<img scr="images/' + val.general +'_tn.jpg" alt="' + val.job + '" />';
		output += '<p>'+ val.contact + '</p>';
		output += '<p>'+ val.address + '</p>';
		output += '</li>';
		
	});
	output += '</ul>';
	$('#update').html(output);
}); // get JSON