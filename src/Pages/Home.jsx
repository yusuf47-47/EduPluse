import HeroIllustration from "@/Components/HeroIllustration";
import { Button } from "@/Components/ui/button";
import { Field } from "@/Components/ui/field";
import { Input } from "@/Components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/Components/ui/navigation-menu";
import {
  Building2,
  Club,
  Diamond,
  Heart,
  Pencil,
  Search,
  Star,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <section className="min-h-screen bg-[#E8F7FB] px-6 py-12 md:px-12 lg:px-10 xl:px-24">
        <div className="mx-auto grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p className="mb-6 text-sm font-bold tracking-wide text-petrol">
              LEARN WITHOUT LIMITS
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-petrol-dark sm:text-5xl xl:text-7xl">
              Learn Continuously, Grow Endlessly
            </h1>

            <p className="mt-6 mb-7 max-w-xl text-lg leading-relaxed text-petrol-dark/70 sm:text-xl">
              Build new skills, explore new perspectives, and create your next
              opportunity.
            </p>

            <Field className="relative w-full" orientation="horizontal">
              <Input
                className="h-18 rounded-full border-gray-200 bg-white pr-20 pl-8 "
                type="search"
                placeholder="What would you like to learn?"
              />

              <Button className="bg-petrol absolute right-2 top-1/2 size-14 -translate-y-1/2 rounded-full hover:bg-petrol cursor-pointer active:-translate-y-1/2!">
                <Search className="size-5" />
              </Button>
            </Field>

            <div className="flex justify-center items-center gap-3 mt-6">
              <div className="font-semibold text-petrol">
                <p>Popular:</p>
              </div>
              <div className=" gap-2">
                <NavigationMenu>
                  <NavigationMenuList className="">
                    <NavigationMenuItem className="px-2  ">
                      <NavigationMenuLink
                        className="border border-gray-200 font-semibold px-5 py-3 rounded-3xl bg-white"
                        asChild
                      >
                        <Link href="/products">AI</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="px-2 ">
                      <NavigationMenuLink
                        className="border border-gray-200 bg-white font-semibold px-4 py-3 rounded-4xl "
                        asChild
                      >
                        <Link href="/categories">Web Development</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="px-2 ">
                      <NavigationMenuLink
                        className="border border-gray-200 bg-white font-semibold px-4 py-3 rounded-4xl "
                        asChild
                      >
                        <Link href="/brands">Design</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="px-2 ">
                      <NavigationMenuLink
                        className="border border-gray-200 bg-white font-semibold px-4 py-3  rounded-4xl "
                        asChild
                      >
                        <Link href="/brands">Business</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="px-2 ">
                      <NavigationMenuLink
                        className="border border-gray-200 bg-white font-semibold px-4 py-3  rounded-4xl "
                        asChild
                      >
                        <Link href="/brands">Personal Growth</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            <div className="py-6 mt-4">
              <div className="flex justify-between items-center bg-white px-14 py-6 border rounded-4xl">
                <div className="flex flex-col justify-center items-center ">
                  <p className="font-bold text-3xl text-petrol-dark mb-2">
                    10K+
                  </p>
                  <p className="text-gray-400">Learners</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <p className="font-bold text-3xl text-petrol-dark mb-2">
                    500+
                  </p>
                  <p className="text-gray-400">Expert instructors</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <p className="font-bold text-3xl text-petrol-dark mb-2">
                    2K+
                  </p>
                  <p className="text-gray-400">Courses</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <p className="font-bold text-3xl text-petrol-dark mb-2">
                    4.9
                  </p>
                  <p className="text-gray-400">Average rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 items-center justify-center">
            <div className="w-full max-w-150">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 md:px-12 lg:px-10 xl:px-24">
        <div className="py-4">
          <div className="grid grid-cols-2 items-center mb-12 ">
            <div>
              <p className="text-4xl font-bold text-petrol-dark mb-2">
                Explore Top Categories
              </p>
              <p className="text-lg text-gray-400">
                Find the right path for your next big idea.
              </p>
            </div>
            <div className="flex justify-end">
              <Button className="font-semibold border-2 border-gray-200 rounded-full py-6 px-6 text-base bg-white text-petrol hover:bg-[#f5f5f5] cursor-pointer">
                View all
              </Button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              <div className="border-2 p-6 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div
                  className="bg-[#E5F7FB] size-14 flex justify-center items-center rounded-xl text-petrol
                "
                >
                  <Diamond />
                </div>
                <div>
                  <p className="font-semibold text-xl text-petrol-dark">
                    Data Science
                  </p>
                  <p className="font-semibold text-xl text-petrol-dark">& AI</p>
                </div>
              </div>
              <div className="border-2 p-6 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div
                  className="bg-[#E5F7FB] size-14 flex justify-center items-center rounded-xl text-petrol
                "
                >
                  <Star />
                </div>
                <div>
                  <p className="font-semibold text-xl text-petrol-dark">Web</p>
                  <p className="font-semibold text-xl text-petrol-dark">
                    Development
                  </p>
                </div>
              </div>
              <div className="border-2 p-6 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div
                  className="bg-[#E5F7FB] size-14 flex justify-center items-center rounded-xl text-petrol
                "
                >
                  <Pencil />
                </div>
                <div>
                  <p className="font-semibold text-xl text-petrol-dark">
                    Design
                  </p>
                  <p className="font-semibold text-xl text-petrol-dark">
                    & Creativity
                  </p>
                </div>
              </div>
              <div className="border-2 p-6 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div
                  className="bg-[#E5F7FB] size-14 flex justify-center items-center rounded-xl text-petrol
                "
                >
                  <Building2 />
                </div>
                <div>
                  <p className="font-semibold text-xl text-petrol-dark">
                    Business
                  </p>
                  <p className="font-semibold text-xl text-petrol-dark">
                    & Management
                  </p>
                </div>
              </div>
              <div className="border-2 p-6 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div
                  className="bg-[#E5F7FB] size-14 flex justify-center items-center rounded-xl text-petrol
                "
                >
                  <Club />
                </div>
                <div>
                  <p className="font-semibold text-xl text-petrol-dark">
                    Personal
                  </p>
                  <p className="font-semibold text-xl text-petrol-dark">
                    Development
                  </p>
                </div>
              </div>
              <div className="border-2 p-6 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div
                  className="bg-[#E5F7FB] size-14 flex justify-center items-center rounded-xl text-petrol
                "
                >
                  <Heart />
                </div>
                <div>
                  <p className="font-semibold text-xl text-petrol-dark">
                    Health
                  </p>
                  <p className="font-semibold text-xl text-petrol-dark">
                    & Wellbeing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 md:px-12 lg:px-10 xl:px-24 bg-[#F7FBFC]">
        <div className="py-4 ">
          <div className="flex justify-between items-center mb-12 ">
            <div>
              <p className="text-4xl font-bold text-petrol-dark mb-2">
                Featured courses
              </p>
              <p className="text-lg text-gray-400">
                Learn from experts and move forward with confidence.
              </p>
            </div>
            <div>
              <Button className="font-semibold border-2 border-gray-200 rounded-full py-6 px-5 text-base bg-white text-petrol hover:bg-[#f5f5f5] cursor-pointer">
                Explore all
              </Button>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
              <div>
                <Card className="mx-auto w-full max-w-md gap-0 overflow-hidden rounded-3xl border border-[#d6e8ed] bg-white p-0 shadow-none">
                  <div className="relative aspect-[1.9/1] overflow-hidden bg-petrol-light rounded-b-3xl">
                    <Badge className="absolute left-6 top-6 z-10 rounded-full bg-white px-5 py-4 text-xs font-bold text-petrol hover:bg-white">
                      DATA SCIENCE
                    </Badge>

                    <div className="absolute -bottom-12 left-6 h-28 w-3/4 rounded-t-full bg-petrol/50" />

                    <div className="absolute -right-2 -top-4 flex size-44 items-center justify-center rounded-full bg-white">
                      <div className="flex size-34 items-center justify-center rounded-full bg-petrol-soft">
                        <div className="size-22 rounded-full bg-petrol-light" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="gap-0 px-6 pb-0 pt-5">
                    <CardTitle className="text-xl font-bold leading-snug text-petrol-dark">
                      Complete Python for Data Science
                    </CardTitle>

                    <CardDescription className="mt-3 text-base leading-relaxed text-[#6b8792]">
                      Master Python, analysis and visualization.
                    </CardDescription>
                  </CardHeader>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3 px-6 pt-6 text-sm">
                    <span className="font-semibold text-amber-500">
                      <span className="text-amber-500">★</span> 4.8
                    </span>

                    <span className="text-[#6b8792]">• Intermediate</span>

                    <span className="w-full text-[#6b8792]">◷ 20 hours</span>
                  </div>

                  <CardFooter className="mx-6 mt-6 flex justify-between border-t border-[#d6e8ed] px-0 py-6 bg-transparent">
                    <span className="text-sm font-semibold text-[#4f6d78]">
                      By Olivieda Academy
                    </span>

                    <Button
                      variant="link"
                      className="h-auto p-0 text-sm font-bold text-petrol hover:no-underline cursor-pointer"
                    >
                      View course
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mx-auto w-full max-w-md gap-0 overflow-hidden rounded-3xl border border-[#d6e8ed] bg-white p-0 shadow-none">
                  <div className="relative aspect-[1.9/1] overflow-hidden bg-petrol rounded-b-3xl">
                    <Badge className="absolute left-6 top-6 z-10 rounded-full bg-white px-5 py-4 text-xs font-bold text-petrol hover:bg-white">
                      DEVELOPMENT
                    </Badge>

                    <div className="absolute -bottom-12 left-6 h-28 w-3/4 rounded-t-full bg-black/15" />

                    <div className="absolute -right-2 -top-4 flex size-44 items-center justify-center rounded-full bg-white">
                      <div className="flex size-34 items-center justify-center rounded-full bg-petrol-soft">
                        <div className="size-22 rounded-full bg-petrol" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="gap-0 px-6 pb-0 pt-5">
                    <CardTitle className="text-xl font-bold leading-snug text-petrol-dark">
                      Modern Web Development with React
                    </CardTitle>

                    <CardDescription className="mt-3 text-base leading-relaxed text-[#6b8792]">
                      Build modern, responsive web experiences.
                    </CardDescription>
                  </CardHeader>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3 px-6 pt-6 text-sm">
                    <span className="font-semibold text-amber-500">
                      <span className="text-amber-500">★</span> 4.8
                    </span>

                    <span className="text-[#6b8792]">• Intermediate</span>

                    <span className="w-full text-[#6b8792]">◷ 20 hours</span>
                  </div>

                  <CardFooter className="mx-6 mt-6 flex justify-between border-t border-[#d6e8ed] px-0 py-6 bg-transparent">
                    <span className="text-sm font-semibold text-[#4f6d78]">
                      By Olivieda Academy
                    </span>

                    <Button
                      variant="link"
                      className="h-auto p-0 text-sm font-bold text-petrol hover:no-underline cursor-pointer"
                    >
                      View course
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <Card className="mx-auto w-full max-w-md gap-0 overflow-hidden rounded-3xl border border-[#d6e8ed] bg-white p-0 shadow-none">
                  <div className="relative aspect-[1.9/1] overflow-hidden bg-[#7ACBDA] rounded-b-3xl">
                    <Badge className="absolute left-6 top-6 z-10 rounded-full bg-white px-5 py-4 text-xs font-bold text-petrol hover:bg-white">
                      DESIGN
                    </Badge>

                    <div className="absolute -bottom-12 left-6 h-28 w-3/4 rounded-t-full bg-petrol/50" />

                    <div className="absolute -right-2 -top-4 flex size-44 items-center justify-center rounded-full bg-white">
                      <div className="flex size-34 items-center justify-center rounded-full bg-petrol-soft">
                        <div className="size-22 rounded-full bg-[#7ACBDA]" />
                      </div>
                    </div>
                  </div>

                  <CardHeader className="gap-0 px-6 pb-0 pt-5">
                    <CardTitle className="text-xl font-bold leading-snug text-petrol-dark">
                      UI/UX Design from Zero to Pro
                    </CardTitle>

                    <CardDescription className="mt-3 text-base leading-relaxed text-[#6b8792]">
                      Create intuitive products people love.
                    </CardDescription>
                  </CardHeader>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-3 px-6 pt-6 text-sm">
                    <span className="font-semibold text-amber-500">
                      <span className="text-amber-500">★</span> 4.8
                    </span>

                    <span className="text-[#6b8792]">• Intermediate</span>

                    <span className="w-full text-[#6b8792]">◷ 20 hours</span>
                  </div>

                  <CardFooter className="mx-6 mt-6 flex justify-between border-t border-[#d6e8ed] px-0 py-6 bg-transparent">
                    <span className="text-sm font-semibold text-[#4f6d78]">
                      By Olivieda Academy
                    </span>

                    <Button
                      variant="link"
                      className="h-auto p-0 text-sm font-bold text-petrol hover:no-underline cursor-pointer"
                    >
                      View course
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-12 md:px-12 lg:px-10 xl:px-24">
        <div className="py-4">
          <div className="grid grid-cols-2 items-center mb-12 ">
            <div>
              <p className="text-4xl font-bold text-petrol-dark mb-2">
                A better way to keep learning
              </p>
              <p className="text-lg text-gray-400">
                Small steps today. Meaningful growth tomorrow.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9">
              <div className="border-2 p-6 pb-5 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div>
                  <p className="font-semibold text-lg text-petrol-light">01</p>
                  <p className="font-bold text-2xl text-petrol-dark my-2">
                    Learn at your pace
                  </p>
                  <p className="text-gray-400">
                    Pick up where you left off, whenever it works for you.
                  </p>
                  <Button className="font-bold p-0 text-petrol bg-transparent hover:bg-transparent mt-2 cursor-pointer">
                    Discover more
                  </Button>
                </div>
              </div>
              <div className="border-2 p-6 pb-5 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div>
                  <p className="font-semibold text-lg text-petrol-light">02</p>
                  <p className="font-bold text-2xl text-petrol-dark my-2">
                    Learn by doing
                  </p>
                  <p className="text-gray-400">
                    Practice new skills with quizzes and real-world projects.
                  </p>
                  <Button className="font-bold p-0 text-petrol bg-transparent hover:bg-transparent mt-2 cursor-pointer">
                    Discover more
                  </Button>
                </div>
              </div>
              <div className="border-2 p-6 pb-5 rounded-2xl flex gap-y-4 flex-col min-w-56 min-h-44">
                <div>
                  <p className="font-semibold text-lg text-petrol-light">03</p>
                  <p className="font-bold text-2xl text-petrol-dark my-2">
                    Track your progress
                  </p>
                  <p className="text-gray-400">
                    See your growth and celebrate every milestone.
                  </p>
                  <Button className="font-bold p-0 text-petrol bg-transparent hover:bg-transparent mt-2 cursor-pointer">
                    Discover more
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto flex min-h-65 w-full items-center justify-between overflow-hidden rounded-[28px] bg-linear-to-r from-[#084653] to-[#0b5d6b] px-8 py-10 sm:px-12 lg:px-14 mt-20">
            <div className="relative z-10 max-w-xl">
              <p className="mb-3 text-sm font-bold text-[#a9e1ed]">
                YOUR NEXT CHAPTER STARTS HERE
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Make learning a habit.
              </h2>

              <p className="mt-3 text-base text-[#d0e6eb] sm:text-lg">
                Build your skills. Discover what you can do.
              </p>

              <Button className="mt-7 h-12 rounded-full bg-white px-9 text-base font-bold text-[#084653] hover:bg-[#eaf7fa]">
                Explore courses
              </Button>
            </div>

            <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 items-center justify-center sm:flex lg:right-20">
              <div className="flex size-48 items-center justify-center rounded-full bg-petrol lg:size-59">
                <div className="flex size-32 items-center justify-center rounded-full bg-petrol-light lg:size-40">
                  <div className="flex size-20 items-center justify-center rounded-full bg-petrol-dark lg:size-22.5">
                    <div className="size-10 rounded-full bg-petrol-soft" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
