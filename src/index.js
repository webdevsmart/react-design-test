import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Table, Tabs, Tab, Container, Row, Col } from 'react-bootstrap';



class Comparison1 extends Component {
	render() {
		return (
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>TPL</th>
								<th>Own Damage</th>
								<th>Total Loss</th>
								<th>Special Cover</th>
								<th>Premium in EGP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Exceeding Pool</td>
								<td>10,000/-</td>
								<td>50% of Vehicle declared value</td>
								<td></td>
								<td>1000/-</td>
							</tr>
						</tbody>
					</Table>

		);
	}
}
class Comparison2 extends Component {
	render() {
		return (
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>TPL</th>
								<th>Own Damage</th>
								<th>Total Loss</th>
								<th>Special Cover</th>
								<th>Premium in EGP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Exceeding Pool</td>
								<td>10,000/-</td>
								<td>50% of Vehicle declared value</td>
								<td></td>
								<td>1000/-</td>
							</tr>
						</tbody>
					</Table>

		);
	}
}
class Comparison3 extends Component {
	render() {
		return (
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>TPL</th>
								<th>Own Damage</th>
								<th>Total Loss</th>
								<th>Special Cover</th>
								<th>Premium in EGP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Exceeding Pool</td>
								<td>10,000/-</td>
								<td>50% of Vehicle declared value</td>
								<td></td>
								<td>1000/-</td>
							</tr>
						</tbody>
					</Table>

		);
	}
}

function ControlledTabs() {
	return (
		<Tabs defaultActiveKey="tpl" id="insurance-tab">
			<Tab eventKey="tpl" title="TPL+">
				<Comparison1 />
			</Tab>
			<Tab eventKey="com" title="Comprehensive">
				<Comparison2 />
			</Tab>
			<Tab eventKey="com1" title="Comprehensive+">
				<Comparison3 />
			</Tab>
		</Tabs>
	);
}
class Company extends Component {
	render() {
		return (
			<Container>
				<Row>
					<div className="company-box">
						<Col md="12"><h6>AXA</h6></Col>
						<Col md="12"><ControlledTabs/></Col>
					</div>
				</Row>
				<Row>
					<div className="company-box">
						<Col md="12"><h6>ALLIANZ</h6></Col>
						<Col md="12"><ControlledTabs/></Col>
					</div>
				</Row>
				<Row>
					<div className="company-box">
						<Col md="12"><h6>SARWA</h6></Col>
						<Col md="12"><ControlledTabs/></Col>
					</div>
				</Row>
			</Container>
		);
	}
}

ReactDOM.render(<Company />, document.getElementById('root'));