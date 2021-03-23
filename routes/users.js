const express = require('express');
const router = express.Router();
const users = require('../model/userModel');

router.get('/:id?',function(req, res, next){
    if(req.params.id){
        users.getById(req.params.id, (err, rows) => {
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    }else{
        users.getAll((err, rows) => {
            if(err){
                res.json(err);
            } else {
                res.json(rows);
            }

        });
    }
});

router.post('/', (req, res, next) => {
    console.log(req.body)
    res.set("Content-Type", "application/json");
    users.create(req.body,(err, count) => {
        if(err){
            res.json(err);
        } else{
            res.json(req.body);
        }
    });
});

router.delete('/:id', (req, res, next) => {
    users.remove(req.params.id,(err,count) => {
        if(err){
            res.json(err);
        } else{
            res.json(count);
        }
    });
});

router.put('/:id', (req, res, next) =>{
    users.update(req.params.id, req.body,(err, rows) => {
        if(err){
            res.json(err);
        } else{
            res.json(rows);
        }
    });
});

module.exports = router;