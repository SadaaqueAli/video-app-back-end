import User from "../modles/User.js";
import createError from "../error.js";

// Exporting the test function as a named export
export const update = async (req, res,next) => {
    console.log("Request Params:", req.params);
    console.log("Authenticated User:", req.user);

    if(req.params.id === req.user.id){
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id,{
               $set:req.body 
            },
            {new:true}
        )
            res.status(200).json(updateUser)
            console.log(updateUser);
        } catch (error) {
            next(createError(500, "User update mein error hai"));
        }

    }else{
        return next(createError(403, "You can update only your account!"));
    }
};
export const deleteUser = (req, res,next) => {
};
export const getUser = (req, res,next) => {
};
export const subscribe = (req, res,next) => {
};
export const unsubscribe = (req, res,next) => {
};
export const like = (req, res,next) => {
};
export const dislike = (req, res,next) => {
};

