/*

############## API ##############

codepen.api.signup(user_object)
	description: to sign up a new user
	parameters: user object, which contains properties: name, email, username, password
	returns: response object

codepen.api.login(user_object)
	description: to login an existing user
	parameters: user object, which contains properties: username, password
	returns: response object


Reponse Objects:

{
	success: true/false,
	error: (string)
}


##users already signed up (can log in)
	('suzy', 'I@msoawesome')
	('conan', 'gingertastic')
	('jerry', '@#!$%@')

*/


$('document').ready(function() {

	//put code here
	$('.signup-form').hide();

	codepen.objects.User = {
			name : null,
			email : null,
			username : null,
			password : null,
			isLoggedIn : false,
		};
	console.log(codepen.objects.User);

		var NewUser = Object.create(codepen.objects.User, {
		firstname: {
			writable: true, 
			enumerable: true,
			value: ''
		},
		lastname: {
			writable: true, 
			enumerable: true,
			value: ''
		}
	});

	 
	//  var User = new codepen.objects.User();

	// codepen.object.NewUser = function(firstName, LastName){
	// 	var newObj = Object.create(codepen.objects.User);
	// 	newObj.name = firstName;
	// 	newObj.last = lastName;
	// 	return newObj;
	// }


	$('.login-form-btn').on('click', function(){
		$(".login-form").show();
		$('.signup-form').hide();
	});

	$('.signup-form-btn').on('click', function(){
		$('.login-form').hide();
		$('.signup-form').show();
	});


	$(".btn-login").on('click', function(){
		var user = Object.create(NewUser);
		user.username = $('#login-username-field').val();
		user.password = $('#login-password-field').val();
		
		var response = codepen.api.login(user);
		console.log(response);
		
		if(response.success === true) {
			$('.login-form .form-feedback').html("Your'e logged in!");
			user.is_logged_in = true;
		}
		else {
			$('.form-feedback').prepend(response.error);
		}
	});

	$('.btn-signup').on('click', function(){
		var user = Object.create(NewUser);
		user.name = $('#signup-name-field').val();
		user.email = $('#signup-email-field').val();
		user.username = $('#signup-username-field').val();
		user.password = $('#signup-password-field').val();
		var response = codepen.api.signup(user);
		console.log(response);
		if(response.success === true) {
			$('.signup-form .form-feedback').html("Your'e signed up! Now go login.");
		}
		else {
			$('.form-feedback').prepend(response.error);
		}
		
		
		
	});

});
