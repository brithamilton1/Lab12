var app = angular.module("reddit", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when("/main", {
    templateUrl: "Main/main.html",
    controller: "MainCtrl"
  })
  .when("/favorites", {
    templateUrl:"Favorites/favorites.html",
    controller: "FavCtrl"
  })
  .otherwise({
      redirectTo: "/main"
    });

    $locationProvider.hashPrefix("");
  });
