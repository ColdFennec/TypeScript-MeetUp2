import { render } from '@testing-library/react';
import App from './App';
import { configure, mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'


configure({adapter: new Adapter()});

describe('Render App', () => {

  it('Render App without errors', () => {
    render(<App />);
  });

  it('Show matching event when searcbar is input', () => {
    const searchEvent = "Gården";
    const section = mount(<App />);

    const input = section.find('header input');
    input.simulate("change", { target: { value: searchEvent } });


    const labelsList = section.find(".event-label")
    const titleList = labelsList.find("h2")
    

    titleList.forEach((title) => {
      const correctTitle = title.text();

      expect(correctTitle).toContain(searchEvent)
    })
  });

});
