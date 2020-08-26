import React from 'react';
class Resume extends React.Component{
    constructor(){
        super();
        this.state={
            name:"Sowmya Challagulla",
		email:"sowmyach@gmail.com",
		phno:9112345678,
		object:"As a Fresher to gain knowledge and placed in a company",
		edu:[{name:"Vignan Global Gen School",year:"2015-2016",per:"100%"},
			{name:"Shri Chaitanya jr college",year:"2016-2018",per:"100%"},
			{name:"Vishnu engineering college for women",year:"2018-2022",per:"100%"}
		],
		skills:["c","c++","java","mysql","reactjs"],
		soft:["playing Throwball","Active in Group Discussion","Lead the team"]

		        }
    }
    render(){
        return(
            <div>
                <div className="row pr">
                <div className="col-3">
                <img className="img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQxarVveyPMPEdVg6SPA2sfPgIWT-Jqot0qOw&usqp=CAU"/>
                </div>
                    <div className="col-5">
            <h1 className="name">{this.state.name}</h1>
            </div>
            <div className="col-4">
            <h4 className="email">{this.state.email}</h4>
            <h4  className="phno">{this.state.phno}</h4>
            </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <h2>Career Objective</h2>
            </div>
                <div className="col-md-8">
                    <h3>{this.state.object}</h3>
            </div>
        </div>
        <div className="row">
                <div className="col-md-4">
                <h2>Education Qualification</h2>
            </div>
                <div className="col-md-8">
                    <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">College/School</th>
              <th scope="col">Name</th>
              <th scope="col">Batch</th>
              <th scope="col">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">10TH standard</th>
              <td>{this.state.edu[0].name}</td>
              <td>{this.state.edu[0].year}</td>
              <td>{this.state.edu[0].per}</td>
            </tr>
            <tr>
              <th scope="row">12th Standard</th>
              <td>{this.state.edu[1].name}</td>
              <td>{this.state.edu[1].year}</td>
              <td>{this.state.edu[1].per}</td>

            </tr>
            <tr>
              <th scope="row">B.tech</th>
              <td>{this.state.edu[2].name}</td>
              <td>{this.state.edu[2].year}</td>
              <td>{this.state.edu[2].per}</td>

            </tr>
          </tbody>
        </table>
            </div>
        </div>
        
        <div className="row">
	<div className="col-md-4">
		<h2>Technical Skills</h2>
	</div>
	<div className="col-md-8">
		<ul>
        {this.state.skills.map(name => (
        <li>
          {name}
        </li>
      ))}

		</ul>
	</div>
    </div>
    <div className="row">
	<div className="col-md-4">
		<h2>Soft Skills</h2>
	</div>
	<div className="col-md-8">
		<ul>
        {this.state.soft.map(name => (
        <li>
          {name}
        </li>
      ))}

		</ul>
	</div>
    </div>
</div>

               
        
              );


    }

}
export default Resume;
