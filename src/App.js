import './App.css';
import Main from './pages/Main';
import DeliveryInfo from './pages/DeliveryInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			{/* <Test /> */}
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/info" component={DeliveryInfo} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
