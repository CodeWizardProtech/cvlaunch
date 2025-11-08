<<<<<<< HEAD
=======
import Image from "next/image";
>>>>>>> 72f1b14 (atualizado)
import { useDebounce } from "@/hooks/use-debounce";
import { Input } from "../input"

type IconInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const IconInput = ({ value, onChange, placeholder }: IconInputProps) => {
  const debouncedValue = useDebounce(value);

  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 min-w-8 rounded-full bg-white p-1.5">
<<<<<<< HEAD
        {!!debouncedValue && <img src={`https://cdn.simpleicons.org/${debouncedValue}`} className="w-full h-full object-contain" />}
=======
        {!!debouncedValue && <Image src={`https://cdn.simpleicons.org/${debouncedValue}`} alt={`${debouncedValue} icon`} width={20} height={20} className="w-full h-full object-contain" />}
>>>>>>> 72f1b14 (atualizado)
      </div>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div> 
  )
}