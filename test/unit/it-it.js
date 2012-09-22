module( "Italian Italy" );

test( "first name", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.firstName, 'Natalina');
});


test( "last name", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.lastName, 'Moretti');
});


test( "gender", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.gender, 'female');
});


test( "phone number", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.phoneNumber, '0333 5334562');
});


test( "email address", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.emailAddress, 'NatalinaMoretti@teleworm.us');
});


test( "address", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.address, 'Piazza Garibaldi, 14');
});


test( "postcode", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.postcode, '67050');
});


test( "province", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.province, 'Santuario Di Pietracquaria AQ');
});


test( "date of birth year", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.dateOfBirthYear, '1981');
});


test( "date of birth month", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.dateOfBirthMonth, '10');
});


test( "date of birth day", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'it',
        country: 'it'
    });

    equal(populator.dateOfBirthDay, '6');
});