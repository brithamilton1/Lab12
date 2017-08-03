var app = angular.module("reddit");

app.controller("FavCtrl", function($scope, $timeout, RedditFactory){
  RedditFactory.getPosts()
    .then(function(result){
      $timeout($scope.favorites= result.filter(function(item){
        return item.favorite;
      }));
    })
    .catch(function(error){
      $scope.error = "there was an error getting posts"
    });
    $scope.saveFavorites = saveFavorites;

    function saveFavorites(){
      console.log($scope.posts);
    }
    });
