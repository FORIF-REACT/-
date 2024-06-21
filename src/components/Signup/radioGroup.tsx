import {
  Field,
  Label,
  Radio,
  RadioGroup as HeadlessRadioGroup,
} from "@headlessui/react";
import { useController, useFormContext } from "react-hook-form";

interface RadioItem<T> {
  id: number;
  name: string;
  value: T;
}

interface RadioGroupProps<T> {
  name: string;
  items: RadioItem<T>[];
  required?: boolean;
  className?: string;
}

export default function RadioGroup<T>({
  name,
  required = false,
  className,
  items,
}: RadioGroupProps<T>) {
  const { control } = useFormContext();
  const { field } = useController({ control, name, rules: { required } });

  return (
    <HeadlessRadioGroup
      {...field}
      className={`flex flex-row gap-8 ${className}`}
    >
      {items.map((item) => (
        <Field key={item.id} className="flex items-center gap-2">
          <Radio
            value={item.value}
            className="group flex size-3 items-center justify-center rounded-full ring-1 ring-[#CBD5E1] bg-white"
          >
            <span className="invisible size-2 rounded-full bg-black group-data-[checked]:visible" />
          </Radio>
          <Label className="font-sans font-normal text-12 align-middle">
            {item.name}
          </Label>
        </Field>
      ))}
    </HeadlessRadioGroup>
  );
}
