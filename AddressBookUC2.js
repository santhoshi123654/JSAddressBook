class AddressBookContact {
    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;

    constructor(...params){
        this.firstName=params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zipCode = params[5];
        this.phoneNumber = params[6];
        this.emailId = params[7];
    }

//getter and setter methods

    getfirstName(){
        return this.firstName ;
    } 

    setfirstName(firstName){
        let pattern = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (pattern.test(firstName)){
            this.firstName = firstName;
    }
    else {
            throw "firstName is incorrect...." 
        }
    }

    getlastName(){
        return this.lastName ;
    } 

    setlastName(lastName){
        let lastnamepattern = RegExp("^[A-Z]{1}[a-z]{3,}$");
    if (lastnamepattern.test(lastName)){
            this.lastName = lastName;
    }
    else {
            throw "lastName is incorrect...." 
        }
    }

    getaddress(){
        return this.address ;
    } 

    setaddress(address){
        let addresspattern = RegExp("^[A-Z][a-z]{3,}$");
    if (addresspattern.test(address)){
            this.address = address;
    }
    else {
            throw "address is incorrect...." 
        }
    }

    getcity() {
        return this._city;
    }
    setcity(city) {
        let citypattern = RegExp("[A-Za-z ]{4,}");
        if (citypattern.test(city)) {
            this._city = city;
        }
        else throw "City is Incorrect";
    }

    getstate() {
        return this.state;
    }
    setstate(state) {
        let statepattern = RegExp("[A-Za-z ]{4,}");
        if (statepattern.test(state)) {
            this.state = state;
        }
        else throw "State is Incorrect";
    }

    getzipCode() {
        return this._zip;
    }
    setzipCode(zip) {
        let zipCodePattern = RegExp("^[1-9]{1}[0-9]{2}[ ]?[0-9]{3}$");
        if (zipCodePattern.test(zipCode)) {
            this.zipCode = zipCode;
        }
        else throw "zipCode is Incorrect";
    }

    getphoneNumber() {
        return this.phoneNumber;
    }
    setphoneNumber(phoneNumber) {
        let PhoneNumberPattern = RegExp("^[1-9]{1}[0-9]{9}$");
        if (PhoneNumberPattern.test(phoneNumber)) {
            this.phoneNumber = phoneNumber;
        }
        else throw "PhoneNumber is Incorrect";
    }

    getemailId() {
        return this.emailId;
    }
    setemailId(emailId) {
        let emailIdPattern = RegExp("^[a-z0-9]+(([._+-][a-z0-9]+)?)@[a-z0-9]+.(([a-z]{2,4})(.[a-z]{2,4})?)$");
        if (emailIdPattern.test(emailId)) {
            this.emailId = emailId;
        }
        else throw "EmailId is Incorrect";
    }

    toString(){
        return "firstName ="  +this.firstName+",lastName =" + this.lastName+ 
        ",address =" + this.address + ",city =" + this.city + ",state =" + this.state +
        ",zipCode =" + this.zipCode + ",phoneNumber =" + this.phoneNumber + ",emailId =" + this.emailId; 
    }
}

    let AddressBookContactObj = new AddressBookContact("Santhu"," Badam","Padmavathi Colony","Mahabubnagar"
                                                    ,"Telangana",509001,9876543210,"santhu@123gmail.com");

    console.log(AddressBookContactObj.toString());
