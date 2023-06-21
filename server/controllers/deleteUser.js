const user = require('../models/user');

const DeleteUser = async (req, res) => {
  try {
    const { email } = req.body;

    const pickedUser = await user.findOneAndDelete({ email });

    if (!pickedUser) {
      console.log("User not found");
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("User deleted successfully");
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = DeleteUser;