import React from 'react';
import './AdmissionForm.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import studentservice from './services/studentservice';
class Formweb extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            sname: "",
            dob: "",
            clas: "select",
            division: "select",
            gender: "",
            error: {},
            student: []

        }; this.initialState = this.state;
    }
    validation() {
        let error = {};
        let IsValid = true;
        if (!this.state.sname.trim()) {
            IsValid = false;
            error["nameE"] = "Name is required.";
        }
        else if (!(/^[a-zA-Z\s-, ]+$/.test(this.state.sname))) {

            IsValid = false;
            error["nameE"] = "Invalid.";
        }
        if (!this.state.dob) {
            IsValid = false;
            error["dobE"] = "Date of Birth is required.";
        }
        if (!this.state.clas === '' || this.state.clas === 'select') {
            IsValid = false;
            error["clasE"] = "Class is required";
        }
        if (!this.state.division === '' || this.state.division === 'select') {
            IsValid = false;
            error["divE"] = " Division is required";
        }
        if (!this.state.gender) {
            IsValid = false;
            error["genE"] = "Select Gender";
        }
        this.setState({ error: error });
        return IsValid;

    }



    hname = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.validation()) {


            let st = { name: this.state.sname, dob: this.state.dob, clas: this.state.clas, division: this.state.division, gender: this.state.gender };
            studentservice.createStudent(st).then(res => { console.log(res) })
            alert('Student details has been successfully registered.')
            this.setState(this.initialState)
        }
    }

    componentDidMount() {
        studentservice.getStudent().then((res) => {
            this.setState({ student: res.data });
        }
        );

    }
    render() {
        const { nameE, dobE, clasE, divE, genE } = this.state.error;
        return (
            <div>
                <h1>STUDENT REGISTRATION</h1>
                <div className="Container1">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                        <label className="font5" >Enter Your Name:</label>
                            <br />
                            <input type="text"
                                value={this.state.sname}
                                onChange={this.hname}
                                name="sname"
                                placeholder="Name"
                                className={nameE ? ' showError' : ''}>

                            </input>
                            { nameE && <div style={{ color: "red" }}>{nameE}</div> }

                        </div>
                        <label className="font5">Date of Birth:</label>
                        <br />
                        <input type="date" value={this.state.dob}
                            onChange={this.hname}
                            name="dob"
                            className={dobE ? ' showError' : ''}>

                        </input>
                        {dobE &&
                            <div style={{ color: "red" }}>{dobE}</div>
                        }
                        <br />
                        <label className="font5">Class:</label>
                        <br />
                        <select value={this.state.clas} onChange={this.hname} name="clas" className={clasE ? ' showError' : ''} >

                            <option value="select" >Select</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                            <option value="V">V</option>
                            <option value="VI">VI</option>
                            <option value="VII">VII</option>
                            <option value="VIII">VIII</option>
                            <option value="IX">IX</option>
                            <option value="X">X</option>
                            <option value="XI">XI</option>
                            <option value="XII">XII</option>
                        </select>
                        {clasE &&
                            <div style={{ color: "red" }}>{clasE}</div>
                        }
                        <br />
                        <label className="font5">Divsion:</label>
                        <br />
                        <select value={this.state.division} onChange={this.hname} name="division" className={divE ? ' showError' : ''} >
                            <option value="select">Select</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>

                        </select>
                        {divE &&
                            <div style={{ color: "red" }}>{divE}</div>
                        }

                        <br />
                        <label className="font5">Gender:</label>
                        <br />
                        <div>
                            <input type="radio" id="male" name="gender" value="male" onClick={this.state.gender === "Male"} onChange={this.hname}></input>
                            <label for="male">Male</label><br />
                            <input type="radio" id="female" name="gender" value="female" onClick={this.state.gender === "Female"} onChange={this.hname}></input>
                            <label for="female">Female</label><br />
                            {genE &&
                                <div style={{ color: "red" }}>{genE}</div>
                            }
                        </div>
                        <input type="submit" value="Submit" />





                    </form>
                </div>
                <div className="Container2">
                    <div className="row">
                        <table className="table table-stripped table-bordered">
                            <thead>
                                <tr>
                                    <th>Admission number</th>
                                    <th>Name</th>
                                    <th>Date Of Birth</th>
                                    <th>Class</th>
                                    <th>division</th>
                                    <th>Gender</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.student.map(
                                        student =>
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.name}</td>
                                                <td>{student.dob}</td>
                                                <td>{student.clas}</td>
                                                <td>{student.division}</td>
                                                <td>{student.gender}</td>


                                            </tr>

                                    )
                                }
                            </tbody>

                        </table>
                    </div>


                </div>
            </div>
        );
    }
}
export default Formweb;