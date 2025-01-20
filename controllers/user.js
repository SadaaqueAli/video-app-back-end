import User from "../modles/User.js";
import createError from "../error.js";

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        const updatedUser = await User.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedUser);
      } catch (err) {
        next(err);
      }
    } else {
      return next(createError(403, "You can update only your account!"));
    }
  };
  
  export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id) {
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted.");
      } catch (err) {
        next(err);
      }
    } else {
      return next(createError(403, "You can delete only your account!"));
    }
  };
  
  export const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  };
  
  export const subscribe = async (req, res, next) => {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $push: { subscribedUsers: req.params.id },
      });
      await User.findByIdAndUpdate(req.params.id, {
        $inc: { subscribers: 1 },
      });
      res.status(200).json("Subscription successfull.")
    } catch (err) {
      next(err);
    }
  };
  
//unsubscribe user
export const unsubscribe = async (req, res, next) => {
    try {
        await User.findById(req.user.id,{
            $pull: {subscribedUsers: req.params.id}
        });
        await User.findByIdAndUpdate(req.params.id,{
            $inc: {subscribers: -1}
        });
        res.status(200).json("Unsubscription has been successful")
    } catch (error) {
        
    }
};
//like a video
export const like = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};
//dislike a video
export const dislike = async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
};

export const getByTag = async (req, res, next) => {
  const tags = req.query.tags.split(",");
  console.log(tags)
  try {
    const videos = await Video.find().sort({ views: -1 });
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};

export const search = async (req, res, next) => {
  const query = req.query.q;
  try {
    const videos = await Video.find({
      title: { $regex: query, $options: "i" },
    }).limit(40);
    res.status(200).json(videos);
  } catch (err) {
    next(err);
  }
};