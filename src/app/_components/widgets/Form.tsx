"use client";

import { useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";

import { sendContactEmail } from "@/actions";
import {
  ErrorMessage,
  Label,
  InputText,
  SubmitedMessage,
  TextArea,
} from "@/app/_components/shared";
import { SubmitButton } from "@/app/_components/shared";

type Forms = {
  name: string;
  email: string;
  message: string;
  website: string;
};

export function Form() {
  const [submitResult, setSubmitResult] = useState<boolean | null>(null);

  const defaultValues = {
    name: "",
    email: "",
    message: "",
    website: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting, isValid },
  } = useForm<Forms>({
    defaultValues,
  });

  const website = watch("website");

  const onSubmit: SubmitHandler<Forms> = async (data) => {
    if (website) {
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    const result = await sendContactEmail(formData);

    if (result.success) {
      setSubmitResult(true);
      reset();
    } else {
      setSubmitResult(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-y-2 md:gap-y-4"
    >
      <Controller
        name="name"
        rules={{ required: "Name is required." }}
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
        rules={{
          required: "Email is required.",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Enter a valid email address.",
          },
        }}
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
        rules={{ required: "Message cannot be empty." }}
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
      <Controller
        name="website"
        control={control}
        render={({ field }) => (
          <input
            type="text"
            className="absolute -left-[9999px] opacity-0 pointer-events-none"
            tabIndex={-1}
            aria-hidden="true"
            {...field}
          />
        )}
      />
      <div className="flex justify-center md:mt-2">
        {submitResult !== null ? (
          <SubmitedMessage result={submitResult} onClick={reset} />
        ) : (
          <SubmitButton
            className={!isValid || isSubmitting ? "opacity-50" : ""}
            disabled={isSubmitting}
            label={isSubmitting ? "Submiting..." : "Submit"}
          />
        )}
      </div>
    </form>
  );
}
