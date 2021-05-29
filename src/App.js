import './App.css';
import Main from './pages/Main';
import DelivaryInfor from './pages/DeliveryInfo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/info" component={DelivaryInfor} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
