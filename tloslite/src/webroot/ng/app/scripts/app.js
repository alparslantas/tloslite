
(function() {

    'use strict';


    var app = angular.module('tloslite', []);


    app.controller("StoreController", function() {
        this.products = gems;

        this.addElement = function(product) {
            console.log(product);
        };

    });

    app.controller('ReviewController', function() {
        this.reviews = {};
        this.addReview = function() {

        };
    });

    var gems = [{
        name: "kağıt",
        price: 2.5,
        description: "kağıt",
        date: "1365241613452",
        canPurchase: true,
    }, {
        name: "defter",
        price: 7.5,
        description: "defter",
        date: "1324161345723",
        canPurchase: false
    }, {
        name: "kalem",
        price: 12.5,
        description: "kalem",
        date: "1352411343452",
        canPurchase: true
    }]

})();
