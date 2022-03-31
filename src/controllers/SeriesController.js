const res = require("express/lib/response");
const Serie = require('../models/Series');

const login = (req, res) => {
  try {
    res.render("index");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const acesso = async (req, res) => {
  try {
    let username = req.body.username;
    let password = req.body.password;

    if (!acesso) {
      return res.redirect("/index");
    }

    await Serie.acesso(username), await Serie.acesso(password);
    res.redirect("/home");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const series_ = await Serie.findAll();
    res.render("home", { series_ });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const cadastro = (req, res) => {
  try {
    res.render("cadastro");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const _serie = req.body;

    if (!_serie) {
      return res.redirect("/cadastro");
    }

    await Series.create(_serie);
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const detalhes = (req, res) => {
  try {
    res.render("lista");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const series_ = await Serie.findAll();
    const serie = await Serie.findByPk(req.params.id);

    if (method == "put") {
      res.render("home", {
        series_,
        seriePut: serie,
        serieDel: null,
      });
    } else {
      res.render("home", {
        series_,
        seriePut: null,
        serieDel: serie,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = (req, res) => {};

module.exports = {
  getAll,
  cadastro,
  create,
  detalhes,
  login,
  acesso,
  getById,
  update,
};
