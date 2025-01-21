import React, { useState } from 'react';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Counter from './components/counter.jsx';
import DataTable from './components/dataTable.jsx';
import Form from './components/form.jsx';
import Hook from './components/hook.jsx';

const App = () => {
    const peopleData = [
        { name: "Zahin", age: 22, email: "zahin@example.com" },
        { name: "Ahsan", age: 25, email: "ahsan@example.com" },
        { name: "Rifat", age: 23, email: "rifat@example.com" },
    ];

    return (
        <>
            <Header title="My Application" />
            <main className="main-container">
                <Counter />
                <Form />
                <Hook />
                <DataTable data={peopleData} />
            </main>
            <Footer />
        </>
    );
}

export default App;
