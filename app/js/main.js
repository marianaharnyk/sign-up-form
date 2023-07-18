
(function () {
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
    const countryField = document.querySelector("#country");
    const countriesCodes = [
        {"country": "Afghanistan", "code": "+93"},
        {"country": "Albania", "code": "+355"},
        {"country": "Algeria", "code": "+213"},
        {"country": "Andorra", "code": "+376"},
        {"country": "Angola", "code": "+244"},
        {"country": "Antigua and Barbuda", "code": "+1"},
        {"country": "Argentina", "code": "+54"},
        {"country": "Armenia", "code": "+374"},
        {"country": "Australia", "code": "+61"},
        {"country": "Austria", "code": "+43"},
        {"country": "Azerbaijan", "code": "+994"},
        {"country": "Bahamas", "code": "+1"},
        {"country": "Bahrain", "code": "+973"},
        {"country": "Bangladesh", "code": "+880"},
        {"country": "Barbados", "code": "+1"},
        {"country": "Belarus", "code": "+375"},
        {"country": "Belgium", "code": "+32"},
        {"country": "Belize", "code": "+501"},
        {"country": "Benin", "code": "+229"},
        {"country": "Bhutan", "code": "+975"},
        {"country": "Bolivia", "code": "+591"},
        {"country": "Bosnia and Herzegovina", "code": "+387"},
        {"country": "Botswana", "code": "+267"},
        {"country": "Brazil", "code": "+55"},
        {"country": "Brunei", "code": "+673"},
        {"country": "Bulgaria", "code": "+359"},
        {"country": "Burkina Faso", "code": "+226"},
        {"country": "Burundi", "code": "+257"},
        {"country": "Cabo Verde", "code": "+238"},
        {"country": "Cambodia", "code": "+855"},
        {"country": "Cameroon", "code": "+237"},
        {"country": "Canada", "code": "+1"},
        {"country": "Central African Republic", "code": "+236"},
        {"country": "Chad", "code": "+235"},
        {"country": "Chile", "code": "+56"},
        {"country": "China", "code": "+86"},
        {"country": "Colombia", "code": "+57"},
        {"country": "Comoros", "code": "+269"},
        {"country": "Congo", "code": "+242"},
        {"country": "Costa Rica", "code": "+506"},
        {"country": "Croatia", "code": "+385"},
        {"country": "Cuba", "code": "+53"},
        {"country": "Cyprus", "code": "+357"},
        {"country": "Czech Republic", "code": "+420"},
        {"country": "Denmark", "code": "+45"},
        {"country": "Djibouti", "code": "+253"},
        {"country": "Dominica", "code": "+1"},
        {"country": "Dominican Republic", "code": "+1"},
        {"country": "Ecuador", "code": "+593"},
        {"country": "Egypt", "code": "+20"},
        {"country": "El Salvador", "code": "+503"},
        {"country": "Equatorial Guinea", "code": "+240"},
        {"country": "Eritrea", "code": "+291"},
        {"country": "Estonia", "code": "+372"},
        {"country": "Eswatini", "code": "+268"},
        {"country": "Ethiopia", "code": "+251"},
        {"country": "Fiji", "code": "+679"},
        {"country": "Finland", "code": "+358"},
        {"country": "France", "code": "+33"},
        {"country": "Gabon", "code": "+241"},
        {"country": "Gambia", "code": "+220"},
        {"country": "Georgia", "code": "+995"},
        {"country": "Germany", "code": "+49"},
        {"country": "Ghana", "code": "+233"},
        {"country": "Greece", "code": "+30"},
        {"country": "Grenada", "code": "+1"},
        {"country": "Guatemala", "code": "+502"},
        {"country": "Guinea", "code": "+224"},
        {"country": "Guinea-Bissau", "code": "+245"},
        {"country": "Guyana", "code": "+592"},
        {"country": "Haiti", "code": "+509"},
        {"country": "Honduras", "code": "+504"},
        {"country": "Hungary", "code": "+36"},
        {"country": "Iceland", "code": "+354"},
        {"country": "India", "code": "+91"},
        {"country": "Indonesia", "code": "+62"},
        {"country": "Iran", "code": "+98"},
        {"country": "Iraq", "code": "+964"},
        {"country": "Ireland", "code": "+353"},
        {"country": "Israel", "code": "+972"},
        {"country": "Italy", "code": "+39"},
        {"country": "Jamaica", "code": "+1"},
        {"country": "Japan", "code": "+81"},
        {"country": "Jordan", "code": "+962"},
        {"country": "Kazakhstan", "code": "+7"},
        {"country": "Kenya", "code": "+254"},
        {"country": "Kiribati", "code": "+686"},
        {"country": "Korea, North", "code": "+850"},
        {"country": "Korea, South", "code": "+82"},
        {"country": "Kosovo", "code": "+383"},
        {"country": "Kuwait", "code": "+965"},
        {"country": "Kyrgyzstan", "code": "+996"},
        {"country": "Laos", "code": "+856"},
        {"country": "Latvia", "code": "+371"},
        {"country": "Lebanon", "code": "+961"},
        {"country": "Lesotho", "code": "+266"},
        {"country": "Liberia", "code": "+231"},
        {"country": "Libya", "code": "+218"},
        {"country": "Liechtenstein", "code": "+423"},
        {"country": "Lithuania", "code": "+370"},
        {"country": "Luxembourg", "code": "+352"},
        {"country": "Madagascar", "code": "+261"},
        {"country": "Malawi", "code": "+265"},
        {"country": "Malaysia", "code": "+60"},
        {"country": "Maldives", "code": "+960"},
        {"country": "Mali", "code": "+223"},
        {"country": "Malta", "code": "+356"},
        {"country": "Marshall Islands", "code": "+692"},
        {"country": "Mauritania", "code": "+222"},
        {"country": "Mauritius", "code": "+230"},
        {"country": "Mexico", "code": "+52"},
        {"country": "Micronesia", "code": "+691"},
        {"country": "Moldova", "code": "+373"},
        {"country": "Monaco", "code": "+377"},
        {"country": "Mongolia", "code": "+976"},
        {"country": "Montenegro", "code": "+382"},
        {"country": "Morocco", "code": "+212"},
        {"country": "Mozambique", "code": "+258"},
        {"country": "Myanmar", "code": "+95"},
        {"country": "Namibia", "code": "+264"},
        {"country": "Nauru", "code": "+674"},
        {"country": "Nepal", "code": "+977"},
        {"country": "Netherlands", "code": "+31"},
        {"country": "New Zealand", "code": "+64"},
        {"country": "Nicaragua", "code": "+505"},
        {"country": "Niger", "code": "+227"},
        {"country": "Nigeria", "code": "+234"},
        {"country": "North Macedonia", "code": "+389"},
        {"country": "Norway", "code": "+47"},
        {"country": "Oman", "code": "+968"},
        {"country": "Pakistan", "code": "+92"},
        {"country": "Palau", "code": "+680"},
        {"country": "Panama", "code": "+507"},
        {"country": "Papua New Guinea", "code": "+675"},
        {"country": "Paraguay", "code": "+595"},
        {"country": "Peru", "code": "+51"},
        {"country": "Philippines", "code": "+63"},
        {"country": "Poland", "code": "+48"},
        {"country": "Portugal", "code": "+351"},
        {"country": "Qatar", "code": "+974"},
        {"country": "Romania", "code": "+40"},
        {"country": "Russia", "code": "+7"},
        {"country": "Rwanda", "code": "+250"},
        {"country": "Saint Kitts and Nevis", "code": "+1"},
        {"country": "Saint Lucia", "code": "+1"},
        {"country": "Saint Vincent and the Grenadines", "code": "+1"},
        {"country": "Samoa", "code": "+685"},
        {"country": "San Marino", "code": "+378"},
        {"country": "Sao Tome and Principe", "code": "+239"},
        {"country": "Saudi Arabia", "code": "+966"},
        {"country": "Senegal", "code": "+221"},
        {"country": "Serbia", "code": "+381"},
        {"country": "Seychelles", "code": "+248"},
        {"country": "Sierra Leone", "code": "+232"},
        {"country": "Singapore", "code": "+65"},
        {"country": "Slovakia", "code": "+421"},
        {"country": "Slovenia", "code": "+386"},
        {"country": "Solomon Islands", "code": "+677"},
        {"country": "Somalia", "code": "+252"},
        {"country": "South Africa", "code": "+27"},
        {"country": "South Sudan", "code": "+211"},
        {"country": "Spain", "code": "+34"},
        {"country": "Sri Lanka", "code": "+94"},
        {"country": "Sudan", "code": "+249"},
        {"country": "Suriname", "code": "+597"},
        {"country": "Sweden", "code": "+46"},
        {"country": "Switzerland", "code": "+41"},
        {"country": "Syria", "code": "+963"},
        {"country": "Taiwan", "code": "+886"},
        {"country": "Tajikistan", "code": "+992"},
        {"country": "Tanzania", "code": "+255"},
        {"country": "Thailand", "code": "+66"},
        {"country": "Timor-Leste", "code": "+670"},
        {"country": "Togo", "code": "+228"},
        {"country": "Tonga", "code": "+676"},
        {"country": "Trinidad and Tobago", "code": "+1"},
        {"country": "Tunisia", "code": "+216"},
        {"country": "Turkey", "code": "+90"},
        {"country": "Turkmenistan", "code": "+993"},
        {"country": "Tuvalu", "code": "+688"},
        {"country": "Uganda", "code": "+256"},
        {"country": "Ukraine", "code": "+380"},
        {"country": "United Arab Emirates", "code": "+971"},
        {"country": "United Kingdom", "code": "+44"},
        {"country": "United States", "code": "+1"},
        {"country": "Uruguay", "code": "+598"},
        {"country": "Uzbekistan", "code": "+998"},
        {"country": "Vanuatu", "code": "+678"},
        {"country": "Vatican City", "code": "+39"},
        {"country": "Venezuela", "code": "+58"},
        {"country": "Vietnam", "code": "+84"},
        {"country": "Yemen", "code": "+967"},
        {"country": "Zambia", "code": "+260"},
        {"country": "Zimbabwe", "code": "+263"}
    ]

    countriesCodes.forEach((country) => {
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
    const optionsContainer = document.createElement("DIV");
    newSelectElement.setAttribute("class", "select__field");
    newSelectElement.innerHTML = selectElement.options[selectElement.selectedIndex].innerHTML;
    selectContainer.appendChild(newSelectElement);
    optionsContainer.setAttribute("class", "select__items select__hide");
    for (let j = 1; j < optionsAmount; j++) {
        const optionItem = document.createElement("DIV");
        optionItem.innerHTML = selectElement.options[j].innerHTML;
        optionItem.addEventListener("click", function () {
            for (let i = 0; i < optionsAmount; i++) {
                if (selectElement.options[i].innerHTML === this.innerHTML) {
                    selectElement.selectedIndex = i;
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
        countryCode = countriesCodes.find(item => item.country === value).code;
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