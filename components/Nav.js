import { useState } from 'react';
import { useRouter } from 'next/router';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter()

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const onHome = router.pathname === '/'

    return (
        <Navbar bgColor="bg-red-800" textColor="text-white">
            <Navbar.Brand href="/">
                In Training
            </Navbar.Brand>
            <Navbar.Toggler toggle={toggle} />
            <Navbar.Collapse isOpen={isOpen}>
                <Navbar.Nav right>
                    {!onHome &&
                        <Navbar.Item>
                            <Navbar.Link href="/">home</Navbar.Link>
                        </Navbar.Item>
                    }
                    <Navbar.Item>
                        <Navbar.Link href="/about">about</Navbar.Link>
                    </Navbar.Item>
                </Navbar.Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

/* Navbar logic */

const style = {
    navbar: `font-light text-white md:relative md:flex md:items-center shadow py-2 px-4 md:flex md:flex-row md:justify-start`,
    brand: `inline-block pt-1.5 pb-1.5 mr-4 cursor-pointer text-3xl whitespace-nowrap hover:text-gray-400`,
    toggler: `float-right block md:hidden pt-1.5 text-3xl focus:outline-none focus:shadow`,
    collapse: {
        default: `md:flex-grow md:items-center md:flex`,
        open: `visible opacity-1 transition-all ease-out duration-500 md:transition-none`,
        close: `invisible h-0 opacity-0 md:visible md:opacity-100 md:h-auto`,
    },
    nav: {
        left: `block pl-0 mb-0 mr-auto md:flex md:pl-0 md:mb-0`,
        center: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0 md:mx-auto `,
        right: `block pl-0 mb-0 ml-auto md:flex md:pl-0 md:mb-0`,
    },
    link: `block cursor-pointer py-1.5 md:py-1 px-4 md:px-2 hover:text-gray-400 font-medium`,
};

const Navbar = ({ bgColor, textColor, children }) => (
    <nav className={`${bgColor} ${textColor} ${style.navbar}`}>{children}</nav>
);

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
Navbar.Brand = ({ children, href }) => (
    <a href={href} className={style.brand}>
        <strong>{children}</strong>
    </a>
);

Navbar.Toggler = ({ toggle }) => (
    <button
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        className={style.toggler}
        onClick={toggle}
    >
        &#8801;
    </button>
);

Navbar.Collapse = ({ children, isOpen }) => (
    <div
        className={`${isOpen ? style.collapse.open : style.collapse.close} 
    ${style.collapse.default}`}
    >
        {children}
    </div>
);

Navbar.Nav = ({ children, left, right, center }) => {
    const className = left
        ? style.nav.left
        : right
            ? style.nav.right
            : center
                ? style.nav.center
                : style.nav.left;
    return <ul className={className}>{children}</ul>;
};

Navbar.Item = ({ children }) => <li>{children}</li>;

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
Navbar.Link = ({ children, href }) => (
    <a href={href} className={style.link}>
        {children}
    </a>
);

export default Nav;