import { Field, Label, Radio, RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { useState } from 'react'

interface Item<T> {
  id: number;
  name: string;
  // description?: string;
  value: T;
}

interface Props<T> {
  label: string;
  items: Item<T>[];
}

export default function RadioGroup<T>(props: Props<T>) {
  const items = props.items;
  const [selected, setSelected] = useState(items[0])

  return (
    <HeadlessRadioGroup value={selected} onChange={setSelected} aria-label="Server size">
      {items.map((item) => (
        <Field key={item.id} className="flex items-center gap-2">
          <Radio
            value={item.value}
            className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
          >
            <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
          </Radio>
          <Label>{item.name}</Label>
        </Field>
      ))}
    </HeadlessRadioGroup>
  )
}