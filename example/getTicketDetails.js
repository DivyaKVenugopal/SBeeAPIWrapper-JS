
function getTicketDetails() {

var ticketDetails = { };

SBeeAPI.init('testdrive', 'Lhf46wUVMYWa91wsJL1z');

SBeeAPI.fetchTickets({}, ticketDetails);
console.log('Ticket 1 info: ' + ticketDetails.tickets.tickets[0].id);

SBeeAPI.fetchReplies(ticketDetails.tickets.tickets);
console.log('Ticket 1 replies info: ' + ticketDetails.tickets.tickets[0].replies.replies[0].summary);

console.log(JSON.stringify(ticketDetails));
};
