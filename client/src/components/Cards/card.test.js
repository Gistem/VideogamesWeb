import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import enzyme from "enzyme";
import Card from "./Card.js";

configure({ adapter: new Adapter() });
describe("<Card />", () => {
  const videogame = {
    id: 3498,
    name: "Grand Theft Auto V",
    rating: 4.48,
    released: "2013-09-17",
    background_image:
      "https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg",
  };

  describe("Estructure", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Card videogame={videogame} />);
    });
    it("Renderiza un <Link>", () => {
      expect(wrapper.find("Link")).toHaveLength(1);
    });

    it("Renderiza una div", () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("div")).toHaveLength(4);
    });
    it("Renderiza una span", () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("span")).toHaveLength(0);
    });
    it("Renderiza una h4", () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("h4")).toHaveLength(0);
    });
    it("Renderiza una button", () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("button")).toHaveLength(1);
    });
    it("Renderiza una imagen", () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("img")).toHaveLength(1);
    });
  });
});
