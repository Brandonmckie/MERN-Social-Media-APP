import User from "../models/User.js";
// Get user by Id
export const getUser = async (req,res) =>{
    try{
    const{id}=req.params;
    const user=await User.findById(id);
    res.status(200).json(user);

    } catch(err){
        res.status(404).json({message: error.message});
    }
}

// Get friend by Id
 export const getUserFriends = async(req,res) =>{
    try{
    const {id} = req.params;
    const user = await User.findById(id);
// Gets friend by id
    const friends = await Promise.all(
        user.friends.map((id) => User.findById(id)
    ));
// Formats friend info and sends it to front end 
    const formattedFriends = friends.map(
        ({_id, firstName, lastName, occupation, location, picturePath}) =>{
            return{_id, firstName, lastName, occupation, location, picturePath}
        });
        res.status(200).json(formattedFriends);
     } catch(err){
        res.status(404).json({message: err.message})
     }
    };

    /// Update add and remove friends
    export const addRemoveFriend = async(req,res) =>{
        try{
         const {id,friendId}= req.params;
         const user = await User.findById(id);
         const friend = await User.findById(friendId);

         if(user.friends.includes(friendId)){
            user.friends = user.friends.filter((id) =>id !== friendId);
            friend.friends = friend.friends.filter((id)=>id !==id);
         }else{
            user.friends.push(friendId);
            friend.friends.push(id);
         }
         await user.save();
         await friend.save();

         const friends = await Promise.all(
            user.friends.map((id) => User.findById(id)
        ));
        const formattedFriends = friends.map(
            ({_id, firstName, lastName, occupation, location, picturePath}) =>{
                return{_id, firstName, lastName, occupation, location, picturePath}
            });

          res.status(200).json(formattedFriends);
        }catch{err}{
          res.status(404).json({message: err.message}); 
        }
    }
    
 
