import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/clients', {
  useNewUrlParser: true
});

// schema

const clientsSchema = new mongoose.Schema({
  name: String,
  surname: String,
  enterprise: String,
  emails: Array,
  age: Number,
  type: String,
  orders: Array
})

const Clients = mongoose.model('clients', clientsSchema);

export { Clients };
