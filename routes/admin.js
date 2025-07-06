import express from "express";
import Project from "../models/project.js";
import Skill from "../models/skill.js";

const router= express.Router();


router.get('/', async (req, res) => {
  const projects = await Project.find();
  const skills = await Skill.find();
  res.render('index', { projects, skills });
});

router.post('/projects', async (req, res) => {
  await Project.create(req.body);
  res.redirect('/');
});

router.post('/projects/delete/:id', async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

router.post('/skills', async (req, res) => {
  await Skill.create(req.body);
  res.redirect('/');
});

router.post('/skills/delete/:id', async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);
  res.redirect('/');
});

export default router;