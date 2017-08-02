Feature('Inbox Page')

Scenario('I see the proper buttons on page load', (I) => {
    I.amOnPage('/');
    I.see('React Inbox');
    I.seeElement('//button[contains(., "Mark as Read")]'); // button
    I.seeElement('//button[contains(., "Mark as Unread")]'); // button
    I.seeElement('.delete');
    I.seeElement('.selectAll');
    I.seeElement('//select[contains(., "Apply Label")]');
    I.seeElement('//select[contains(., "Remove Label")]');
});

Scenario('I see the proper options in drop down for adding and removing labels', (I) => {
    I.amOnPage('/');
    I.see('React Inbox');
    I.click('.dropdown-add');
    I.see('Personal');
    I.see('Work');
    I.see('React Inbox');
    I.click('.dropdown-remove');
    I.see('Personal');
    I.see('Work');
});


Scenario('I see a list of messages with subjects', (I) => {
    I.amOnPage('/');
    I.see('React Inbox');
    I.seeElement('table');
    I.seeElement('//tr[contains(., "You can\'t input the protocol without calculating the mobile RSS protocol!")]');
    I.seeElement('//tr[contains(., "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!")]');
});

Scenario('Read message has different style', (I) => {
    I.amOnPage('/');
    I.see('React Inbox');
    I.seeElement('table');
    I.dontSee('.read > td > #message-1');
    I.click('#message-1');
    I.click('Mark as Read');
    I.see('.read > td > #message-1')
});