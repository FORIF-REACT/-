import { Fragment, useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

interface Item<T> {
  id: number;
  name: string;
  value: T;
}

interface Props<T> {
  className?: string;
  items: Item<T>[];
  onSelectItem: (selected: T) => void;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Select<T>(props: Props<T>) {
  const items = props.items;
  const [selected, setSelected] = useState(items[0]);

  function selectItem(selected: Item<T>) {
    setSelected(selected);
    props.onSelectItem(selected.value);
  }

  return (
    <Listbox value={selected} onChange={selectItem}>
      {({ open }) => (
        <>
          <div className={`relative w-[366px] h-[40px] font-['Noto_Sans_KR'] ${props.className}`}>
          <ListboxButton className="relative w-full h-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <span className="ml-3 block truncate font-normal text-[16px]">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </ListboxButton>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <ListboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {items.map((item) => (
                  <ListboxOption
                    key={item.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-primary text-white" : "text-gray-900",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={item}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected ? "font-bold" : "font-normal",
                              "ml-3 block truncate text-[16px]"
                            )}
                          >
                            {item.name}
                          </span>
                        </div>
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
