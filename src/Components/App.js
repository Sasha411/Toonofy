import React, { Component } from 'react'
import Header from './Header/Header'
import FirstTab from './Content/Tab1/FirstTab'
import SecondTab from './Content/Tab2/SecondTab'
import ThirdTab from './Content/Tab3/ThirdTab'
import Footer from './Footer/Footer'

export class App extends Component {
    render() {
        return (
            <>
            <Header />
            <FirstTab />
            <SecondTab />
            <ThirdTab />
            <Footer />
            </>
        )
    }
}

export default App
