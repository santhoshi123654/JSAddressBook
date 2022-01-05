class AddressBookContact {

    firstName;
    lastName;
    address;
    city;
    state;
    zipCode;
    phoneNumber;
    emailId;

constructor(firstName,lastName,address,city,state,zipCode,phoneNumber,emailId){
    this.firstName=firstName;
    this.lastName = lastName;
    this.address = address;
    this.city =city;
    this.state = state;
    this.zipCode = zipCode;
    this.phoneNumber = phoneNumber;
    this.emailId = emailId;
}
    toString(){
        return "firstName ="  +this.firstName+",lastName =" + this.lastName+ 
        ",address =" + this.address + ",city =" + this.city + ",state =" + this.state +
        ",zipCode =" + this.zipCode + ",phoneNumber =" + this.phoneNumber + ",emailId =" + this.emailId; 
    }
}
  let addressBookContact = new AddressBookContact("Santhu"," badam","Padmavathi Colony","Mahabubnagar"
    ,"Telangana",509001,9876543210,"santhu@123gmail.com");

    console.log(addressBookContact.toString());