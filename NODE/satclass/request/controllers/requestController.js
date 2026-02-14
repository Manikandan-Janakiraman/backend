// 1️⃣ BODY Example
export const bodyExample = (req, res) => {
  console.log("Body Data:", req.body);

  res.json({
    message: "Body received",
    body: req.body
  });
};


// 2️⃣ PARAMS Example
export const paramsExample = (req, res) => {
  console.log("Params Data:", req.params);

  res.json({
    message: "Params received",
    params: req.params
  });
};


// 3️⃣ QUERY Example
export const queryExample = (req, res) => {
  console.log("Query Data:", req.query);

  res.json({
    message: "Query received",
    query: req.query
  });
};


// 4️⃣ FULL REQUEST OBJECT Example
export const fullRequestExample = (req, res) => {
  console.log("Full Request Object:");
  console.log(req);

  res.json({
    message: "Full request checked",
    method: req.method,
    url: req.url,
    headers: req.headers
  });
};
