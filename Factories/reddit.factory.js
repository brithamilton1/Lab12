var app = angular.module("reddit");

app.factory("RedditFactory", function ($http){
    var postData;

    return{
      getPosts: getPosts
    };

    function getPosts(){
      if(postData){
        return Promise.resolve(postData);
      }

      return $http.get ("https://www.reddit.com/r/aww/.json")
        .then(function(result){
            postData = result.data.data.children;
            return postData;
            });
};
});
