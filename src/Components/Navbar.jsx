import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import {} from "./ui/dropdown-menu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxItem,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValue,
} from "./ui/combobox";

const language = [
  {
    code: "en",
    value: "english",
    label: "EN",
    continent: "North America",
  },
  { code: "ar", value: "arabic", label: "AR", continent: "Africa" },
];

export default function Navbar() {
  return (
    <>
      <nav className="shadow-sm py-7 text-2xl bg-white font-semibold sticky top-0 z-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1>
              <Link href={"/"}>EduPulse</Link>
            </h1>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem className="px-1">
                  <NavigationMenuLink className="px-4 rounded-4xl" asChild>
                    <Link href="/products">Home</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-1">
                  <NavigationMenuLink className="px-4 rounded-4xl" asChild>
                    <Link href="/products">Courses</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-1">
                  <NavigationMenuLink className="px-4 rounded-4xl" asChild>
                    <Link href="/products">About</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-1">
                  <NavigationMenuLink className="px-4 rounded-4xl" asChild>
                    <Link href="/products">For Business</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-1">
                  <NavigationMenuLink className="px-4 rounded-4xl" asChild>
                    <Link href="/products">Become an Instructor</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuList className="gap-x-3">
                <Combobox items={language} defaultValue={language[0]}>
                  <ComboboxTrigger
                    className=" w-12 py-2 h-10 rounded-4xl"
                    render={
                      <Button variant="outline" className="border-2">
                        <ComboboxValue />
                      </Button>
                    }
                  />
                  <ComboboxContent>
                    <ComboboxList>
                      {(item) => (
                        <ComboboxItem key={item.code} value={item}>
                          {item.label}
                        </ComboboxItem>
                      )}
                    </ComboboxList>
                  </ComboboxContent>
                </Combobox>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="border-2 rounded-2xl px-5"
                    asChild
                  >
                    <Link href="/products">Log in</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="border-2 rounded-2xl px-5 bg-petrol text-white hover:bg-petrol"
                    asChild
                  >
                    <Link href="/products">Sign up</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
    </>
  );
}
