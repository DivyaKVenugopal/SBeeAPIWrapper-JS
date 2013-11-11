
var SBeeAPI = (function(){

	var companyName;
	var apiKey;
	var baseURL = "http://localhost:82/testdrive-supportbee-com-proxy/"; //points to nginx proxy running locally on port 82

	var sendRequest = function(reqParams, options) {
		
		$.ajax({
			type: reqParams.method,
			url : baseURL + reqParams.resource,
			dataType: reqParams.dataType,
			data: reqParams.data,
			async: reqParams.async,
			beforeSend: function(jqXhr) {
			
					jqXhr.setRequestHeader('Content-Type', 'application/json');
					jqXhr.setRequestHeader('Accept', 'application/json');
			},
			success: options.success,
			error: function() {
				console.log('error occured');
				console.log(err);
			}
		});
	};

	return {

		init: function (company_name, api_key) {

			companyName = company_name;
			apiKey = api_key;
		},

		fetchTickets: function(apiParams, ticketDetails) {

			var reqParams = {
				method: 'GET',
				resource: 'tickets.json',
				dataType: 'json',
				data: { auth_token: apiKey },
				async: false,
			};

			var options = {
			
				success: function(data) {

					console.log('Successfully fetched tickets');
					this.tickets = data;
				}
			};

			options.success = options.success.bind(ticketDetails);
			sendRequest(reqParams, options);
		},

		fetchReplies: function(tickets) {

			var reqParams = {
				method: 'GET',
				dataType: 'json',
				data: { auth_token: apiKey },
				async: false,
			};

			
			var numOfTickets = tickets.length;
			var ticket ;
			for (var i = 0; i< numOfTickets; i++) {
				ticket = tickets[i];
				reqParams.resource = 'tickets/' + ticket.id + '/replies.json';
				var options = {
			
					success: function(data) {

						console.log('Successfully fetched replies');
						this.replies = data;
					}.bind(tickets[i])
				};

				sendRequest(reqParams, options);
			}
		}
	}//end return

})();



