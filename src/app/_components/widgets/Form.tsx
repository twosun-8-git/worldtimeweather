import { Controller, useForm, SubmitHandler } from "react-hook-form";

import { ErrorMessage, Label, InputText, TextArea } from "../shared/forms";
import { SubmitButton } from "../shared/buttons";

type Forms = {
  name: string;
  email: string;
  message: string;
};

export function Form() {
  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const {
    control,
    handleSubmit,
    // formState: { isSubmitting, isSubmitted, isSubmitSuccessful },
  } = useForm<Forms>({
    defaultValues,
  });

  const onSubmit: SubmitHandler<Forms> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 md:gap-y-4"
    >
      {/* <p>{isSubmitting}</p>
      <p>{isSubmitted}</p>
      <p>{isSubmitSuccessful}</p> */}
      <Controller
        name="name"
        rules={{ required: "名前が入力されてないようです。" }}
        control={control}
        render={({ field, fieldState }) => (
          <Label label="Name">
            <InputText {...field} />
            {fieldState.error && (
              <ErrorMessage
                message={fieldState.error.message}
                className="mt-1"
              />
            )}
          </Label>
        )}
      />
      <Controller
        name="email"
        rules={{ required: "メールアドレスが入力されてないようです。" }}
        control={control}
        render={({ field, fieldState }) => (
          <Label label="Email">
            <InputText {...field} />
            {fieldState.error && (
              <ErrorMessage
                message={fieldState.error.message}
                className="mt-1"
              />
            )}
          </Label>
        )}
      />
      <Controller
        name="message"
        rules={{ required: "本文が入力されてないようです。" }}
        control={control}
        render={({ field, fieldState }) => (
          <Label label="Message">
            <TextArea {...field} />
            {fieldState.error && (
              <ErrorMessage message={fieldState.error.message} />
            )}
          </Label>
        )}
      />
      <div className="flex justify-center md:mt-2">
        <SubmitButton />
      </div>
    </form>
  );
}
