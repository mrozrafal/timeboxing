import React from "react";
import Clock from "../../components/Clock";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";


var root = null;
var clockRenderer = null;
describe('<Clock />', () => {
    describe('when given minutes and seconds (DOM)', () => {
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

    describe('when given minutes and seconds (TestRenderer)', () => {
        beforeEach(() => {
            clockRenderer = renderer.create(
                <Clock minutes={25} seconds={50} />
            )
        });


        it('renders propertly', () => {
            console.log(clockRenderer.toJSON())
            expect(clockRenderer.toJSON()).toMatchSnapshot()
        });
        it('renders an h2 element', () => {
            expect(clockRenderer.toJSON().type).toEqual("h2")
        });
        it('sets a Clock className', () => {
            expect(clockRenderer.toJSON().props).toMatchObject({"className": expect.stringMatching(/Clock/)})
        });
        it('renders time propertly', () => {
            expect(clockRenderer.toJSON().children).toEqual(expect.arrayContaining(["25", "50"]))
        });
    });

    it('sets className to empty string if not given anything else', () => {
        expect(<Clock minutes={25} seconds={50} />).toEqual(<Clock className="" minutes={25} seconds={50} />)
    });
});