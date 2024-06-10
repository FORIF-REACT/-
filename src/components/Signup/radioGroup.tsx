import { Field, Label, Radio, RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { useState } from 'react'

interface Item<T> {
  id: number;
  name: string;
  value: T;
}

interface Props<T> {
  className?: string;
  items: Item<T>[];
}

export default function RadioGroup<T>(props: Props<T>) {
  const items = props.items;
  const [selected, setSelected] = useState(items[0])

  return (
    <HeadlessRadioGroup value={selected} onChange={setSelected} className={`flex flex-row gap-8 ${props.className}`}>
      {items.map((item) => (
        <Field key={item.id} className="flex items-center gap-2">
          <Radio
            value={item.value}
            className="group flex size-3 items-center justify-center rounded-full ring-1 ring-[#CBD5E1] bg-white"
          >
            <span className="invisible size-2 rounded-full bg-black group-data-[checked]:visible" />
          </Radio>
          <Label className="font-sans font-normal text-12 align-middle">{item.name}</Label>
        </Field>
      ))}
    </HeadlessRadioGroup>
  )
}