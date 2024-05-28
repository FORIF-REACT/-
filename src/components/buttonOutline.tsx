import { Button } from "@/components/ui/button";

interface Props {
  className?: string;
  label: string;
}

export default function ButtonOutline(props: Props) {
  return (
    <Button
      variant="outline"
      className={`border-[1px] border-primary rounded-full font-['Noto_Sans_KR'] text-primary text-lg hover:text-white hover:bg-primary ${props.className}`}
    >
      {props.label}
    </Button>
  );
}
