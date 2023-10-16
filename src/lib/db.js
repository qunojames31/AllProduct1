const {user_name,password} = process.env 
export const connectionSrt="mongodb+srv://"+user_name+":"+password+"@cluster0.tkz8orv.mongodb.net/productDB?retryWrites=true&w=majority"