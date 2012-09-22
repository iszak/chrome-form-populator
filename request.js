var Request = (function(){
    var extractDateOfBirth = function(string) {
        var dateOfBirthFragments = string.match(/(\w+)\s+(\d{1,2}),\s+(\d{4})/);

        this.dateOfBirthYear = dateOfBirthFragments[3].toString();
        this.dateOfBirthDay = dateOfBirthFragments[2].toString();
        this.dateOfBirthMonth = (new Date(dateOfBirthFragments[1] + ', 1, 1970').getMonth() + 1).toString();
    };


    var extractName = function(string) {
        var nameFragments = string.split(' ');

        this.firstName = nameFragments[0];
        this.lastName = nameFragments[nameFragments.length - 1];
    };


    var extractAddrress = function(string) {
        var addressFragments = string.replace(/^\s+|\s+$/g, '').split('\n');

        switch (this.country) {
            case 'uk':
            console.log(addressFragments);
                this.address  = addressFragments[0];
                this.province = addressFragments[1];
                this.postcode = addressFragments[2];
                break;

            case 'it':
                this.address  = addressFragments[0];
                this.province = addressFragments[1].split('-')[1];
                this.postcode = addressFragments[1].split('-')[0];
                break;
            // TODO: Implement other countries
        }
    };



    var makeUrl = function(options) {
        var url = options.domain;
            url += 'gen-';
            url += options.gender.toLowerCase()+'-';
            url += options.name.toLowerCase()+'-';
            url += options.country.toLowerCase();
            url += options.extension;

        return url;
    };


    function Request(options) {
        this.country = options.country;

        if (options.domain === undefined) {
            options.domain = 'http://www.fakenamegenerator.com/';
        }
        if (options.extension === undefined) {
            options.extension = '.php';
        }

        this.url = makeUrl(options);
    }


    Request.prototype.send = function() {
        var parent = this;

        var xhr = new XMLHttpRequest();
            xhr.responseType = 'document';
            xhr.open("GET", this.url, true);
            xhr.onload = function(){
                return parent.load.apply(parent, [this]);
            };
            xhr.send();
    };


    Request.prototype.load = function(xhr) {
        extractName.call(this, xhr.responseXML.querySelector('.address h3').innerText);
        extractAddrress.call(this, xhr.responseXML.querySelector('.adr').innerText);
        extractDateOfBirth.call(this, xhr.responseXML.querySelector('.bday').innerText);

        this.phoneNumber = xhr.responseXML.querySelector('.tel .value').innerText;
        this.emailAddress = xhr.responseXML.querySelector('.email .value').innerText;

        this.username = xhr.responseXML.querySelectorAll('.extra .lab')[3].nextSibling.nextSibling.innerText;
        this.password = xhr.responseXML.querySelectorAll('.extra .lab')[4].nextSibling.nextSibling.innerText;

        if (xhr.responseXML.querySelectorAll('[alt=Female]').l === 1) {
            this.gender = 'female';
        } else {
            this.gender = 'male';
        }

        this.complete();
    };



    Request.prototype.complete = function() {
        if (this.beforecomplete) {
            this.beforecomplete.apply(this, [message]);
        }

        var message = {
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,

            dateOfBirthYear: this.dateOfBirthYear,
            dateOfBirthMonth: this.dateOfBirthMonth,
            dateOfBirthDay: this.dateOfBirthDay,

            emailAddress: this.emailAddress,

            address: this.address,
            postcode: this.postcode,
            province: this.province,
            country: this.country,
            phoneNumber: this.phoneNumber,

            username: this.username,
            password: this.password
        };


        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendMessage(tab.id, message);
        });


        if (this.aftercomplete) {
            this.aftercomplete.apply(this, [message]);
        }
    };


    return Request;
})();