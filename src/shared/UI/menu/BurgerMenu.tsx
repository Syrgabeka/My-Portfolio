import Button from "../ui/Button";
import "./scss/menuStyle.scss"; // Импортируйте стили для BurgerMenu

interface MenuItem {
  id: string;
  name: string;
  offset: number;
}

interface BurgerMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  data: MenuItem[];
  scrollToElement: (elementId: string, offset?: number) => void;
}

const BurgerMenu = ({
  isMenuOpen,
  toggleMenu,
  data,
  scrollToElement,
}: BurgerMenuProps) => {
  return (
    <div className="burger-menu">
      <button className="burger-button" onClick={toggleMenu}>
        <span className="burger-icon">{isMenuOpen ? `✖` : "☰"} </span>
      </button>
      {isMenuOpen && (
        <div className="menu-dropdown">
          {data.map(({ id, name, offset }) => (
            <Button key={id} onClick={() => scrollToElement(id, offset)}>
              {name}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
