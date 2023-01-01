const { Router } = require('express');
const { createAgenda,
        getAgenda,
        getAgendas,
        updateAgenda,
        deleteAgenda
      } = require('../controllers/agenda.controller');

const router = Router();

router.route('/')
      .post(createAgenda)
      .get(getAgendas);

router.route('/:id')
      .get(getAgenda)
      .put(updateAgenda)
      .delete(deleteAgenda);

module.exports = router;