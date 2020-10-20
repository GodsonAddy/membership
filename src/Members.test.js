import React from 'react';
import {render} from '@testing-library/react';
import Login from './Components/Login.js';
import MemberForm from './Components/MemberForm.js';
import ReactDOM from 'react-dom';
import NavBar from './Components/NavBar';
import Transition from './Components/Transition';
import Telephone from './Components/Telephone';
import SMS from './Components/sendMemberMessage';



test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Login />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Telephone />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<SMS />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<Transition />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<MemberForm />, root)
})

test("renders without crashing", () => {
    const root = document.createElement("div");
    ReactDOM.render(<NavBar.WrappedComponent />, root)
})

test('renders the correct content', () => {
    const { getByTestId, getByText} = render(<NavBar.WrappedComponent/>);
    getByTestId("button")
    getByText("Welcome")
})

test('renders the correct content', () => {
    const { getByTestId, getByText} = render(<Transition/>);
    getByTestId("button")
    getByText("We're a team!")
})

test('renders the correct content', () => {
    const { getByTestId, getByText} = render(<SMS/>);
    getByTestId("button")
    getByText("Send Text")

})
