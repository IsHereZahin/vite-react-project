import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Router components
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Counter from './components/counter.jsx';
import DataTable from './components/dataTable.jsx';
import Form from './components/form.jsx';
import Hook from './components/hook.jsx';
import TodoList from './components/TodoList.jsx';

const App = () => {
    const peopleData = [
        { name: "Zahin", age: 22, email: "zahin@example.com" },
        { name: "Ahsan", age: 25, email: "ahsan@example.com" },
        { name: "Rifat", age: 23, email: "rifat@example.com" },
    ];

    return (
        <Router>
            <Header title="Just practicing React basic concept and React Router here! 😎" />

            {/* Bootstrap Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">My App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/counter">Counter</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/form">Form</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hook">Hook</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/todo">TodoList</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/datatable">DataTable</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/test">Test</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className="main-container mt-4">
                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<h2>Welcome to My Application!</h2>} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/hook" element={<Hook />} />
                    <Route path="/todo" element={<TodoList />} />
                    <Route path="/datatable" element={<DataTable data={peopleData} />} />
                    <Route path="test" element={<h2>Test Page</h2>} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
}

export default App;
