const express = require("express");
const { Router } = require("express");
const router = express.Router();
const Servicio = require("../models/servicios");
const servicios = require("../models/servicios");

router.get("/", async (req, res) => {
  const serv = await Servicio.find();
  res.render("index", { serv });
});

router.post("/add", async (req, res) => {
  const serv = new Servicio(req.body);
  await serv.save();
  res.redirect("/");
});

router.get("/turn/:id", async (req, res) => {
  const { id } = req.params;
  const serv = await Servicio.findById(id);
  serv.status = !serv.status;
  await serv.save();
  console.log(serv);
  res.redirect("/");
});

router.get("/edit/:id", async (req, res) => {
    const { id } = req.params;
    const serv = await Servicio.findById(id);
    res.render('edit', {serv});
});

router.post('/edit/:id', async(req, res)=>{
    const { id } = req.params;
    await servicios.update({_id:id}, req.body);
    res.redirect('/');
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;
  await Servicio.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

module.exports = router;
