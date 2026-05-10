const Admin = require('../models/adminModel');
const path = require('path');
const fs = require('fs').promises;

module.exports.loginpage = (req, res) => {
    try{

        if(req.isAuthenticated()){
            return res.redirect('/dashboard');
        }

        return res.render('login');

    }catch(err){
        console.log(err);
    }
};

module.exports.checkLogin = async (req, res) => {
    try {

        return res.redirect('/dashboard');

    } catch (err) {

        console.log(err);

        return res.render('login');
    }   
};

module.exports.logout = async (req,res) => {
    try{
        req.session.destroy(function(err) {
            if(err){
                console.log(err);
                return false;
            }
            return res.redirect('/');
        })          
    }catch(err){
        console.log(err);
        return res.redirect('/');
    }
}

module.exports.dashboard = async (req, res) => {
    try {
        const adminData = req.user;
        return res.render('dashboard', { adminData });
    } catch (err) {
        console.error('dashboard error:', err);
        return res.redirect('/');
    }
};

module.exports.addAdmin = async (req, res) => {
    try {
        const adminData = req.user;
        return res.render('add-admin', { adminData });
    } catch (err) {
        console.error('addAdmin error:', err);
        return res.redirect('/');
    }
};

module.exports.insertAdminData = async (req, res) => {
    try{
        req.body.name = req.body.fname + " " + req.body.lname;
        req.body.avtar = '';
        if(req.file){
            req.body.avtar = req.file.filename;
        }
        let adminRecord = await Admin.create(req.body);

        if(adminRecord){
            console.log("Admin Record Inserted");
            return res.redirect('/add-admin');
        }
        else{
            console.log("Error in Inserting Admin Record");
            return res.redirect('/add-admin');
        }
    }catch(err){
        console.log(err);
    }
}

module.exports.viewAdmin = async (req, res) => {
    try {
        const adminData = await Admin.find({});
        return res.render('view-admin', { adminData });
    } catch (err) {
        console.error('viewAdmin error:', err);
        return res.render('view-admin', { adminData: [] });
    }
};

module.exports.deleteAdmin = async (req, res) => {
    try {
        const adminId = req.params.id;
        const adminData = await Admin.findById(adminId);

        if (!adminData) {
            console.log('Admin not found:', adminId);
            return res.redirect('/view-admin');
        }

        await Admin.findByIdAndDelete(adminId);
        console.log('Admin deleted:', adminId);
        return res.redirect('/view-admin');

    } catch (err) {
        console.error('deleteAdmin error:', err);
        return res.redirect('/view-admin');
    }
};

module.exports.updateAdmin = async (req, res) => {
    try {
        const adminRecord = await Admin.findById(req.params.id);
        if (!adminRecord) return res.redirect('/view-admin');

        const adminData = req.user;
        return res.render('edit-admin', { adminData, adminRecord });
    } catch (err) {
        console.error('updateAdmin error:', err);
        return res.redirect('/view-admin');
    }
};

module.exports.editAdminData = async (req, res) => {
    try {
        const adminId = req.params.id;
        const { name, email, gender, password } = req.body;

        const updateData = { name, email, gender };

        if (req.file) {
            updateData.avtar = req.file.filename;
        }
        if (password && password.trim() !== '') {
            updateData.password = password;
        }

        await Admin.findByIdAndUpdate(adminId, updateData, { new: true });
        console.log('Admin updated:', adminId);
        return res.redirect('/view-admin');

    } catch (err) {
        console.error('editAdminData error:', err);
        return res.redirect('/view-admin');
    }
};