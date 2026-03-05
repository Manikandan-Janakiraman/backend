import User from '../models/User.js'

export const imageAdding = async (req, res) => {

  try {

    const { name } = req.body;

    const newUser = new User({
      name: name,
      image: req.file.filename
    });

    await newUser.save();

    res.json({
      msg: "Data Added Successfully"
    });

  } catch (error) {

    res.status(500).json({
      msg: "Error Uploading"
    });

  }

};


export const getImages = async (req, res) => {

  try {

    const data = await User.find();

    res.json({
      datasend: data
    });

  } catch (error) {

    res.status(500).json({
      msg: "Error Fetching Data"
    });

  }

};