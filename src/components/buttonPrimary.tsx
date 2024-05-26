import { Button } from "@/components/ui/button"

interface Props {
  label: string;
}

export default function ButtonPrimary(props: Props) {
  return <Button className="rounded-full font-sans text-lg">{props.label}</Button>
}
