import express from 'express';
import Task from '../model/schema.js';

const router= express.Router();

//get all tasks
router.get("/", async (req, res, next) => {
    try {
      let queryObj = {};
  
      // Filtering
      //req.query gets whats written after ? in the URL 
    
      if (req.query.completed) {
        queryObj.completed = req.query.completed === "true"; //?completed=true then queryObj= {completed : true}
      }

      let query = Task.find(queryObj);
  
      // Sorting
      if (req.query.sort === "title") {
        query = query.sort("title");
      } else {
        query = query.sort("-createdAt"); // newest first
      }
  
      // Pagination
      //checks for page and limit in the URL and set the values of them
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;
  
      query = query.skip(skip).limit(limit);
  
      const tasks = await query;
      res.json(tasks);
    } catch (error) {
      next(error);
    }
  });

//get tasks by id mentioned in the URL
router.get('/:id', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if(!task){
        //if the id mentioned in url doesn't exist then we throw new error for it to be catch in catch error block
        const error=new Error('Task not found');
        error.statusCode=404;
        throw error;
    }

    res.json(task);
  } 
  catch (error) {
    next(error);
  }
});

//create new task using POST method
router.post('/',async (req,res,next) => {
    try{
        const task = await Task.create(req.body);
        res.status(201).json(task);
    }
    catch(error){
        next(error);
    }
});


//update tasks
router.put("/:id", async (req, res, next) => {
    try {
      const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
  
      if (!task) {
        const error = new Error("Task not found");
        error.statusCode = 404;
        throw error;
      }
  
      res.json(task);
    } catch (error) {
      next(error);
    }
});


//delete task
router.delete("/:id", async (req, res, next) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
  
      if (!task) {
        const error = new Error("Task not found");
        error.statusCode = 404;
        throw error;
      }
  
      res.json({ message: "Task deleted successfully" });
    } catch (error) {
      next(error);
    }
  });

  
export default router;