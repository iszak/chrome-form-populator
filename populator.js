var Populator = (function() {
    function Populator(data) {
        this.data = data;
    }


    Populator.prototype.populateFirstName = function() {
        var firstNameSelectors = [
            'input[type=text][name*=first_name]',
            'input[type=text][name*=firstname]'
        ];


        var firstNames = document.querySelectorAll(firstNameSelectors.join(','));

        for (var i = 0, l = firstNames.length; i < l; ++i) {
            firstNames[i].value = this.data['firstName'];
        }
    };



    Populator.prototype.populateLastName = function() {
        var lastNameSelectors = [
            'input[type=text][name*=last_name]',
            'input[type=text][name*=lastname]',
            'input[type=text][name*=surname]'
        ];


        var lastNames = document.querySelectorAll(lastNameSelectors.join(','));

        for (var i = 0, l = lastNames.length; i < l; ++i) {
            lastNames[i].value = this.data['lastName'];
        }
    };



    Populator.prototype.populateEmailAddress = function() {
        var emailAddressSelectors = [
            'input[type=email]',
            'input[type=text][name*=email]'
        ];


        var emailAddresses = document.querySelectorAll(emailAddressSelectors.join(','));

        for (var i = 0, l = emailAddresses.length; i < l; ++i) {
            emailAddresses[i].value = this.data['emailAddress'];
        }
    };




    Populator.prototype.populatePostcode = function() {
        var postcodeSelectors = [
            'input[type=text][name*=postcode]',
            'input[type=text][name*=post_code]',
            'input[type=text][name*=zip_code]',
            'input[type=text][name*=zip]'
        ];


        var postcodes = document.querySelectorAll(postcodeSelectors.join(','));

        for (var i = 0, l = postcodes.length; i < l; ++i) {
            postcodes[i].value = this.data['postcode'];
        }
    };



    Populator.prototype.populateCountry = function() {
        var countrySelectors = [
            'input[type=text][name*=country]'
        ];

        var countries = document.querySelectorAll(countrySelectors.join(','));
        for (var i = 0, l = countries.length; i < l; ++i) {
            countries[i].value = this.data['country'].toUpperCase();
        }
    };



    Populator.prototype.populateAddress = function() {
        var addressSelectors = [
            'input[type=text][name*=address]',
            'input[type=text][name*=addr]'
        ];

        var addresses = document.querySelectorAll(addressSelectors.join(','));
        for (var i = 0, l = addresses.length; i < l; ++i) {
            if (/email/.test(addresses[i].name) === true) {
                continue;
            }

            if (/addr\d+/.test(addresses[i].name) === false) {
                addresses[i].value = this.data['address'];
            } else if (/addr1/.test(addresses[i].name) === true) {
                addresses[i].value = this.data['address'];
            }
        }
    };


    Populator.prototype.populateProvince = function() {
        var provincesSelectors = [
            'input[type=text][name*=city]',
            'input[type=text][name*=town]'
        ];

        var provinces = document.querySelectorAll(provincesSelectors.join(','));
        for (var i = 0, l = provinces.length; i < l; ++i) {
            provinces[i].value = this.data['province'].toLowerCase().replace(/^([a-z])|\s+([a-z])/g, function (value) {
                return value.toUpperCase();
            });
        }
    };




    Populator.prototype.populateTitle = function() {
        var titles;

        if (this.data['gender'] === 'male') {
            title = 'Mr';
        } else {
            title = 'Miss';
        }


        // Replace text value
        titles = document.querySelectorAll('input[type=text][name*=title]');
        for (var i = 0, l = titles.length; i < l; ++i) {
            titles[i].value = title;
        }


        // Replace select value
        titles = document.querySelectorAll('select[name*=title]');
        for (var i = 0, l = titles.length; i < l; ++i) {
            options = titles[i].querySelectorAll('option');

            for (var j = 0, m = options.length; j < m; ++j) {
                if (options[j].innerText.toLowerCase() === title) {
                    titles[i].selectedIndex = j;
                    options[j].selected    = true;
                }
            }
        }
    };




    Populator.prototype.populateGender = function() {
        // Replace text value
        genders = document.querySelectorAll('input[type=text][name*=gender]');
        for (var i = 0, l = genders.length; i < l; ++i) {
            genders[i].value = this.data['gender'];
        }


        // Replace select value
        genders = document.querySelectorAll('select[name*=gender]');
        for (var i = 0, l = genders.length; i < l; ++i) {
            options = genders[i].querySelectorAll('option');

            for (var j = 0, m = options.length; j < m; ++j) {
                if (options[j].innerText.toLowerCase() === this.data['gender']) {
                    genders[i].selectedIndex = j;
                    options[j].selected    = true;
                }
            }
        }
    };


    Populator.prototype.populatePostcode = function() {
        var postcodeSelectors = [
            'input[type=text][name*=postcode]',
            'input[type=text][name*=zip]'
        ];

        var postcodes = document.querySelectorAll(postcodeSelectors.join(','));
        for (var i = 0, l = postcodes.length; i < l; ++i) {
            postcodes[i].value = this.data['postcode'];
        }
    };



    Populator.prototype.populatePhoneNumber = function() {
        var phoneNumberSelectors = [
            'input[type=text][name*=tel]',
            'input[type=text][name*=phone]',
            'input[type=number][name*=tel]',
            'input[type=number][name*=phone]'
        ];


        var phoneNumbers = document.querySelectorAll(phoneNumberSelectors.join(','));
        for (var i = 0, l = phoneNumbers.length; i < l; ++i) {
            phoneNumbers[i].value = this.data['phoneNumber'];
        }
    };


    Populator.prototype.populateUsername = function() {
        var usernameSelectors = [
            'input[type=text][name*=username]'
        ];

        var usernames = document.querySelectorAll(usernameSelectors.join(','));
        for (var i = 0, l = usernames.length; i < l; ++i) {
            usernames[i].value = this.data['username'];
        }
    };


    Populator.prototype.populatePassword = function() {
        var passwordSelectors = [
            'input[type=text][name*=password]',
            'input[type=text][name*=passwd]',
            'input[type=password][name*=password]',
            'input[type=password][name*=passwd]'
        ];

        var passwords = document.querySelectorAll(passwordSelectors.join(','));
        for (var i = 0, l = passwords.length; i < l; ++i) {
            passwords[i].value = this.data['password'];
        }
    };



    Populator.prototype.populateDateOfBirth = function() {
        var daySelectors = [
            'select[name*=dob_day]'
        ];

        var days = document.querySelectorAll(daySelectors.join(','));
        for (var i = 0, l = days.length; i < l; ++i) {
            options = days[i].querySelectorAll('option');

            for (var j = 0, m = options.length; j < m; ++j) {
                var dateOfBirthDay = this.data['dateOfBirthDay'];
                if (options[1].innerText[0] === '0' && this.dateOfBirthDay < 10) {
                    dateOfBirthDay = '0' + this.data['dateOfBirthDay'];
                }

                if (options[j].innerText === dateOfBirthDay) {
                    days[i].selectedIndex = j;
                    options[j].selected    = true;
                }
            }
        }


        var monthSelectors = [
            'select[name*=dob_month]'
        ];

        var months = document.querySelectorAll(monthSelectors.join(','));
        for (var i = 0, l = months.length; i < l; ++i) {
            options = months[i].querySelectorAll('option');

            for (var j = 0, m = options.length; j < m; ++j) {
                var dateOfBirthMonth = this.data['dateOfBirthMonth'];
                if (options[1].innerText[0] === '0' && this.dateOfBirthMonth < 10) {
                    dateOfBirthMonth = '0' + this.data['dateOfBirthMonth'];
                }


                if (options[j].innerText === dateOfBirthMonth) {
                    months[i].selectedIndex = j;
                    options[j].selected    = true;
                }
            }
        }



        var yearSelectors = [
            'select[name*=dob_year]'
        ];

        var years = document.querySelectorAll(yearSelectors.join(','));

        for (var i = 0, l = years.length; i < l; ++i) {
            options = years[i].querySelectorAll('option');

            for (var j = 0, m = options.length; j < m; ++j) {
                if (options[j].innerText === this.dateOfBirthYear) {
                    years[i].selectedIndex = j;
                    options[j].selected    = true;
                }
            }
        }


        // TODO: Implement
        var dateOfBirthSelectors = [
            'input[type=text][name*=dob]',
            'input[type=text][name*=dateOfBirth]',
            'input[type=text][name*=date-of-birth]',
            'input[type=text][name*=date_of_birth]'
        ];

        var dateOfBirths = document.querySelectorAll(dateOfBirthSelectors.join(','));

        for (var i = 0, l = dateOfBirths.length; i < l; ++i) {

        }
    };


    Populator.prototype.populate = function() {
        this.populateEmailAddress();
        this.populateUsername();
        this.populatePassword();

        this.populateTitle();
        this.populateFirstName();
        this.populateLastName();
        this.populateGender();

        this.populateAddress();
        this.populateProvince();
        this.populatePostcode();
        this.populateCountry();
        this.populatePhoneNumber();
        this.populateDateOfBirth();
    };


    return Populator;
})();


chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
    var populator = new Populator(request);
        populator.populate();
});
