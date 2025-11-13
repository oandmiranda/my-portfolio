import { Menu as Wrapper, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Link from 'next/link'
import { MenuBurgerIcon } from './burger'

export default function Menu() {
  return (
    <Wrapper>
      <MenuButton className={"md:hidden"}><MenuBurgerIcon /></MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <Link className="block data-focus:bg-blue-100" href="/settings">
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100" href="/support">
            Experience
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100" href="/license">
            Expertise
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100" href="/license">
            Projects
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100" href="/license">
            Contact
          </Link>
        </MenuItem>
        <MenuItem>
          <Link className="block data-focus:bg-blue-100" href="/license">
            Resume
          </Link>
        </MenuItem>
      </MenuItems>
    </Wrapper>
  )
}