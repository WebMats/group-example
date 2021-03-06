const admin = require('firebase-admin');
const client = admin.initializeApp();


module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        client.auth().verifyIdToken(token).then(decodedToken => {
            req.user = decodedToken.uid;
            return next();
        }).catch(err => {
            console.error("Error while verifying Firebase ID token:", error);
            res.status(403).send("Unauthorized");
        })
    }
}