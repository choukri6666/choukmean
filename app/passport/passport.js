
var FacebookStrategy = require('passport-facebook').Strategy;
var User             = require('../models/user');

module.exports = function(app, passport){

    passport.use(new FacebookStrategy({
        clientID: '273766576580088',
        clientSecret: '0b82e9324665159e3cbf90ff02a51d1e',
        callbackURL: '/auth/facebook/callback',
        proxy: true,
        profileFields: ['id','displayName','email']

    },
    function(accessToken, refreshToken, profile, done){
        // User.findOrCreate(,function(err, user){
        //     if(err) {return done(err);}
        //     done(null, user);
        // });
        done(nulll, profile);


    }
        ));


    return passport;
}