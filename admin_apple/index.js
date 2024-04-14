const mongoose = require('mongoose');
const express = require('express');

const PORT = 3000;
// Kết nối với MongoDB
mongoose.connect('mongodb+srv://chungdatcntt1808:caochungdat2002@caochungdat.jdryd2f.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Xác nhận kết nối thành công
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB :)');
});