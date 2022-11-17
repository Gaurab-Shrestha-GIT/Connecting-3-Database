const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({
  credential: cert({
    type: "service_account",
    project_id: "portprotest-cc194",
    private_key_id: "13a28a66ef849868dcedd04d0c8c4d6964a3c6d3",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDS6gya5X0REJWa\nebzqngoSnmkEsL7iwkWAf2bBr4u8WsMRKDZglDICeNAQTJoKJYJVer/oL92yqV1A\nInmKi/Z6U0nyJkUoNJCWmXb/ZCCkFA31rECG9Foix9KhO2yYk4gzJE/UshEZvO5t\n5Pif+gMc1sLa7IBuIMEWLYyWG+5rqI4LW41Rq8xL19WOBWW5P8mBZPvuTvkF9p2R\n/YSGg0BaSAdPhMHEe5O6m9CZDUMoS3oog8r9nruK5itXnXC3lCEZiiLw5/cnA28T\nHykL8ggkHNrT1ns2oN9oUhyDk7yIHTUm3CcHTarPR65oiMfpET+ATs8afSwz/W11\nyEIGzKATAgMBAAECggEAB4zkufV89z2JFJ2cKZpuhoviUI5WVwjm69N5E68Q/oqf\n6buoBARqHlfeZnxOpEcDQKd1D/C0D5oPbN4A2r/bRcQ43gKk8EGiXMcjpmn9+14o\na/9hKVASt8Ejvi0zo3hslhyMHNcGKep9bwnqXfCghJDGuTIMOSwnq5vpmpoSCpmj\nxtDATYTofhvKfj+IgW8sUEyhtfoauIFkNMtkO+S9YvFnBLXJmM3M1TgwPBgzIETq\nEYnVQn0DUl5sHyvsSq3EeSHDJHVpGlxt1vqjumdEuCz3T491ePwiGtm/eRCgHC6d\n1IM2E0F34zYV7txevySJfg8K6AbQwY3Z4D5dQetp8QKBgQD5EwWmP6HTfMIhiIor\njLy5bAqGZouq3L2SnsXg119J4NKhSdU3ugR3bNJFB9QBIH8FT27ELzDrZ/WMmURi\nmn9E2MrTuNmzSylEq4DHGIMXvdWKtaYZX74U/kOhUJN2rbjOZ+RGqhKHOXfqXMIt\nbW9vibPXqd9ya86J3hGuULp++wKBgQDYx2THMOVeNoI1bfnXdpCGGJ7l/+iSRKjV\ngtWpXQ0aQ1LGv3v0QYzXFdgtidQ9gWkyM3QjRmdDM2uT1v3CPG2LJ17Ce5ZPCbIo\nk/b7Ik4wzX0jqX7esXpFc4Rs5q5tpzjWk5iNqdH1hj9HjLTibpFW08NRvqDp71OB\nXXeWEZU3yQKBgQCD0SlgPrTqNFCZZqWZPrZye1dmocaw+nnpqtWWlOT9OFrAuU56\nW5wZiCIQHoB4yDXxHYTFlyQQscgmTMcAWDuauBE/08iDNvf0O7+/np1iZzkoW9I4\nA4+ZlKc+LGKeoHn54snRDBkaL7Pi+IxbdltPcFUZgfGboKqCFGDPHDJXGQKBgHkT\nhRosGS/xyfAFqNHLCxWaksVrlX58ksAN/0BFFJhimc0gDh9yrTNEpCVrIfvoV9UO\nIAPDwtEp2yALqFfgYF6kcqy1UlJ62+MGIaBKnNltLEPK222OOvineINKpIniKEDQ\n1xfojbhQbu+Li0wc7VhNln4FtuJyJXXPuoc68tjhAoGBAKNegFCl8/hZCH24DRp0\npiQZKLRI+R7Q2QA6jGT/xHloKTPbL16OXUye5LPxo45xIUDP2ZVbOMHLj8hqdJoa\nC33uyScIWQlkKH3NarHbTrD4SyRfUGxygmFovQnchblWnIeNGMJeyxH22RqTdZc/\nd7LfY7kNrPZ8qaLsoqenxaLq\n-----END PRIVATE KEY-----\n",
    client_email:
      "firebase-adminsdk-ipanx@portprotest-cc194.iam.gserviceaccount.com",
    client_id: "113711935937600299552",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ipanx%40portprotest-cc194.iam.gserviceaccount.com",
  }),
});
const firebaseDB = getFirestore();
if (firebaseDB) {
  console.log("Firebase DB is Connected");
} else {
  console.log(error);
}

module.exports = firebaseDB;
