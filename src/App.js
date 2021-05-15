import './App.css';
import MainPageComponent from './main/index.js';
import UploadPage from "./upload"
import ProductPage from "./product"
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div>
            <div id="header">
            <div id="header-area">
                <img src="/images/icons/잇츠마인.png" width="150"/>
            </div>
            </div>
            <div id="body">
                <Switch>
                    <Route exact={true} path="/">
                        <MainPageComponent/>
                    </Route>
                    <Route exact={true} path="/products/:id">
                        <ProductPage/>
                    </Route>
                    <Route exact={true} path="/upload">
                        <UploadPage/>
                    </Route>
                </Switch>
            </div>
            <div id="footer">
                
            </div>
        </div>
    );
}

export default App; 