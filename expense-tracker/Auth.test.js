
import { render, screen } from "@testing-library/react";
import Auth from "./Auth";

describe('Auth Component', () => {
    test('render Login when the button was not clicked', () => {
        render(<Auth />);

        const outputElement = screen.getByText('Login', { exact: false});
        expect(outputElement).toBeInTheDocument();
    })

    test('render Signup when the button was clicked', () => {
        render(<Auth />);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.getByText('Login');
        expect(outputElement).toBeInTheDocument();
    })
} )