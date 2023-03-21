
/// Imports controller variables
import express from "express";
import {
    getUser,
    getUserFriends,
    addRemoveFriend,
  
} from "../controllers/users.js";
import{verifyToken} from "../middleware/auth.js"
/// Creates Router 
const router= express.Router();

/// Gets information for user

router.get("/:id",verifyToken,getUser);
router.get("/:id",verifyToken,getUserFriends);

/// Gets information for friends
router.patch("/:id/:friendId",verifyToken,addRemoveFriend);

export default router;