const OauthConstants = require('../Constants/constant')
let passport = require('passport');
let googleStrategy = require('passport-google-oauth2').Strategy;
let User = require('../API/User/user.model')
let service = require('../API/User/user.service')

exports.googleAuth = () => {
    passport.use(new googleStrategy({
        clientID: OauthConstants.CLIENT_ID,
        clientSecret: OauthConstants.CLIENT_SECRET,
        callbackURL: OauthConstants.CALLBACK_URL,
        passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            if(profile._json.domain==='tothenew.com'){
                console.log("inside profile ---------------------------")
                process.nextTick(function () {
                    User.findOne({'email_id': profile.email}, function (err, user) {
                        if(err){
                            return done(err)
                        }
                        if(user){
                           return done(null, profile)
                        }
                        else {
                            let newUser = new User({
                                username : profile.displayName,
                                email_id : profile.emails[0].value,
                                image_url : profile.photos[0].value,
                            });
                            service.createUser(newUser)
                            done(null, newUser)

                        }
                    })
                })
            }
            else
                return done(null);


        }
    ))
}

passport.serializeUser( function (user, done) {
    done(null, user);
})

passport.deserializeUser( function (id, done) {
    done(null, id);
})