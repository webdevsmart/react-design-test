import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index_swipe.css';
import { Table, Tabs, Tab } from 'react-bootstrap';



class TestTable extends Component {

	render() {
		return (
			<div class="zui-wrapper">
				<div class="zui-scroller">

					<Table striped bordered hover variant="zui-table" size="sm">
						<thead>
							<tr>
								<th class="zui-sticky-col">Incsurance Companies</th>
								<th>TPL</th>
								<th>Own Damage</th>
								<th>Total Loss</th>
								<th>Special Cover</th>
								<th>Premium in EGP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="zui-sticky-col">AXA</td>
								<td>Exceeding Pool</td>
								<td>10,000/-</td>
								<td>50% of Vehicle declared value</td>
								<td></td>
								<td>1000/-</td>
							</tr>
							<tr>
								<td class="zui-sticky-col">ALLIANZ</td>
								<td>Exceeding Pool</td>
								<td>10,000/-</td>
								<td>50% of Vehicle declared value</td>
								<td></td>
								<td>1000/-</td>
							</tr>
							<tr>
								<td class="zui-sticky-col">SARWA</td>
								<td>Exceeding Pool</td>
								<td>10,000/-</td>
								<td>50% of Vehicle declared value</td>
								<td></td>
								<td>1000/-</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}
class TestTable1 extends Component {

	render() {
		return (
			<div class="zui-wrapper">
				<div class="zui-scroller">

					<Table striped bordered hover variant="zui-table" size="sm">
						<thead>
							<tr>
								<th class="zui-sticky-col">Incsurance Companies</th>
								<th>TPL</th>
								<th>Own Damage</th>
								<th>Total Loss</th>
								<th>Special Cover</th>
								<th>Premium in EGP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="zui-sticky-col">AXA</td>
								<td>Pool</td>
								<td>Full Cover</td>
								<td>100% of Declared Value /Depreciation Rate Applied</td>
								<td>100% of Declared Value /Depreciation Rate Applied</td>
								<td>6,000/-</td>
							</tr>
							<tr>
								<td class="zui-sticky-col">ALLIANZ</td>
								<td>Pool</td>
								<td>Full Cover</td>
								<td>100% of Declared Value /Depreciation Rate Applied</td>
								<td>DR 1.2% month</td>
								<td>12,000/-</td>
							</tr>
							<tr>
								<td class="zui-sticky-col">SARWA</td>
								<td>Pool</td>
								<td>Full Cover</td>
								<td>100% of Declared Value /Depreciation Rate Applied</td>
								<td>100% of Declared Value /Depreciation Rate Applied</td>
								<td>5,000/-</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}
class TestTable2 extends Component {

	render() {
		return (
			<div class="zui-wrapper">
				<div class="zui-scroller">

					<Table striped bordered hover variant="zui-table" size="sm">
						<thead>
							<tr>
								<th class="zui-sticky-col">Incsurance Companies</th>
								<th>TPL</th>
								<th>Own Damage</th>
								<th>Total Loss</th>
								<th>Special Cover</th>
								<th>Premium in EGP</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="zui-sticky-col">AXA</td>
								<td>Exceeding Pool</td>
								<td>Full Cover applying Depreciation Rate</td>
								<td>100% of Declared Value</td>
								<td>Free Geographical Extension and Passengers Cover</td>
								<td>7000/-</td>
							</tr>
							<tr>
								<td class="zui-sticky-col">ALLIANZ</td>
								<td>Exceeding Pool</td>
								<td>Full Cover applying Depreciation Rate</td>
								<td>100% of Declared Value</td>
								<td>Free Passengers Cover</td>
								<td>16000/-</td>
							</tr>
							<tr>
								<td class="zui-sticky-col">SARWA</td>
								<td>Pool</td>
								<td>Full Cover applying Depreciation Rate</td>
								<td>100% of Declared Value</td>
								<td>Free Passengers Cover</td>
								<td>7000/-</td>
							</tr>
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}
function ControlledTabs() {
	return (
		<Tabs defaultActiveKey="tpl" id="insurance-tab">
			<Tab eventKey="tpl" title="TPL+">
				<TestTable />
			</Tab>
			<Tab eventKey="com" title="Comprehensive">
				<TestTable1 />
			</Tab>
			<Tab eventKey="com1" title="Comprehensive+">
				<TestTable2 />
			</Tab>
		</Tabs>
	);
}
ReactDOM.render(<ControlledTabs />, document.getElementById('root'));