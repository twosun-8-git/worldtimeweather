"use client";

import { useEffect, useRef } from "react";
import { useAtom } from "jotai";

import { visibleModalAtom } from "@/app/_atoms";
import { CloseButton } from "../shared";
import { Form } from "@/app/_components/widgets";

export function Modal() {
  const [visibleModal, setVisibleModal] = useAtom(visibleModalAtom);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (visibleModal) {
        dialogRef.current.showModal();
        document.body.style.overflow = "hidden";
      } else {
        dialogRef.current.close();
        document.body.style.overflow = "";
      }
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [visibleModal]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) {
      setVisibleModal(false);
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className={`fixed top-0 flex items-center justify-center w-full h-full bg-transparent ${
        !visibleModal ? "hidden" : ""
      }`}
    >
      <div className="w-[92%] max-w-900">
        <div className="bg-white flex flex-col rounded-lg overflow-hidden md:flex-row">
          <div className="flex flex-col gap-y-2 py-3 px-4  md:gap-y-10 md:p-6">
            <dl>
              <dt className="text-sm font-bold sm:text-base md:mb-1">
                Introduction
              </dt>
              <dd className="text-xs sm:text-sm">
                You can check the <b>time, date, weather, and temperature</b>{" "}
                for any country in the world.
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-bold sm:text-base md:mb-1">
                Feature
              </dt>
              <dd className="text-xs sm:text-sm">
                Search for a country and tap <b>“Save”</b> to store it in your
                browser for quick access next time.
                <span className="block text-red">
                  Note: Data is saved in your browser’s local storage and may
                  not be stored permanently.
                </span>
              </dd>
            </dl>
            <dl>
              <dt className="text-sm font-bold sm:text-base md:mb-1">
                Support
              </dt>
              <dd className="text-xs sm:text-sm">
                For feedback or inquiries, please use the form on the
                <span className="md:hidden"> bottom</span>
                <span className="hidden md:inline"> right</span>.
              </dd>
            </dl>
          </div>
          <div className="py-3 px-4 bg-background-gray md:w-[356px] md:shrink-0 md:p-6">
            <Form />
          </div>
        </div>
        <div className="flex justify-center mt-4 md:absolute md:top-0 md:right-[4%] pc:top-2 pc:right-4">
          <CloseButton onClick={() => setVisibleModal(false)} size="lg" />
        </div>
      </div>
    </dialog>
  );
}
