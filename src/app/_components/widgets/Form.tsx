import { Label } from "../shared/forms/Label";
import { InputText } from "../shared/forms/InputText";
import { TextArea } from "../shared/forms/TextArea";
import { SubmitButton } from "../shared/buttons";

export function Form() {
  return (
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
      <div className="flex justify-center md:mt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
