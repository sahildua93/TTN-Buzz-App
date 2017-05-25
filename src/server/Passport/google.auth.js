const OauthConstants = require('../Constants/constant');
let passport = require('passport');
let googleStrategy = require('passport-google-oauth2').Strategy;
let User = require('../API/User/user.model');
let service = require('../API/User/user.service');

exports.googleAuth = () => {
    passport.use(new googleStrategy({
        clientID: OauthConstants.CLIENT_ID,
        clientSecret: OauthConstants.CLIENT_SECRET,
        callbackURL: OauthConstants.CALLBACK_URL,
        passReqToCallback: true,
        },
        (request, accessToken, refreshToken, profile, done) => {
            if(profile._json.domain==='tothenew.com'){
                console.log("inside profile ---------------------------");
                process.nextTick(() => {
                    User.findOne({'email_id': profile.email}, (err, user) => {
                        if(err){
                            return done(err);
                        }
                        if(user){
                            console.log('user present ----------------------');
                            return done(null, profile);
                        }
                        else {
                            service.createUser(profile,(err,newUser)=>{
                                if(err){
                                    return done(err);
                                }
                                else {
                                    done(null, newUser);
                                }
                            })
                        }
                    })
                })
            }
            else {
                console.log("signIn from tothenew ID");
                return done(null);
            }
        }
    ))
};

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findOne({google_id:id}, (err, user) => {
        done(null, user);
    })
});