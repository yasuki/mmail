
 
var app = angular.module('mmail');

// MailBoxies service define
app.factory('MailListService', function($q,$timeout){
    console.log("MailBoxies Service start");
});

// Maillist service define
app.factory('MailsService', function($q,$timeout){
    console.log("Mails Service start");

        function mailList(){
           console.log("mailList start");
           var response;
           var deferred = $q.defer();
           response = Navi.Data.find('maildata')
                   .done( function(response){
                       console.log("data get success" + response.records);
                       deferred.resolve();
                   })
                   .fail(function(){
                        deferred.reject();
                   })
                   .always(function(){
                        deferred.promise;
                    });
        }

    return {
        mailList:mailList
    };
});


// OAuth Login Service
app.factory('AuthService', function($q, $timeout){

    function login(username, password){
        $scope.disabled = true;
 
        var deferred = $q.defer();
        Navi.OAuth.tokenPassword (username, password)
                .done(function(){
                    console.log("login success");
                    deferred.resolve();
                })
                .fail(function(){
                    console.log("login failed");
                    deferred.reject();
                })
                .always(function(){
                    deferred.promise;
                });
    };

    return {
        login: login,
        logout: function(){
            return null;
        }
    };
});


// Username share Service
app.factory('UserService', function($rootScope){
    var User=null;

    function login(username){
        User = {'username':username};
    }

    function logout(){
        User=null;
    }

    function getUsername(){
        return User;
    }

    function isLogined(){
        return !!User;
    }

    return {
        login: login,
        logout: logout,
        getUsername: getUsername,
        isLogined: isLogined
    };
});

