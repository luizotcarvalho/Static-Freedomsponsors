/*global angular */

/**
 * The main Freedom Sponsors app module
 *
 * @type {angular.Module}
 */
var app = angular.module('freedomsponsors', ['ngRoute', 'ngResource']);
app.config(function ($routeProvider) {

    $routeProvider
    .when("/", {
        templateUrl: "/views/home.html"
    })
    .when("/login", {
        templateUrl: "/views/login.html"
    })
    .when("/signup", {
        templateUrl: "/views/signup.html"
    })
    .when("/issues", {
        templateUrl: "/views/issues.html"
    })
    .when("/projects", {
        templateUrl: "/views/projects.html"
    })
    .otherwise({ redirectTo: "/" });

});