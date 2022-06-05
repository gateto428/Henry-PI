const express = require('express');
const router = express.Router();
const { typediet } = require("../db");

router.get('/', async(req, res)=>{
    try {
        let promise = await typediet.findAll();
        res.status(200).json(promise);
    } catch (error) {
        res.status(404).json(error);
    }
});

module.exports = router;