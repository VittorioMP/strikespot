import React, { Component } from "react";

export class Login extends Component {
    state = {
        ime: '',
        prezime: '',
        email: '',
        password: '',
        mjestostanovanja: '',
        phone: '',
        dob: '',
        errors: {
            phone: '',
            dob: ''
        }
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("Forma je potvrđena", this.state);
    };

    handleBlur = (e) => {
        const { name, value } = e.target;
        let errors = this.state.errors;

        if (name === 'phone' || name === 'dob') {
            const regex = /^[0-9]*$/;
            if (!regex.test(value)) {
                errors[name] = `${name === 'phone' ? 'Broj telefona' : 'Datum rođenja'} treba sadržavati samo brojeve.`;
            } else {
                errors[name] = '';
            }
        }

        this.setState({ errors });
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="form-container">
                <h1>Moje ime je {this.state.ime}</h1>
                <form>
                    <input 
                        placeholder='Ime' 
                        value={this.state.ime} 
                        onChange={e => this.setState({ ime: e.target.value })} 
                    />
                    <input 
                        placeholder='Prezime' 
                        value={this.state.prezime} 
                        onChange={e => this.setState({ prezime: e.target.value })} 
                    />
                    <input 
                        placeholder='E-mail adresa' 
                        value={this.state.email} 
                        onChange={e => this.setState({ email: e.target.value })} 
                    />
                    <input 
                        placeholder='Unesi lozinku' 
                        type='password' 
                        value={this.state.password} 
                        onChange={e => this.setState({ password: e.target.value })} 
                    />
                    <input 
                        placeholder='Mjesto stanovanja' 
                        value={this.state.mjestostanovanja} 
                        onChange={e => this.setState({ mjestostanovanja: e.target.value })} 
                    />
                    <input 
                        name='phone'
                        placeholder='Broj telefona' 
                        value={this.state.phone} 
                        onChange={e => this.setState({ phone: e.target.value })} 
                        onBlur={this.handleBlur}
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                    <input 
                        name='dob'
                        placeholder='Datum rođenja' 
                        type='date' 
                        value={this.state.dob} 
                        onChange={e => this.setState({ dob: e.target.value })} 
                        onBlur={this.handleBlur}
                    />
                    <button onClick={e => this.onSubmit(e)}>Potvrdi</button>
                </form>
            </div>
        );
    }
}

export default Login;