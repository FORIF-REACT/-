import { Button } from "@/components/ui/button"

interface Props {
  className?: string;
  label: string;
}

export default function ButtonPrimary(props: Props) {
  return <Button className={`rounded-full font-['Noto_Sans_KR'] text-lg ${props.className}`}>{props.label}</Button>
}
