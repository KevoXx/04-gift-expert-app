import { render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('Prueba en <GifExpertApp/>', () => { 
     test('debe de hacer match con el snaphshot', () => { 
        const {container} = render(<GifExpertApp/>)
        
        expect(container).toMatchSnapshot();
      })
      test('debe de estar el input vacio', () => { 
        render(<GifExpertApp/>)
        const input = screen.getByRole('textbox')
        expect(input.value).toBe("")
       })
 })