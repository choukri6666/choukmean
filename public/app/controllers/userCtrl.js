angular.module('userControllers', ['userServices'])

    .controller('regCtrl', function ($http, $timeout,$location, User) {

        var app = this;

        this.regUser = function (regData) {

            app.loading = true;
            app.errorMsg = false;



        User.create(app.regData).then(function (data) {
                if (data.data.success) {
                    app.loading = false;
                    //create success Message & redirect to home page

                    app.successMsg = data.data.message + '... Redirecting';
                        $timeout(function(){
                            $location.path('/');                            
                        }, 2000);

                } else {
                    app.loading = false;
                    //create error message
                    app.errorMsg = data.data.message;
                }

            });
        };
    });