import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"
import { componentRecommendations, componentPerformanceScores } from "@/data/components"

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
  const getRecommendations = (value: string) => {
    return componentRecommendations[value as keyof typeof componentRecommendations] || []
  }

  const getPerformanceScore = (value: string) => {
    return componentPerformanceScores[value as keyof typeof componentPerformanceScores]
  }

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
                <div className="flex flex-col gap-2">
                  <div>{option.label} - {option.price}€</div>
                  {getPerformanceScore(option.value) && (
                    <div className="flex gap-2 mt-1">
                      <Badge variant="secondary">
                        Gaming: {getPerformanceScore(option.value)?.gaming}/10
                      </Badge>
                      <Badge variant="secondary">
                        Productivité: {getPerformanceScore(option.value)?.productivity}/10
                      </Badge>
                    </div>
                  )}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {getRecommendations(option.value).map((rec, index) => (
                      <Badge key={index} variant="outline">{rec}</Badge>
                    ))}
                  </div>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  )
}

export default ComponentCard