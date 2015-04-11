//
// $scope properties
//   message
//   showMessage
//   changePage
//   active
//   disabled
//   mailBoxies
//   mailList
//   login
//   logout
//   loginUser
//
//

var app = angular.module('mmail');

console.log("controllers.js head");

app.controller('pageController', [ '$scope', function($scope,$timeout){
    $scope.message = {
        type : 'alert-info',
        text : '',
        show : false
    };

    $scope.showMessage = function(msg){
        $scope.message = msg;
        $timeout(function(){
            $scope.message.show = false;
        },3000);
     };

    $scope.changePage = function(type){
        if(type == 'info'){
            var item = Items.getCurrentItem();
            $scope.active = item;
        }
    };
}]);


app.controller('mailBodyCtrl', function($scope, MailsService){
    $scope.Mails = getMailBoxies($scope.currentmail);
});

app.controller('mailListCtrl', function($scope, UserService, MailsService){
    $scope.loginUser = UserService.getUsername() 
    $scope.mailList = MailsService.mailList()
        .then(function(){
            $scope.
        })
        .catch(function(){
            $scope.showMessage({
                type : 'alert-info',
                text : 'data get error failed',
                show : true
            });
        })
        .finally(function(){
        });
});


app.controller('LoginCtrl', function( $scope, $location, AuthService, UserService ){
    console.log("LoginCtrl start");

    $scope.loginUser = UserService.getUsername;

    $scope.login = AuthService.login(username,password)
        .then(function(){
            UserService.login(username);
            $location.path('/');
        })
        .catch(function(){
            $scope.showMessage({
                type : 'alert-info',
                text : 'login failed',
                show : true
            });
            username = null;
            password = null;
        })
        .finally(function(){
            scope.disabled = false;
        });

    $scope.logout = function(){
        UserService.logout;
        AuthService.logout;
        $location.path('/');
    };
});

app.controller('NavCtrl', function($scope, $window, AuthService, UserService ) {
    console.log("NavCtrl start");

    $scope.loginUser = UserService.getUsername;

    $scope.logout = function () {
        AuthService.logout;
        $window.location.reload();
    };
});

