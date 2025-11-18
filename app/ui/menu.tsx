"use client";

import { Menu as Wrapper, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./button";

export default function Menu() {
  return (
    <Wrapper as="div" className="relative md:hidden">
      {({ open }) => (
        <>
          {/* BUTTON - troca de ícone animada */}
          <MenuButton
            className="md:hidden p-2 cursor-pointer"
            aria-label="Open menu"
          >
            <AnimatePresence initial={false} mode="wait">
              {open ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <CloseIcon size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 20, scale: 0.8 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -20, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  <MenuIcon size={20} />
                </motion.div>
              )}
            </AnimatePresence>
          </MenuButton>

          {/* MENU ITEMS - aparece/disaparece com animação */}
          <AnimatePresence>
            {open && (
              <MenuItems
                as={motion.div}
                static
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
                className="absolute -right-2 shadow-md p-3 z-50 text-xs flex flex-col text-end gap-3"
              >
                {/* inner stagger */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.04, delayChildren: 0 } },
                  }}
                  className="flex flex-col gap-2"
                >
                  <MenuItem as={motion.div} variants={{ hidden: { opacity: 0, x: -6 }, visible: { opacity: 1, x: 0 } }}>
                    <Link className="block px-2 py-1" href="/settings">About</Link>
                  </MenuItem>

                  <MenuItem as={motion.div} variants={{ hidden: { opacity: 0, x: -6 }, visible: { opacity: 1, x: 0 } }}>
                    <Link className="block px-2 py-1" href="/projects">Projects</Link>
                  </MenuItem>

                  <MenuItem as={motion.div} variants={{ hidden: { opacity: 0, x: -6 }, visible: { opacity: 1, x: 0 } }}>
                    <Link className="block px-2 py-1" href="/experience">Experience</Link>
                  </MenuItem>

                  <MenuItem as={motion.div} variants={{ hidden: { opacity: 0, x: -6 }, visible: { opacity: 1, x: 0 } }}>
                    <Link className="block px-2 py-1" href="/contact">Contact</Link>
                  </MenuItem>

                  <Button>Resume</Button>
                </motion.div>
              </MenuItems>
            )}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}