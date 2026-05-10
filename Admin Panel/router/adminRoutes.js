const express = require('express');

const route = express.Router();

const AdminCtl = require('../controllers/adminController');

const Admin = require('../models/adminModel');

const passport = require('passport');

route.get("/",AdminCtl.loginpage);

route.post("/checkLogin", passport.authenticate('local', { failureRedirect: '/' }), AdminCtl.checkLogin);

route.get("/logout",passport.setAuthenticated,AdminCtl.logout);

route.get("/dashboard",passport.setAuthenticated,AdminCtl.dashboard);

route.get("/add-admin",passport.setAuthenticated,AdminCtl.addAdmin);

route.get("/view-admin",passport.setAuthenticated,AdminCtl.viewAdmin);

route.get("/deleteAdmin/:id", passport.setAuthenticated, AdminCtl.deleteAdmin);

route.get("/update-admin/:id", passport.setAuthenticated, AdminCtl.updateAdmin);

route.post("/insertAdminData",Admin.uploadAdminImage,AdminCtl.insertAdminData);

route.post("/editAdminData/:id", passport.setAuthenticated, Admin.uploadAdminImage, AdminCtl.editAdminData);


module.exports = route;