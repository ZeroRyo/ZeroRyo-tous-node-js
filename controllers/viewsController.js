const Tours = require('../models/tourModel');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
// const factory = require('./handlerFactory');

//create method get with overview
exports.getOverview = catchAsync(async (req, res, next) => {
  const tour = await Tours.find();
  res.status(200).render('overview', {
    title: 'All Tours',
    tours: tour
  });
});
//create method get with tour
exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tours.findOne({ slug: req.params.slug }).populate({
    path: 'reviews',
    select: 'review rating user'
  });
  if (!tour) {
    return next(new AppError('No tour found with that name', 404));
  }
  res.status(200).render('tour', {
    title: `${tour.name}`,
    tour
  });
});
//create method get with login
exports.getLoginForm = (req, res) => {
  res
    .status(200)
    .render('login', {
      title: 'User Login'
    });
};
exports.getAccount = (req, res) => {
  res.status(200).render('account', {
    title: 'Your account'
  });
};