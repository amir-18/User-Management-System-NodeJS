// @ts-check
import mongoose  from "mongoose";
mongoose.connect(`mongodb://localhost:27017/User-Management`);
const UserSchema = mongoose.Schema({
    FirstName : String,
    LastName : String,
    image : String
});
const User = mongoose.model("User", UserSchema);
export default User;

