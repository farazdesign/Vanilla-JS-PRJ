//BUDGET CONTROLLER
var budgetController = (function () {

})();

//UI CONTROLLER
var UIController = (function () {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        //method for returning all of the inputs in UI
        getInput: function () {
            //object with properties
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        getDOMstrings: function () {
            return DOMstrings;
        }

    };

})();

//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventlisteners = function () {
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);
        //event for pressing the enter key
        //event listener inside the function sometimes also just an 'e'
        document.addEventListener('keypress', function (event) {

            //which is for older browsers
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }

        });
    };


    //function that calls on the keypress event or button click event
    var ctrlAddItem = function () {

        //1. Get the field input data
        var input = UICtrl.getInput();


        //2. Add the item to the budget controller

        //3. Add the item to the UI

        //4. Calculate the budget

        //5. Display the budget on the UI

    }

    return {
        init: function () {
            console.log('Application has started.');
            setupEventlisteners();
        }
    };

})(budgetController, UIController);

controller.init();