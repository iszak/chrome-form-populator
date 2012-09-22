var Extension = (function(){
    function Extension() {
        var parent = this;

        // On populate
        document.querySelector('#populate').addEventListener('click', function(){
            return parent.request.apply(parent);
        });

        document.querySelector('#manage').addEventListener('click', function(){
            return parent.manage.apply(parent);
        });

        // On message receive
        chrome.extension.onMessage.addListener(this.store);
    }


    Extension.prototype.request = function() {
        var genderElement = document.querySelector('select[name=gender]');
        var nameElement = document.querySelector('select[name=name]');
        var countryElement = document.querySelector('select[name=country]');


        var parameters = {
            gender: genderElement.options[genderElement.selectedIndex].value,
            country: countryElement.options[countryElement.selectedIndex].value,
            name: nameElement.options[nameElement.selectedIndex].value
        };

        var request = new Request(parameters);
            request.aftercomplete = this.store; // TODO: Use pubsub
            request.send();
    };


    Extension.prototype.manage = function() {
        chrome.tabs.create({
            url: chrome.extension.getURL('manage.html')
        });
    };


    Extension.prototype.store = function(data) {
        if (localStorage['rows'] === undefined) {
            localStorage['rows'] = JSON.stringify({});
        }

        // Get rows
        var rows = JSON.parse(localStorage['rows']);
            rows[data.emailAddress] = data;

        localStorage['rows'] = JSON.stringify(rows);
    };


    return Extension;
})();



new Extension();