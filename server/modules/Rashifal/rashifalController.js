const HttpStatus = require('http-status');
const otherHelper = require('../../helper/others.helper');
const RashifalSch = require('./rashifal');
const rashifalController = {};
const internal = {};

rashifalController.GetRashifal = async (req, res, next) => {
  const rashifal = await RashifalSch.find();
  return otherHelper.sendResponse(res, HttpStatus.OK, true, rashifal, null, 'Rashifal Get Success !!', null);
};
rashifalController.SaveRashifal = async (req, res, next) => {
  try {
    const rashifal = req.body;
    if (rashifal._id) {
      const update = await RashifalSch.findByIdAndUpdate(rashifal._id, { $set: rashifal });
      return otherHelper.sendResponse(res, HttpStatus.OK, true, update, null, 'Rashifal Saved Success !!', null);
    } else {
      const newCat = new RashifalSch(rashifal);
      newCat.slug = newCat.Rashifal;
      const rashifalSave = await newCat.save();
      return otherHelper.sendResponse(res, HttpStatus.OK, true, rashifalSave, null, 'Rashifal Saved Success !!', null);
    }
  } catch (err) {
    next(err);
  }
};
rashifalController.GetRashifalDetail = async (req, res, next) => {
  const slug = req.params.slug;
  const rashifal = await RashifalSch.findOne({ slug: slug });
  return otherHelper.sendResponse(res, HttpStatus.OK, true, rashifal, null, 'Rashifal Get Success !!', null);
};

module.exports = rashifalController;