const router = require('express').Router();

const { getTickets, createTicket } = require('../controllers/ticketController');
const { protect } = require('../middleware/auth');

router.route('/').get(protect, getTickets).post(protect, createTicket);

module.exports = router;