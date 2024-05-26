import { Button } from "@/components/ui/button"

interface Props {
  label: string;
}

export default function ButtonOutline(props: Props) {
  return <Button variant="outline" className="rounded-full border-primary border-2 font-sans text-primary text-lg hover:text-white hover:bg-primary">{props.label}</Button>
}
