import React, { Component } from 'react';
import LoadingSpinner from '../../Spinner';


class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      user: null,
			roles: null,
			forms: null
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    this.getUserAndRoleById(this.props.match.params.id);
  }

  getUserAndRoleById = (id) => {
    Promise.all([
      fetch(`/api/getUser/${id}`),
			fetch(`/api/getUserRoles`),
			fetch(`/api/getUserSubmittedFormsById/${id}`)
    ])
    .then(([res1, res2, res3]) => Promise.all([res1.json(), res2.json(), res3.json()]))
    .then(([user, roles, forms]) => {
      this.setState({
        user: user,
				roles: roles,
				forms: forms,
        isLoading: false
      })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />
    } else {
      const { email, first_name, last_name, image_url, phone_number, address, role_id } = this.state.user[0]

      return (
        <div>
          <div className="employeeContainer">
          <h2>{first_name} {last_name}</h2>
          <img src={image_url} alt="profile_photo"/>
        </div>
        <div>
          <h2>Contact Info</h2>
          <table>
					<thead>
            <tr>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
					<tr>
						<td>{email}</td>
						<td>{phone_number}</td>
						<td>{address}</td>
						<td>{(this.state.roles.find(id => role_id)).role}</td>
					</tr>
          </tbody>
				</table>
        </div>
        <div class="formContainer">
				<h2>Training/Certs (3)</h2>
				<table>
          <thead>
						<tr>
							<th>Name</th>
							<th>Expiration Date</th>
							<th>View Document</th>
						</tr>
          </thead>
          <tbody>
						<tr>
							<td>{this.state.forms[0].id}</td>
							<td>03/20/2018</td>
							<td><button>view</button></td>
						</tr>
						<tr>
							<td>Driving</td>
							<td>11/03/2019</td>
							<td><button>view</button></td>
						</tr>
						<tr>
							<td>Forklift</td>
							<td>01/31/2019</td>
							<td><button>view</button></td>
						</tr>
          </tbody>
					</table>
        </div>
        <div class="formContainer">
				<h2>Submitted Forms ({this.state.forms.length})</h2>
				<table>
					<thead>
						<tr>
							<th>Form Type</th>
							<th>Date Submitted</th>
							<th>View</th>
						</tr>
					</thead>
					<tbody>
						{this.state.forms.map((form) => {
							return (
								<tr>
									<td>{form.type}</td>
									<td>{form.date_created}</td>
									<td><button>view</button></td>
							</tr>
							)
						})}
					</tbody>
				</table>
			</div>
    </div>

    )
  } 
  }
}

export default UserProfile