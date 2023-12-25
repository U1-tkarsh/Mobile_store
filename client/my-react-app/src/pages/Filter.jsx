import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../config";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export function Filter({ onTypeSelect, onFilterChange }) {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [progressMap, setProgressMap] = useState({});
  const [type, setType] = useState([]);
  const [processor, setProcessor] = useState([]);
  const [os, setOS] = useState([]);
  const [memory, setMemory] = useState([]);

  const [selectedTypes, setSelectedTypes] = useState(null);
  const [selectedProcessor, setSelectedProcessor] = useState(null);
  const [selectedOS, setSelectedOS] = useState(null);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const [searchName, setSearchName] = useState("");

  const handleSliderChange = (value) => {
    setProgressMap(value);
    handleFilter();
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
    setSelectedTypes(open === value ? null : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const type = await axios.get(`${BASE_URL}/smartPhone/getDistinctTypes`);
        setType(type.data.distinctTypes);

        const processor = await axios.get(
          `${BASE_URL}/smartPhone/getDistinctProcessor`
        );
        setProcessor(processor.data.distinctprocessor);

        const OS = await axios.get(`${BASE_URL}/smartPhone/getDistinctoS`);
        setOS(OS.data.distinctOS);

        const Memory = await axios.get(
          `${BASE_URL}/smartPhone/getDistinctMemory`
        );
        setMemory(Memory.data.distinctmemorys);
      } catch (error) {
        console.error("Error fetching card data:", error);
      }
    };

    fetchCardData();
  }, []);

  const handleFilter = async () => {
    try {
      const filterOptions = {
        type: selectedTypes,
        processor: selectedProcessor,
        operating_system: selectedOS,
        memory: selectedMemory,
        price: progressMap,
        name: searchName,
      };

      onFilterChange(filterOptions);
    } catch (error) {
      console.error("Error fetching filtered card data:", error);
    }
  };
  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer} className="z-50">
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <Typography variant="h5" color="blue-gray">
              Filter
            </Typography>
          </div>
          <hr className="my-2 border-blue-gray-50" />
          <div className="p-2">
            <Input
              onChange={(e) => {
                setSearchName(e.target.value), handleFilter();
              }}
              placeholder="Write any Smart Phone name"
            />
          </div>
          <hr className="my-2 border-blue-gray-50" />
          <div className="grid grid-cols-2">
            <h1>Price</h1>
            <span className="py-2 border-2 px-3 text-center rounded-md">
              <span className="text-xs">{String(progressMap) || "0"}</span>
            </span>
          </div>
          <input
            type="range"
            min="11000"
            max="70000"
            step="1000"
            value={progressMap || 0}
            onChange={(e) => handleSliderChange(e.target.value)}
            className="w-full"
          />
          <List>
            <hr className="my-2 border-blue-gray-50" />
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Brand
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>POCO</ListItem>
                  <ListItem>Apple</ListItem>
                  <ListItem>Realme</ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Type
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  {/* Display all types by default */}
                  <div key={0}>
                    <ListItem
                      onClick={() => {
                        setSelectedTypes(null), handleFilter();
                      }}
                      className={selectedTypes ? "" : "bg-blue-100"}
                    >
                      All Types
                    </ListItem>
                  </div>
                  {/* Display other types */}
                  {type?.map((data, id) => (
                    <div key={id + 1}>
                      <ListItem
                        onClick={() => {
                          setSelectedTypes(data.type), handleFilter();
                        }}
                        className={
                          data.type === selectedTypes ? "bg-blue-100" : ""
                        }
                      >
                        {data.type}
                      </ListItem>
                    </div>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 3}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 3 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 3}>
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="border-b-0 p-3"
                >
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Processor Brand
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  {/* Display all processor brands by default */}
                  <div key={0}>
                    <ListItem
                      onClick={() => {
                        setSelectedProcessor(null), handleFilter();
                      }}
                      className={selectedProcessor ? "" : "bg-blue-100"}
                    >
                      All Processors
                    </ListItem>
                  </div>
                  {/* Display other processor brands */}
                  {processor?.map((data, id) => (
                    <div key={id + 1}>
                      <ListItem
                        onClick={() => {
                          setSelectedProcessor(data.processor), handleFilter();
                        }}
                        className={
                          data.processor === selectedProcessor
                            ? "bg-blue-100"
                            : ""
                        }
                      >
                        {data.processor}
                      </ListItem>
                    </div>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 4}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 4 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 4}>
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="border-b-0 p-3"
                >
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Operating System
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <div key={0}>
                    <ListItem
                      onClick={() => {
                        setSelectedOS(null), handleFilter();
                      }}
                    >
                      All Operating System
                    </ListItem>
                  </div>
                  {os?.map((data, id) => (
                    <div key={id + 1}>
                      <ListItem
                        onClick={() => {
                          setSelectedOS(data.operating_system), handleFilter();
                        }}
                        className={
                          data.operating_system === selectedOS
                            ? "bg-blue-100"
                            : ""
                        }
                      >
                        {data.operating_system}
                      </ListItem>
                    </div>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 5}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 5 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 5}>
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="border-b-0 p-3"
                >
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Memory
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <div key={0}>
                    <ListItem
                      onClick={() => {
                        setSelectedMemory(null), handleFilter();
                      }}
                    >
                      All Memory
                    </ListItem>
                  </div>
                  {memory?.map((data, id) => (
                    <div key={id + 1}>
                      <ListItem
                        onClick={() => {
                          setSelectedMemory(data.memory), handleFilter();
                        }}
                        className={
                          data.memory === selectedMemory ? "bg-blue-100" : ""
                        }
                      >
                        {data.memory} GB
                      </ListItem>
                    </div>
                  ))}
                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </>
  );
}
