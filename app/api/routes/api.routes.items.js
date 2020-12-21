const { Router } = require('express');
const itemsRouter = Router();

itemsRouter
  .route('/')
  .get((req, res) => res.json({ success: true, msg: 'GET: get items' }))
  .post((req, res) => res.json({ success: true, msg: 'POST: create a item' }))
  .put((req, res) => res.json({ success: true, msg: 'PUT: update all items' }))
  .delete((req, res) => res.json({ success: true, msg: 'DROP: delete all items' }));

itemsRouter
  .route('/:itemID')
  .get((req, res) => res.json({ success: true, msg: 'GET: get one item' }))
  .put((req, res) => res.json({ success: true, msg: 'PUT: update one item' }))
  .delete((req, res) => res.json({ success: true, msg: 'DELETE: delete one item' }));

module.exports = {
  itemsRouter,
};