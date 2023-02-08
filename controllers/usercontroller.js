const userModal = require("../database/modals/dbmodels");

const serverResponse = {
  message: "",
  status: 400,
  body: null,
  errors: {},
};

//addUser
module.exports.AddUser = async function (req, res) {
    const response = { ...serverResponse };
    try {
      const body = req.body;
      const newModal = new userModal(body);
      const modelresponse = await newModal.save();
      response.message = "Data added successfully";
      response.body = modelresponse;
      response.status = 200;
    } catch (error) {
      console.log(
        `something went wrong controller:AddUser\n error:-${error.message}`
      );
      response.message = "Data not added";
      response.errors.error = error.message;
    }
    res.status(response.status);
    res.send(response);
  };
  
