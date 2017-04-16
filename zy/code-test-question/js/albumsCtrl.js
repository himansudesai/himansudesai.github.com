var app = angular.module('musicApp');

app.controller('albumsCtrl', function ($scope, $http) {

    // use the http service to hit the url /api?term=the+beatles&entity=album&limit=12
    // the result will be a JSON object with all the relevant information in it.


    $scope.year = function(date) {
        return (new Date(date)).getFullYear();
    }

    var sort = function(albums) {
        albums.sort(function(a, b){
            return (new Date(a.releaseDate) < new Date(b.releaseDate) ? -1 : 1);
        });
        return albums.reverse();
    }

    console.log('about to make http call');
    $http({
        method: 'GET',
        url: '/api?term=the+beatles&entity=album&limit=13'
    }).then(function successCallback(response) {
        console.log('http success, response = ', response);

        var albums = sort(response.data.results);
        var rowCount = 3;
        var perRow = Math.ceil(albums.length / rowCount);

        var idx = 0;
        var rows = [];
        var curRow;
        for (var row=0; row<rowCount; row++) {
            curRow = [];
            for (col=0; col<perRow  && idx<albums.length; col++) {
                curRow.push(albums[idx++]);
            }
            rows.push(curRow);
        }
        $scope.rows = rows;

        // var dt1 = new Date("1969-09-26T07:00:00Z");
        // var dt2 = new Date("1968-09-26T07:00:00Z");
        // var dt3 = new Date("1970-09-26T07:00:00Z");

        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        console.log('http fail, response = ', response);
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });
});
