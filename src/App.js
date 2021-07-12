import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog'
import Footer from './components/Footer/Footer';
import MainContainer from './components/Main/MainContainer.js';

const App = (props) => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={MainContainer} />
                <Route path='/catalog' component={Catalog} />
                {/* <Route path='/delivery' component={Delivery} />
                <Route path='/about-us' component={About} />
                <Route path='/favorite' component={Favorite} />
                <Route path='/bag' component={Bag} />
                <Route path='/profile' component={Profile} /> */}
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
