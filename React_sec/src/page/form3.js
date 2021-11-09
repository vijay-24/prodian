import React from 'react';




class form3 extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
          people: [
            { "id" :1 ,"name": "John", "lastName": "Doe", "dob": "12/12/2010" ,"email":"john@gmail.com","mobile":"9788331203"},
            { "id" :2 ,"name": "Michael", "lastName": "Smith", "dob": "12/12/2010","email":"michael@gmail.com" ,"mobile":"9788331203"},
            { "id" :3 ,"name": "Carol", "lastName": "Jordan", "dob": "12/12/2010","email":"michael@gmail.com","mobile":"9788331203" },
            { "id" :4 , "name": "Tanya", "lastName": "Blake", "dob": "12/12/2010","email": "tanya@gmail.com","mobile":"9788331203"}
        
          ]
        };
    
        this.addPerson = this.addPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);

        // form
        this.formSubmit = this.formSubmit.bind(this);
      }
    
      addPerson(name, email) {
        this.setState(prevState => ({
          people: [...prevState.people, { name, email }]
        }));
      }
    
      componentDidMount() {
        this.getPeople();
      }
    
      getPeople() {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //   .then(response => response.json())
        //   .then(response => this.setState({ people: response }))
        //   .catch(error => console.log(error));

          this.setState({ people: this.state.people })
      }
    
      deletePerson(email) {
        return () => {
          this.setState(prevState => ({
            people: prevState.people.filter(person => person.email !== email)
          }));
        };
      }
    
    //   ----form
      formSubmit(event) {
         console.log("formsubmit");
        event.preventDefault();
        const form = event.target;
        const email = form.elements["email"].value;
        const name = form.elements["name"].value;
        this.addPerson(name, email);
        form.reset();
      }
    
    

    render(){
        return(<>
            <div>
        <form3 addPerson={this.addPerson} />
        <table>
          <thead>
            <tr>
              <th>LP</th>
              <th>USER</th>
              <th>EMAIL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.people.map((person, index) => {
              return (
                <tr key={person.email}>
                  <th>{index + 1}</th>
                  <td>{person.name}</td>
                  <td>{person.email}</td>
                  <td>
                    <button onClick={this.deletePerson(person.email)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


      {/* form */}
      <form onSubmit={this.formSubmit.bind(this)}>
        <input
          id="name"
          type="text"
          defaultValue=""
          placeholder="Name..."
        />
        <input
          id="email"
          type="text"
          defaultValue=""
          placeholder="Email..."
        />
        <input type="submit" value="submit" />
      </form>
 
        </>);
    }
}

export default form3