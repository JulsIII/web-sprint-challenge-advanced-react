import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {

    render(<CheckoutForm/>);

});

test("form shows success message on submit with form details", async () => {
    //Act:
    //  1. Get our input fields.
    const fNameInput = screen.getByLabelText(/first name/i);
    const lNameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);

    //  2. Type values into our input fields.
    userEvent.type(fNameInput, "Bob");
    userEvent.type(lNameInput, "Bobblin");
    userEvent.type(addressInput, "4321 South Bobbles St");
    userEvent.type(cityInput, "Bobville");
    userEvent.type(stateInput, "Bexus");
    userEvent.type(zipInput, "60602");

    //  3. Push the submit button.
    const button = screen.getByRole('button');
    userEvent.click(button);
    
    //Assert:
    // Info is on the screen.
    const newfName = await screen.findByDisplayValue("Bob");
    const newlName = await screen.findByDisplayValue("Bobblin"); 
    const newAddress = await screen.findByDisplayValue("4321 South Bobbles St");  
    const newCity = await screen.findByDisplayValue("Bobville");
    const newState = await screen.findByDisplayValue("Bexus");  
    const newZip = await screen.findByDisplayValue("60602");
    expect(newfName).toBeInTheDocument();
    expect(newlName).toBeInTheDocument();
    expect(newAddress).toBeInTheDocument();
    expect(newCity).toBeInTheDocument(); 
    expect(newState).toBeInTheDocument();
    expect(newZip).toBeInTheDocument(); 
});
