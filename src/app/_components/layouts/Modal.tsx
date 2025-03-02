import { InputText } from "../shared";
import { TextArea } from "../shared";
import { Label } from "../shared";
import { SubmitButton } from "../shared";

export function Modal() {
  return (
    <dialog
      className="fixed top-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 "
      open
    >
      <div className="bg-white flex flex-col w-[92%] max-w-[900px] rounded-lg overflow-hidden md:flex-row">
        <div className="flex flex-col gap-y-2 p-4 md:gap-y-10">
          <dl>
            <dt className="text-sm font-bold sm:text-base">Introduction</dt>
            <dd className="text-xs sm:text-sm">
              You can check the <b>time, date, weather, and temperature</b> for
              any country in the world.
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-bold sm:text-base">Feature</dt>
            <dd className="text-xs sm:text-sm">
              Search for a country and tap <b>“Save”</b> to store it in your
              browser for quick access next time.
              <span className="block text-red">
                Note: Data is saved in your browser’s local storage and may not
                be stored permanently.
              </span>
            </dd>
          </dl>
          <dl>
            <dt className="text-sm font-bold sm:text-base">Support</dt>
            <dd className="text-xs sm:text-sm">
              For feedback or inquiries, please use the form on the right.
            </dd>
          </dl>
        </div>
        <div className="p-4 bg-background-gray md:w-[356px] md:shrink-0">
          <form className="flex flex-col gap-y-2 md:gap-y-4">
            <Label id="name" label="Name">
              <InputText />
            </Label>
            <Label id="email" label="Email">
              <InputText />
            </Label>
            <Label id="message" label="Message">
              <TextArea />
            </Label>
            <div className="flex justify-center">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
