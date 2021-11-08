ls();
pwd();
// const data = cat('/docker-entrypoint-initdb.d/sample_airbnb.json');
load('/docker-entrypoint-initdb.d/k8s.js');
const database = 'k8s';
const collection = 'registrations';

db.createUser({
  user: 'k8s',
  pwd: 'k8spassword',
  roles: [
    {
      role: 'readWrite',
      db: 'k8s',
    },
  ],
});

db = new Mongo().getDB(database);

db.createCollection(collection, { capped: false });

db.registrations.insert(data);