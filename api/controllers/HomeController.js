"use strict";
import EventProxy from 'eventproxy';
import fetch from 'node-fetch';


exports.index = function (req, res, next) {
    res.view();
}
