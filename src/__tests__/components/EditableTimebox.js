import { render, cleanup, fireEvent, getByLabelText } from '@testing-library/react';
import React from "react";
import EditableTimebox from '../../components/EditableTimebox';



describe('<Editable Timebox />', () => {
    afterEach(cleanup)
    it('shows submit button', () => {
        const { getByText } = render(<EditableTimebox />)
        expect(() => {
            getByText("Zatwierdź zmiany"
            )
        }).not.toThrow()
    });


    it('allows submit changes', () => {
        const { getByText, getByLabelText } = render(<EditableTimebox />)
        fireEvent.change(getByLabelText("Co robisz?"), { target: { value: 'nowy tekst' } })
        
         expect(() => {
            getByText("Zatwierdź zmiany")
        })

        fireEvent.click(getByText("Zatwierdź zmiany"))
        expect(() => {
            getByText("Edytuj")
        }).not.toThrow()
    });

});