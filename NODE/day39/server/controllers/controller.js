// import newmodel from "../models/newmodel.js";

// export const addition = async (req, res) => {
//     try {
//         const { name, skill, experience } = req.body;



//         const adddata = await newmodel.create({
//             "name": "Mani",
//             "skill": "Developer",
//             "experience": "6"
//         });

//         console.log(adddata);
        
//         res.status(201).json({
//             success: true,
//             message: "Successfully Added",
//             data: adddata
//         });

//     } catch (error) {
//         console.log("Something went wrong:", error);
//         res.status(500).json({
//             success: false,
//             message: "Server Error",
//         });
//     }
// };


import newmodel from "../models/newmodel.js";

export const addition = async (req, res) => {
  try {
    const { name, skill, experience } = req.body;

    const adddata = await newmodel.create({
      name,
      skill,
      experience,
    });

    console.log("Received from frontend:", req.body);

    res.status(201).json({
      success: true,
      message: "Data stored successfully",
      data: adddata,
    });

  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ success: false });
  }
};