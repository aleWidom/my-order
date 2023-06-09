import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import OrderPage from './pages/Order/OrderPage';
import AdminPage from './pages/Admin/AdminPage';
import { TableProvider } from './context/tables';
import { OrderProvider } from './context/order';
import { SearchProvider } from './context/search';
import { AdminProvider } from './context/adm';

import './styles/globals.scss';

/*import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';


Amplify.configure(awsconfig);*/

//TODO CAMBIAR HOME A PARAMETRIZADA

function App() {
	//TODO AL PATH HOME HAY QUE HACER PARAMETRIZADO
	return (
		<AdminProvider>
			<TableProvider>
				<OrderProvider>
					<SearchProvider>
						<Routes>
							<Route path={'/'} element={<HomePage />} />
							<Route path={`/order/:table`} element={<OrderPage />} />
							<Route path={`/admin`} element={<AdminPage />} />
						</Routes>
					</SearchProvider>
				</OrderProvider>
			</TableProvider>
		</AdminProvider>
	);
}

export default App;
