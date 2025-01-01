import { Button } from "@/components/ui/button"
import { Monitor, Cpu, HardDrive, CircuitBoard, Battery, Fan } from "lucide-react"
import { useState, useEffect } from "react"
import { useToast } from "@/hooks/use-toast"
import ComponentCard from "@/components/configurator/ComponentCard"
import PriceSummary from "@/components/configurator/PriceSummary"
import { componentOptions, componentPrices, componentDescriptions, componentNames } from "@/data/components"
import { checkMotherboardCompatibility, checkPowerSupply, checkCooling } from "@/utils/compatibility"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination"

const ITEMS_PER_PAGE = 3

const Configure = () => {
  const { toast } = useToast()
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedComponents, setSelectedComponents] = useState({
    cpu: "",
    motherboard: "",
    ram: "",
    storage: "",
    psu: "",
    cooling: ""
  })

  const [warnings, setWarnings] = useState<string[]>([])

  const componentTypes = Object.keys(componentOptions) as Array<keyof typeof componentOptions>
  const totalPages = Math.ceil(componentTypes.length / ITEMS_PER_PAGE)

  const getCurrentPageComponents = () => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    return componentTypes.slice(start, end)
  }

  useEffect(() => {
    const newWarnings: string[] = []
    
    if (selectedComponents.cpu && selectedComponents.motherboard) {
      const motherboardWarning = checkMotherboardCompatibility(
        selectedComponents.cpu,
        selectedComponents.motherboard
      )
      if (motherboardWarning) newWarnings.push(motherboardWarning)
    }
    
    if (selectedComponents.cpu && selectedComponents.psu) {
      const psuWarning = checkPowerSupply(
        selectedComponents.cpu,
        selectedComponents.psu
      )
      if (psuWarning) newWarnings.push(psuWarning)
    }
    
    if (selectedComponents.cpu && selectedComponents.cooling) {
      const coolingWarning = checkCooling(
        selectedComponents.cpu,
        selectedComponents.cooling
      )
      if (coolingWarning) newWarnings.push(coolingWarning)
    }
    
    setWarnings(newWarnings)
  }, [selectedComponents])

  const handleComponentChange = (value: string, component: keyof typeof selectedComponents) => {
    setSelectedComponents(prev => ({
      ...prev,
      [component]: value
    }))
  }

  const handleAddToCart = () => {
    const missingComponents = Object.entries(selectedComponents).filter(([_, value]) => !value)
    
    if (missingComponents.length > 0) {
      toast({
        variant: "destructive",
        title: "Configuration incomplète",
        description: "Veuillez sélectionner tous les composants avant d'ajouter au panier."
      })
      return
    }

    if (warnings.length > 0) {
      toast({
        variant: "destructive",
        title: "Attention",
        description: "Votre configuration présente des incompatibilités. Veuillez les corriger avant de continuer."
      })
      return
    }

    toast({
      title: "Configuration ajoutée au panier",
      description: "Votre configuration personnalisée a été ajoutée au panier avec succès."
    })
  }

  const componentIcons = {
    cpu: Cpu,
    motherboard: CircuitBoard,
    ram: Cpu,
    storage: HardDrive,
    psu: Battery,
    cooling: Fan
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Configurateur PC</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {getCurrentPageComponents().map((component) => (
            <ComponentCard
              key={component}
              title={componentNames[component]}
              description={componentDescriptions[component]}
              icon={componentIcons[component]}
              options={componentOptions[component]}
              value={selectedComponents[component]}
              onChange={(value) => handleComponentChange(value, component)}
              type={component}
            />
          ))}

          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    onClick={() => setCurrentPage(i + 1)}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          {warnings.length > 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Avertissements de compatibilité :
                  </p>
                  <ul className="mt-2 text-sm text-yellow-700 list-disc list-inside">
                    {warnings.map((warning, index) => (
                      <li key={index}>{warning}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          <Button 
            className="w-full" 
            onClick={handleAddToCart}
            variant={warnings.length > 0 ? "destructive" : "default"}
          >
            Ajouter au panier
          </Button>
        </div>

        <div className="md:sticky md:top-8">
          <PriceSummary
            selectedComponents={selectedComponents}
            prices={componentPrices}
            componentNames={componentNames}
          />
        </div>
      </div>
    </div>
  )
}

export default Configure