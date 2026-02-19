export const users = (req, res) => {
    const { name } = req.body;

    if (name === "react") {
        res.status(201).send("Yes I am React")
    } else {
        res.status(400).send("No I am not react")
    }
}