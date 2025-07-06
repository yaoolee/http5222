import express from "express";
import Project from "../models/project.js";
import Skill from "../models/skill.js";

const router= express.Router();

router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.get('/skills', async(req, res)=>{
const skills= await Skill.find();
res.json(skills);
});

export default router;