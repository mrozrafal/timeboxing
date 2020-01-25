import React from "react";
import Clock from "../../components/Clock";
import ReactDOM from "react-dom";

var root = null;
describe('<Clock />', () => {
    describe('when given minutes and seconds', () => {
        beforeEach(() => {
            root = document.createElement("div");
            ReactDOM.render(
                <Clock minutes={25} seconds={50} />, root
            )
        });

     
        it('renders propertly', () => {
            expect(root.childNodes[0].nodeName).toEqual("H2")
            expect(root.childNodes[0].className).toMatch(/Clock/)
            expect(root.childNodes[0].textContent).toMatch(/25:50/)
        });
        it('renders an h2 element', () => {
            expect(root.childNodes[0].nodeName).toEqual("H2")
        });
        it('sets a Clock className', () => {
            expect(root.childNodes[0].className).toMatch(/Clock/)
        });
        it('renders time propertly', () => {
            expect(root.childNodes[0].textContent).toMatch(/25:50/)
        });
    });
    it('sets className to empty string if not given anything else', () => {
        expect(<Clock minutes={25} seconds={50} />).toEqual(<Clock className="" minutes={25} seconds={50} />)
    });
});