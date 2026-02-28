export const auth = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ msg: "Email & Password Required" });
    }
    const payload = { email };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h", });

    return res.status(200).json({
        message: "Login Successful",
        token: token,
    })

}