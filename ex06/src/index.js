const firstName = (firstName) => {
    return firstName.toUpperCase();

}
const lastName = (lastName) => {
        return lastName.toLowerCase();

    }
    // console.log(firstName("John"));
    // console.log(lastName("Doe"));
exports.firstName = firstName;
exports.lastName = lastName;