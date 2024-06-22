import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: '과외 신청', path: '/mentorlist', current: true },
  { name: '내 수업', path: '/MyClassMentor', current: false },
  { name: '멘토 랭킹', path: '/mentorrank', current: false },
  { name: '평가하기', path: '/Evaluation', current: false },
];

const name = '닉네임';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full h-[60px] flex items-center justify-center bg-white border-b-1 border-border z-10"
    >
      {({ open }) => (
        <>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-primary/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </DisclosureButton>
          </div>
          <button
            className="flex flex-shrink-0 items-center"
            onClick={() => {
              navigate('/');
            }}
          >
            <h1 className="absolute left-24 font-logo text-40 bg-gradient-to-r to-[#382A83] from-primary bg-clip-text text-transparent " >
              Unitto
            </h1>
          </button>
          <div className="mx-auto max-w-[1100px] w-page px-page flex flex-row items-center justify-between">
            {navigation.map((item) => (
              <p
                key={item.name}
                onClick={() => { navigate(item.path) }}
                className={classNames(
                  "rounded-md px-3 py-2 text-sm text-muted hover:text-black cursor-pointer"
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="absolute right-24 flex items-center">
            {/* <button
              type="button"
              className="relative rounded-full bg-white p-1 text-primary/80 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button> */}

            {/* <button
              className="relative ml-3 flex flex-row gap-2 items-center"
              onClick={() => {}}
              >
              <div className="relative flex rounded-full bg-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                  />
              </div>
              <div className="text-16 text-[#44475D]">
                <p>{name} 님</p>
              </div>
            </button>
            <button className="relative ml-3 text-16 font-semibold">
              LOG OUT
            </button> */}

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </MenuButton>
              </div>
              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    {({ focus }) => (
                      <p
                        onClick={() => navigate("/myprofile")}
                        className={classNames(
                          focus ? 'text-black' : '',
                          'block px-3 pt-3 pb-2 mx-3 text-14 text-muted hover:text-black cursor-pointer'
                        )}
                      >
                        내 프로필
                      </p>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <p
                        onClick={() => navigate("/basicmodify")}
                        className={classNames(
                          focus ? 'text-black' : '',
                          'block px-3 py-2 mx-3 text-14 text-muted hover:text-black cursor-pointer'
                        )}
                      >
                        기본 정보 수정
                      </p>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <p
                        onClick={() => navigate("/mentormodify")}
                        className={classNames(
                          'block px-3 pt-2 pb-2 mx-3 text-14 text-muted hover:text-black cursor-pointer'
                        )}
                      >
                        멘토 정보 수정
                      </p>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ focus }) => (
                      <p
                        onClick={() => navigate("")}
                        className={classNames(
                          // focus ? "bg-gray-100" : "",
                          'block box-border border-primary border-2 mx-4 my-2 py-1 rounded-md text-14 text-primary text-center duration-300 hover:bg-primary hover:text-white cursor-pointer'
                        )}
                      >
                        Sign out
                      </p>
                    )}
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="p"
                  onClick={() => navigate(item.path)}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
