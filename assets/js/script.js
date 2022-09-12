$('#frmComment').submit(function(e){
    e.preventDefault();
	
	var u_name = $('#name').val();
	var u_email = $('#email').val();
	var u_message = $('#message').val();
	
	//console.log(u_name, u_email, u_comment);

	$.ajax({
		url: 'http://localhost/comment/insert.php',
		method: 'POST',
		data: {name: u_name, email: u_email, message: u_message},
		dataType: 'json'
	}).done(function(result){
		$('#name').val('');
		$('#email').val('');
		$('#message').val('');
		getComments();
		console.log(result);
	});
 });

function getComments(){
	$.ajax({
		url: 'http://localhost/comment/select.php',
		method: 'GET',
		dataType: 'json'
	}).done(function(result){
		console.log(result);

		for (var i = 0; i< result.length; i++){
			     $('.box_comments').prepend('<h4>' + result[i].name + '</h4><p>' + result[i].comment + '</p>');

		}
	});
}

getComments();