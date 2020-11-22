const express = require('express')
const Route = express.Router()
const PostController = require('../controllers/PostController')

Route.get('/posts', PostController.index)
Route.get('posts/:postId', PostController.show)
Route.post('posts', PostController.store)
Route.patch('posts/:postId', PostController.update)
Route.delete('posts/:postId', PostController.delete)

module.exports = Route;
