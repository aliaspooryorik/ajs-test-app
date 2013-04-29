// As multiple Angular apps in one page, need to bootstrap instead of ng-app

var SimpleExampleApp = angular.module('SimpleExampleApp', []);
angular.bootstrap($('[data-example="SimpleExampleApp"]'),['SimpleExampleApp']);

var BindingExampleApp = angular.module('BindingExampleApp', []);
angular.bootstrap($('[data-example="BindingExampleApp"]'),['BindingExampleApp']);
