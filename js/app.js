'use stricts';

var app = angular.module('mmail',['ngRoute']);

app.config( function($routeProvider){
    // 最初は otherwise な LoginCtrl のルートしかない
    $routeProvider.otherwise({
        templateUrl: 'login.html',
        controller: 'LoginCtrl',
        resolve: {
            login: function($route, AuthService){
                if (AuthService.isLogined()) {
                    // ログインに成功したらルートを追加＆上書きする
                    $routeProvider.when('/', {
                        templateUrl: 'mailList.html',
                        controller:  'mailListCtrl'
                    });
                    $routeProvider.when('/page1', {
                        templateUrl: 'folderList.html,
                        controller: 'folderListCtrl'
                    });
                    $routeProvider.when('/page2', {
                        template: '<h1>page2</h1>',
                        controller: function(){}
                    });
                    $routeProvider.otherwise({
                        redirectTo: '/'
                    });
                    $route.reload();
                }
            }
        }
    });
    console.log("app.config end");
});

