angular.module('de.voan.common.package1.directives', [])
    .directive('common1', function (CommonService) {
        return {
            'template': '{{common}}',
            'restrict': 'EA',
            link: function (scope) {
                scope.common = CommonService.doSomethingCommon();
            }
        };
    });