import kcdHelloTest from './kcd-hello.test';
export default ngModule => {

    if (ON_TEST) {
        kcdHelloTest(ngModule);
    }

    ngModule.directive('kcdHello', () => {
        require('./kcd-hello.scss');
        return {
            restrict: 'E',
            scope: {},
            template: require('./kcd-hello.html'),
            controllerAs: 'vm',
            controller: function() {
                const vm = this;

                vm.greeting = 'Hello Webpack!';
            }
        }
    });
};
