"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { Button } from "@material-tailwind/react";



export default function PopupModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    // Clear the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = (e) => {
    if (e.target.id === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    const isModalShown = sessionStorage.getItem("modalShown");
    if (!isModalShown) {
      const openTimeout = setTimeout(() => {
        setIsModalOpen(true);
      }, 3000);

      const closeTimeout = setTimeout(() => {
        setIsModalOpen(false);
      }, 8000);

      sessionStorage.setItem("modalShown", "true");

      return () => {
        clearTimeout(openTimeout);
        clearTimeout(closeTimeout);
      };
    }
  }, []);

  return (
    <>
      <button
        // onClick={toggleModal}
        className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>

      {isModalOpen && (
        <div
          id="modal-overlay"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden w-full h-full bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative rounded-lg shadow bg-[#0f172a]">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Open positions
                </h3>
                <Button
                    variant="text"
                    color="white"
                    onClick={toggleModal}
                    className="p-0 group"
                >
                    <IoMdCloseCircleOutline
                    className="text-white transition-transform duration-300 group-hover:rotate-90"
                    size={40}
                    />
                </Button>
              </div>
              <div className="p-4 md:p-5">
                <ul className="space-y-4 mb-4 flex flex-col gap-4">
                  <Link href="/feedback">
                    <li>
                      <input
                        type="radio"
                        id="job-1"
                        name="job"
                        value="job-1"
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="job-1"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-[#0f172a] dark:hover:bg-[#090f1d]"
                      >
                        <div className="block">
                          <div className="w-full text-sm font-semibold">
                          Feedback is always welcome.
                          </div>
                          <div className="w-full text-gray-500 text-sm dark:text-gray-400">
                          Your thoughts matter here.
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                  </Link>
                  <Link href="contact">
                    <li>
                      <input
                        type="radio"
                        id="job-1"
                        name="job"
                        value="job-1"
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="job-1"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-[#0f172a] dark:hover:bg-[#090f1d]"
                      >
                        <div className="block">
                          <div className="w-full text-sm font-semibold">
                          Connect with Me
                          </div>
                          <div className="w-full text-gray-500 text-sm dark:text-gray-400">
                          Stay in touch always
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                  </Link>
                  <Link href="https://wa.me/918544098398">
                    <li>
                      <input
                        type="radio"
                        id="job-1"
                        name="job"
                        value="job-1"
                        className="hidden peer"
                        required
                      />
                      <label
                        htmlFor="job-1"
                        className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-[#0f172a] dark:hover:bg-[#090f1d]"
                      >
                        <div className="block">
                          <div className="w-full text-sm font-semibold">
                          Ping me on WhatsApp anytime.
                          </div>
                        </div>
                        <svg
                          className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </label>
                    </li>
                  </Link>
                 
                  {/* ... other list items ... */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
