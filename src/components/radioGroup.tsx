import { Field, Label, Radio, RadioGroup as HeadlessRadioGroup } from '@headlessui/react'
import { useState } from 'react'

interface Item<T> {
  id: number;
  name: string;
  value: T;
}

interface Props<T> {
  className?: string;
  label: string;
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
            className="group flex size-5 items-center justify-center rounded-full border-2 border-slate-200 bg-white"
          >
            <span className="invisible size-2 rounded-full bg-black group-data-[checked]:visible" />
          </Radio>
          <Label className="font-sans text-base">{item.name}</Label>
        </Field>
      ))}
    </HeadlessRadioGroup>
  )
}