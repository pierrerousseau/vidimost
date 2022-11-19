const fs = require('fs');
const secrets_path = "/secrets/.secrets.json";

var secrets,
    db,
    user;

console.log("Adding users ...");

db      = db.getSiblingDB("admin");
secrets = JSON.parse(fs.readFileSync(secrets_path));
for (var i = 0; i < secrets.users.length; i++) {
  user  = secrets.users[i];
  //db = db.getSiblingDB(user.roles[0].db);
  db.createUser({user: user.login,
                 pwd: user.password,
                 roles: user.roles});
}

console.log("Adding users ... done.");