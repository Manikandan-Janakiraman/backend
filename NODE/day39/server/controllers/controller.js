import newmodel from "../models/newmodel.js";

export const addition = async (req, res) => {

    const { name, skill, experience } = req.body
    try {
        const adddata = await newmodel.create(name)
        res.status(201).json({ msg: "successfully Done", adddata })

        res.json({
            success: true,
            message: "Object received successfully",
            data: req.body
        });
    } catch (error) {

        console.log("Somethimng error", error);

    }
}