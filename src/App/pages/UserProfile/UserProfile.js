import React, { Component } from 'react';
import LoadingSpinner from '../../Spinner';


class UserProfile extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      user: null
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    this.getUserById(this.props.match.params.id);
  }

  getUserById = (id) => {
    fetch(`/api/getUser/${id}`)
    .then((res) => res.json())
    .then((result) => {
      this.setState({
        user: result,
        isLoading: false
      })
      console.log(result)
      console.log(this.state)
    })
  }

  render() {
    if (this.state.isLoading) {
      return <LoadingSpinner />
    } else {
      const { email, first_name, last_name, image_url, phone_number, address } = this.state.user[0]

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
						<td>ROLE</td>
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
							<td>Hearing</td>
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
				<h2>Submitted Forms (5)</h2>
				<table>
					<tr>
						<th>Form Name</th>
						<th>Date Submitted</th>
						<th>View</th>
					</tr>
					<tr>
						<td>Form 1</td>
						<td>Sep 22 2018</td>
						<td><button>view</button></td>
					</tr>
					<tr>
						<td>Form 2</td>
						<td>Sep 22 2018</td>
						<td><button>view</button></td>
					</tr>
					<tr>
						<td>Form 3</td>
						<td>Sep 22 2018</td>
						<td><button>view</button></td>
					</tr>
					<tr>
						<td>Form 4</td>
						<td>Sep 22 2018</td>
						<td><button>view</button></td>
					</tr>
					<tr>
						<td>Form 5</td>
						<td>Sep 22 2018</td>
						<td><button>view</button></td>
					</tr>
				</table>
			</div>
        </div>

    )
  } 
  }
}

export default UserProfile