(async function () {
    //add custom styles to border on focus
    const formFields = document.querySelectorAll('.form__field');

    formFields.forEach((it) => {
        it.addEventListener('focus', () => {
            const formItem = it.closest('.form__item');
            formItem.classList.add('focused');
        });
    });

    formFields.forEach((it) => {
        it.addEventListener('blur', () => {
            const formItem = it.closest('.form__item');
            formItem.classList.remove('focused');
        });
    });

    //get list of countries
    const response = await fetch("../data/countryCodes.json");
    const countriesList = await response.json();
    const countryField = document.querySelector("#country");
    const phoneField = document.querySelector("#phone");

    countriesList.forEach((country) => {
        const optionElement = document.createElement("option");
        optionElement.value = country.country;
        optionElement.textContent = country.country;
        countryField.appendChild(optionElement);
    });


    // add custom dropdown to select tag
    const selectContainer = document.querySelector(".select");
    const selectElement = document.querySelector(".select__text");
    const optionsAmount = selectElement.length;
    const newSelectElement = document.createElement("DIV");
    newSelectElement.setAttribute("class", "select__field");
    newSelectElement.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    selectContainer.appendChild(newSelectElement);
    const optionsContainer = document.createElement("DIV");
    optionsContainer.setAttribute("class", "select__items select__hide");
    for (let j = 1; j < optionsAmount; j++) {
        const optionItem = document.createElement("DIV");
        optionItem.innerHTML = selectElement.options[j].innerHTML;
        optionItem.addEventListener("click", function () {
            for (let i = 0; i < optionsAmount; i++) {
                if (selectElement.options[i].innerHTML === this.innerHTML) {
                    selectElement.selectedIndex = i;
                    console.log(selectElement.value)
                    setCountryCode(this.innerHTML)
                    newSelectElement.innerHTML = this.innerHTML;
                    let selectedOption = this.parentNode.getElementsByClassName("same-as-selected");
                    for (let k = 0; k < selectedOption.length; k++) {
                        selectedOption[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            newSelectElement.click();
            $(selectElement).valid();
        });
        optionsContainer.appendChild(optionItem);
    }
    const label = document.createElement("label");
    label.textContent = 'Country';
    label.setAttribute('for', 'country');
    label.setAttribute("class", "select__label");
    selectContainer.appendChild(optionsContainer);
    setDropdownWidth();
    selectContainer.appendChild(label);
    newSelectElement.addEventListener("click", function (e) {
        e.stopPropagation();
        this.nextSibling.classList.toggle("select__hide");
        this.classList.toggle("select-arrow-active");
    });

    function closeAllSelect() {
        newSelectElement.classList.remove("select-arrow-active");
        optionsContainer.classList.add("select__hide");
    }

    document.addEventListener("click", closeAllSelect);

    // set country code
    const phoneInput = document.querySelector("#phone");
    let countryCode = '';

    function setCountryCode(value) {
        countryCode = countriesList.find(item => item.country === value).code;
        phoneInput.value = formatPhone(phoneInput.value);
    }

    phoneInput.addEventListener("input", (event) => {
        phoneInput.value = formatPhone(event.target.value);
    });

    function formatPhone(phone) {
        const cleanPhone = phone.slice(countryCode.length).replace(/\D/g, "");

        let formattedPhone = '';
        for (let i = 0; i < cleanPhone.length; i++) {
            if (i === 0) {
                formattedPhone += "(";
            } else if (i === 2) {
                formattedPhone += ") ";
            } else if (i === 5) {
                formattedPhone += " ";
            } else if (i === 7) {
                formattedPhone += " ";
            }
            formattedPhone += cleanPhone[i];
        }
        return countryCode + ' ' + formattedPhone.slice(0, 14);
    }

    function setDropdownWidth() {
        const formItem = document.querySelector('.form__item');
        const selectItems = document.querySelector('.select__items');
        const formItemWidth = formItem.offsetWidth;
        selectItems.style.width = formItemWidth + 'px';
    }

    window.addEventListener('resize', setDropdownWidth);


    // validation

    $(function () {
        $.validator.addMethod("passwordPattern", function (value, element) {
            const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
            return this.optional(element) || pattern.test(value);
        }, "Password must have at least one letter, one number, and one symbol.");

        $("form[name='registration']").validate({
            rules: {
                firstName: {
                    required: true,
                    minlength: 3
                },
                secondName: {
                    required: true,
                    minlength: 3
                },
                country: {
                    required: true,
                },
                phone: {
                    required: true,
                    minlength: 14
                },
                password: {
                    required: true,
                    passwordPattern: true
                },
                confirmPassword: {
                    required: true,
                    passwordPattern: true,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                agree: "required"
            },
            messages: {
                firstName: {
                    required: "Fill in the field",
                    minlength:
                        "The name must be more than 2 characters"
                },
                secondName: {
                    required: "Fill in the field",
                    minlength:
                        "The second name must be more than 2 characters"
                },
                country: {
                    required: "Fill in the field",
                },
                phone: {
                    required: "Fill in the field",
                    minlength:
                        "Your phone number is not correct"
                },
                password: {
                    required: "Fill in the field",
                    passwordPattern:
                        "Password must have 1 letter, 1 number and one symbol"
                },
                confirmPassword: {
                    required: "Fill in the field",
                    passwordPattern:
                        "Password must have 1 letter, 1 number and one symbol",
                    equalTo: " Password does not match"
                },
                email: {
                    required: "Fill in the field",
                    email:
                        "Email is not correct"
                },
            },
            submitHandler: function (form) {
                form.submit();
            },
            invalidHandler: function () {
                $(".logo").remove();
            }
        });
    });
})();