import { render, waitFor } from '@testing-library/react-native'
import renderer, { act } from 'react-test-renderer'
import Home from  '../src/screens/Home'

let component

describe("<Home />", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([
        {
          "cobre": {
            "key": "cobre",
            "name": "Precio del Cobre, dólares por libra",
            "unit": "dolar",
            "date": 1584489600,
            "value": 2.39
          },
          "dolar": {
            "key": "dolar",
            "name": "Dólar observado",
            "unit": "pesos",
            "date": 1598832000,
            "value": 779.92
          }
        }
      ])
    }))
    component = render(<Home />)
  })


  it("Should rendering correctly", () => {
    expect(component).toBeDefined()
  })

  it('Should has 1 child', () => {
    const tree = renderer.create(<Home />).toJSON();
    console.log(tree)
    expect(tree.children.length).toBe(3);
  });

/*   it('Should rendering child cards after API call', () =>  {
    act(() => {
    })

    waitFor(()  => expect(component.getByTestId("indicator-card")).toBeDefined())
  }) */
})