const { render, screen } = require("@testing-library/react");
const { default: GifGrid } = require("../../src/components/GifGrid");
const { useFetchGifs } = require("../../src/hooks/useFetchGifs");
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en GifGrid", () => {

  const category = "One Punch";

  test("debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
        images:[],
        isLoading:true
    })
    
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
        {
            id:'ABC',
            title: 'Saitama',
            url:'https://localhost/saitama.jpg'
        },
        {
            id:'123',
            title: 'Goku',
            url:'https://localhost/goku.jpg'
        }
    ]
    useFetchGifs.mockReturnValue({
        images:gifs,
        isLoading:false
    })

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
  });
});
