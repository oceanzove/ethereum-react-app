import React from 'react';
import './App.css'
import UploadFileContainer from "./components/UploadFile/UploadFileContainer";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <div className='app-wrapper-nav'>
                    <Navbar/>
                </div>

                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/uploadfile' element={<UploadFileContainer/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
