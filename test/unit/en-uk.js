module( "English United Kingdon" );

test( "first name", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.firstName, 'Riley');
});


test( "last name", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.lastName, 'Coates');
});


test( "gender", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.gender, 'male');
});


test( "phone number", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.phoneNumber, '079 6647 0286');
});


test( "email address", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.emailAddress, 'RileyCoates@dayrep.com');
});


test( "address", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.address, '11 Wood Lane');
});


test( "postcode", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.postcode, 'AB37 4XU');
});


test( "province", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.province, 'BADNAFRAVE');
});


test( "date of birth year", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.dateOfBirthYear, '1947');
});


test( "date of birth month", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.dateOfBirthMonth, '1');
});


test( "date of birth day", function() {
    var populator = new Populator({
        domain: 'data/',
        extension: '.html',
        gender: 'random',
        name: 'en',
        country: 'uk'
    });

    equal(populator.dateOfBirthDay, '5');
});