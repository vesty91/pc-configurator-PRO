import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LucideIcon } from "lucide-react"

interface ComponentOption {
  value: string
  label: string
  price: number
}

interface ComponentCardProps {
  title: string
  description: string
  icon: LucideIcon
  options: ComponentOption[]
  value: string
  onChange: (value: string) => void
}

const ComponentCard = ({
  title,
  description,
  icon: Icon,
  options,
  value,
  onChange,
}: ComponentCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 text-primary" />
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Select value={value} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue placeholder={`Choisir ${title.toLowerCase()}`} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label} - {option.price}€
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}

export default ComponentCard