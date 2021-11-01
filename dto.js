class Friend {
    constructor(id, { firstName, lastName, gender, email, age }) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.email = email;
        this.age = age;
    }
}

module.exports = {
    Friend
}