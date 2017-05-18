/**
 * Created by sahil-dua on 18/5/17.
 */

const commentController = require('./comment.controller');
const express = require('express');
const comment = express.Router();

comment.post('/create-comment', commentController.createComment);
comment.get('/fetch-comments', commentController.fetchComments);

module.exports = comment;