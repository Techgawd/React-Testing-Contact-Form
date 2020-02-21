import React from "react";
import ContactForm from './ContactForm';
import { render, fireEvent } from "@testing-library/react";
import 'mutationobserver-shim';

test("renders App without crashing", () => {
    render(<ContactForm />);
  });


test("inputs are rendered", () => {
    const { getByTestId } = render(<ContactForm />);
    getByTestId('nameOfYourChoice')
})

// test("inputs are rendered", () => {
//     const { getByLabelText } = render(<ContactForm />);
//     // getByLabelText(/first name/i);

//     getByLabelText("email", {options: { selector: 'input'}});
// })

// test("form submit displays data", () => {
//     const { getByLabelText, getByText } = render(<ContactForm />);
//     const firstName = getByLabelText(/first name/i);
//     const lastName = getByLabelText(/last name/i);
//     const email = getByLabelText(/email/i);
//     const message = getByLabelText(/message/i);
//     fireEvent.change(firstName, { target: { value: "testName" } });
//     fireEvent.change(lastName, { target: { value: "testName" } });
//     fireEvent.change(email, { target: { value: "testEmail" } });
//     fireEvent.change(message, { target: { value: "testMessage" } });
//     expect(firstName.value).toBe("testName");
//     expect(firstName.value).toBe("testName");
//     expect(firstName.value).toBe("testEmail");
//     expect(firstName.value).toBe("testMessage");
//     fireEvent.click(getByText(/submit/i));
//     const testText = getByText(/testName/i);
//     expect(testText).toBeInTheDocument();
//   });