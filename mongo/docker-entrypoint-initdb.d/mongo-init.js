print("Adding users ...");
db = db.getSiblingDB("admin");
db.createUser({
  user: "vidimost-dl",
  pwd: "vidimost-dl",
  roles: [{ role: "readWrite", db: "vidimost" }],
});
print("Adding users ... done.");