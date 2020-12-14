import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  id: { type: Number, unique: true, required: true},
  title: {type: String, unique: true, required: true}	
});

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
  favourites : [MovieSchema]
});

const GenreSchema = new Schema({
  name: { type: String, unique: true, required: true},

});

UserSchema.statics.findByUserName = function (username) {
  return this.findOne({ username: username });
};

UserSchema.methods.comparePassword = function (candidatePassword) {
  const isMatch = this.password === candidatePassword;
  if (!isMatch) {
    throw new Error('Password mismatch');
  }
  return this;
};

export default mongoose.model('User', UserSchema, 'Genre', GenreSchema);
