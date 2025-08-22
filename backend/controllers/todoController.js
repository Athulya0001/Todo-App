import Todo from "../models/todoModel.js";

export const addTodo = async (req,res) => {
    console.log("fucnnn")
    const {title,description} = req.body;
    console.log(req.body,"req body")
    const userId = req.user.id
    console.log(userId,"user")
    try {
        if(!title) return res.status(400).json({success:false,message:"Title requiredd"})

        const todo = await Todo.create({title,description,userId})

        return res.status(200).json({success:true,message:"Todo added successfully",todo})
    } catch (error) {
        console.log("error adding todo", error)
        return res.status(500).json({success:false,message:"Error adding todo", error})
    }
}

export const getTodos = async (req, res) => {
    const userId = req.user.id;
    console.log(userId)
  try {
    if (!userId) return res.status(401).json({ success: false, message: "Unauthorized" });

    const todos = await Todo.find({ userId }).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, todos });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error fetching todos", error: error.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const updated = await Todo.findOneAndUpdate(
      { _id: id, userId },
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Todo not found or not yours" });
    }

    return res.status(200).json({ success: true, todo: updated });
  } catch (error) {
    console.error("Update Todo Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const deleted = await Todo.findOneAndDelete({ _id: id, userId });
    if (!deleted) {
      return res.status(404).json({ success: false, message: "Todo not found or not yours" });
    }

    return res.status(200).json({ success: true, message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Delete Todo Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};