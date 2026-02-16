export const createresponse = (req, res) => {

    const { name } = req.body

    if (name === "React") {
        res.status(200).send("Yes I am React")

    } else {
        res.status(404).send("No I am Not React")
    }
}



export const jsontoken = (req, res) => {

    // console.log(req.params);
    const datas = [{
        id: 1,
        name: "react",
        subject: "node"
    },
    {
        id: 2,
        name: "Hooks",
        subject: "React"
    }]

    const { userid } = req.params

    if (userid == 1) {
        console.log(datas);

        res.status(200).json({
            success: true,
            message: "Data Fetched",
            userdatas: datas
        })
    } else {
        res.status(404).json({
            msg: "No I am not send data"
        })
    }

}

export const profile = (req, res) => {
    // console.log("running");

    const { name, designation, experience } = req.body
    res.status(200).json({
        name: "Mani",
        designation: "Backend Developer",
        experience: "3 years"
    })
}

export const user = (req, res) => {

    const usedata = req.body

    res.status(201).json({
        message: "User created",
        data: usedata
    })
}

export const error = (req, res) => {
    res.status(500).json({
        error: "Internal Server Error"
    })
}

export const header = (req, res) => {
    res.set("App-Name", "MyExpressApp");
    res.status(200).send("Header sent successfully")
}

export const check = (req, res) => {
    // console.log("running");

    const { role } = req.query;

    if (role === "admin") {
        res.status(200).send("Access Granted");
    } else {
        res.status(403).send("Access Denied")
    }
}

export const success = (req, res) => {
    res.status(200).send("Operation Successful");
}

export const data = (req, res) => {
    res.status(200).json({
        message: "data fetched",
        status: "true",
        category: ["React", "Node", "Express", "Mongo DB"]
    })
}

export const echo = (req, res) => {
    const receivedata = req.body;
    res.status(200).json({
        message: "Data received successfully",
        data: receivedata
    })
}

export const customheader = (req, res) => {
    // console.log("Running");

    const datav = req.body;
    res.set("X-App-Version", "1.0.0");
    res.status(200).json({
        message: "Custom Header Sent Successfully"
    })
}


export const successs = (req, res) => {
    res.send("Success Done")
}

export const created = (req, res)=>{
    res.status(201).json({
        message:"Resoure created successfully"
    })
}