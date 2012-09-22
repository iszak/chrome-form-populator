/**
 * TODO: Make request to http://www.fakemailgenerator.com/checkemail.php?u=joshuafisher&d=%40dayrep.com to check new emails
 */

var Manager = (function(){
    managerElement = document.querySelector('#manager');


    function Manager(){
        if (localStorage['rows'] === undefined) {
            localStorage['rows'] = JSON.stringify({});
        }

        this.refresh();
    }


    Manager.prototype.add = function(data) {
        var parent = this;


        var trElement = document.createElement('tr');

        var emailAddressElement = document.createElement('td');
            emailAddressElement.classList.add('left');
            emailAddressElement.innerHTML = data.emailAddress;

        var usernameElement = document.createElement('td');
            usernameElement.classList.add('center');
            usernameElement.innerHTML = data.username;

        var passwordElement = document.createElement('td');
            passwordElement.classList.add('center');
            passwordElement.innerHTML = data.password;

        var firstNameElement = document.createElement('td');
            firstNameElement.classList.add('center');
            firstNameElement.innerHTML = data.firstName;

        var lastNameElement = document.createElement('td');
            lastNameElement.classList.add('center');
            lastNameElement.innerHTML = data.lastName;

        var genderElement = document.createElement('td');
            genderElement.classList.add('center');
            genderElement.innerHTML = data.gender[0].toUpperCase() + data.gender.substr(1, data.gender.length);

        var dateOfBirthElement = document.createElement('td');
            dateOfBirthElement.classList.add('center');
            dateOfBirthElement.innerHTML = data.dateOfBirthYear + '-' + data.dateOfBirthMonth + '-' + data.dateOfBirthDay;


        var addressElement = document.createElement('td');
            addressElement.classList.add('center');
            addressElement.innerHTML = data.address;

        var postcodeElement = document.createElement('td');
            postcodeElement.classList.add('center');
            postcodeElement.innerHTML = data.postcode;

        var phoneNumberElement = document.createElement('td');
            phoneNumberElement.classList.add('center');
            phoneNumberElement.innerHTML = data.phoneNumber;

        var countryElement = document.createElement('td');
            countryElement.classList.add('center');
            countryElement.innerHTML = data.country.toUpperCase();

        var actionsElement = document.createElement('td');
            actionsElement.classList.add('center');

        var actionsRemoveElement = document.createElement('a');
            actionsRemoveElement.classList.add('remove');
            actionsRemoveElement.innerHTML = 'Remove';
            actionsRemoveElement.href = '#';

        actionsRemoveElement.addEventListener('click', function(){
            return parent.remove.apply(parent, [this]);
        });


        var actionsSeparator = document.createTextNode(' | ');


        var actionsEmailElement = document.createElement('a');
            actionsEmailElement.classList.add('email');
            actionsEmailElement.innerHTML = 'Email';
            actionsEmailElement.target = '_blank';
            actionsEmailElement.href = 'http://www.fakemailgenerator.com/?e=' + data.emailAddress;


        // Append actions
        actionsElement.appendChild(actionsEmailElement);
        actionsElement.appendChild(actionsSeparator);
        actionsElement.appendChild(actionsRemoveElement);


        // Append elements
        trElement.appendChild(emailAddressElement);

        trElement.appendChild(usernameElement);
        trElement.appendChild(passwordElement);

        trElement.appendChild(firstNameElement);
        trElement.appendChild(lastNameElement);
        trElement.appendChild(genderElement);
        trElement.appendChild(dateOfBirthElement);

        trElement.appendChild(addressElement);
        trElement.appendChild(postcodeElement);
        trElement.appendChild(phoneNumberElement);
        trElement.appendChild(countryElement);
        trElement.appendChild(actionsElement);

        managerElement.querySelector('tbody').appendChild(trElement);
    };


    Manager.prototype.refresh = function() {
        var tbody = managerElement.querySelector('tbody');
            tbody.innerHTML = '';


        var rows = JSON.parse(localStorage['rows']);

        if (Object.keys(rows).length > 0) {
            for (var index in rows) {
                this.add(rows[index]);
            }
        } else {
            var trElement = document.createElement('tr');

            var noResultsElement = document.createElement('td');
                noResultsElement.colSpan = 8;
                noResultsElement.classList.add('center');
                noResultsElement.innerHTML = 'No Results';

            trElement.appendChild(noResultsElement);

            tbody.appendChild(trElement);
        }
    };




    Manager.prototype.remove = function(element) {
        var trElement    = element.parentElement.parentElement,
            tbodyElement = element.parentElement.parentElement.parentElement;


        var rows = JSON.parse(localStorage['rows']);

        for (var index in rows) {
            if (index === 'length') {
                continue;
            }

            if (trElement.children[0].innerText === rows[index].emailAddress) {
                delete rows[index];
            }
        }

        localStorage['rows'] = JSON.stringify(rows);


        this.refresh();
    };


    return Manager;
})();

new Manager();