const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Admin = require('../models/adminModel');

passport.use('local', new LocalStrategy({
    usernameField : 'email'
}, async function(email, password, done){

    let adminRecord = await Admin.findOne({
        email : email
    });

    if(adminRecord){
        if(password == adminRecord.password){
            console.log("Login successfull");
            return done(null, adminRecord);
        }
        else{
            console.log("Wrong Password");
            return done(null, false);
        }
    }
    else{
        console.log("Email Not Found");
        return done(null, false);
    }

}));

passport.serializeUser(function(user, done){
    return done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const admin = await Admin.findById(id);
        done(null, admin);
    } catch (err) {
        done(err);
    }
});

passport.setAuthenticated = function(req, res, next){

    if(req.isAuthenticated()){
        return next();
    }

    return res.redirect('/');
}

passport.setAuthenticatedUser = function(req, res, next){

    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }

    next();
}

module.exports = passport;