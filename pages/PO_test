'use strict';

var AngularPage = function () {
    browser.get('http://www.angularjs.org');
};

AngularPage.prototype = Object.create({}, {
    todoText: {
        get: function () {
            return element(by.model('todoText'));
        }
    },
    addButton: {
        get: function () {
            return element(by.css('[value="add"]'));
        }
    },
    yourName: {
        get: function () {
            return element(by.model('yourName'));
        }
    },
    greeting: {
        get: function () {
            return element(by.binding('yourName')).getText();
        }
    },
    todoList: {
        get: function () {
            return element.all(by.repeater('todo in todos'));
        }
    },
    typeName: {
        value: function (keys) {
            return this.yourName.sendKeys(keys);
        }
    },
    todoAt: {
        value: function (idx) {
            return this.todoList.get(idx).getText();
        }
    },
    addTodo: {
        value: function (todo) {
            this.todoText.sendKeys(todo);
            this.addButton.click();
        }
    }
});

module.exports = AngularPage;