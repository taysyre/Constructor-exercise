function PersonDetails(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;

    this.getFirstName = () => {
    return this.firstName
    }
    this.getLastName = () => {
    return this.lastName
    }
    this.getEmail = () => {
    return this.email
    }

    this.setFirstName = (newFirstName) => {
    this.firstName = newFirstName
    }
    this.setLastName = (newLastName) => {
    this.lastName = newLastName
    }
    this.setEmail = (newEmail) => {
    this.email = newEmail
    }

    this.display = () => {
    console.log('Only');
    console.table(this);
    }

}
    
    

    let person1 = new PersonDetails('Tyvon', 'April', 'tayapril3@gmail.com');
    
    // console.table(person1);
    person1.display();
