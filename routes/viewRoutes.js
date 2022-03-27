const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();
router.get('/stored', viewsController.stored);
router.get('/', bookingController.createBookingCheckout, authController.isLoggedIn, viewsController.getOverview);
router.get('/tour/:slug', authController.isLoggedIn, viewsController.getTour);
router.get('/signin', authController.isLoggedIn, viewsController.getSigIn);
router.get('/signup', viewsController.getSignup);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/my-tours', bookingController.createBookingCheckout, authController.protect, viewsController.getMyTours);
router.post(
    '/submit-user-data',
    authController.protect,
    viewsController.updateUserData
);
// router.patch('/submit-user-data', authController.protect, viewsController.updateUserData)
module.exports = router;