const express = require('express')
const axios = require('axios');
const app = express()

app.get('/', async (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log('sucesso get', response.data)
            res.status(200).json({
                code: 200,
                success: true,
                message: 'sucesso get',
                data: response.data
            })
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({
                code: 400,
                success: false,
            })
        });
})

app.post('/', async (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log('sucesso post', response.data)
            res.status(201).json({
                code: 201,
                success: true,
                message: 'sucesso post',
                data: response.data
            })
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({
                code: 400,
                success: false,
            })
        });
})

app.put('/', async (req, res) => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((response) => {
            console.log('sucesso put', response.data)
            res.status(204).json({
                code: 204,
                success: true,
                message: 'sucesso put',
                data: response.data
            })
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({
                code: 400,
                success: false,
            })
        });
})

app.listen(3030)
