var app=angular.module("app",[])

app.controller("userInputCntrl",["$scope","userupdateService",function($scope,userupdateService){
    $scope.data;
    $scope.updateuserData=function(){
        let userobj={
            name:$scope.name,
            pswd:$scope.pass
        }

        $scope.data =  userupdateService.updateuserData(userobj)
        console.log($scope.data);
    }
}])
