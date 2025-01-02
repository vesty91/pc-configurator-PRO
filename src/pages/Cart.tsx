import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Trash2 } from 'lucide-react'

const Cart = () => {
  // Pour l'instant, nous utilisons des données statiques
  const cartItems = [
    {
      id: 1,
      type: 'Configuration Gaming',
      components: {
        cpu: 'AMD Ryzen 7 5800X',
        gpu: 'NVIDIA RTX 3080',
        ram: '32GB DDR4',
        storage: '1TB NVMe SSD',
        motherboard: 'MSI B550 TOMAHAWK',
        psu: 'Corsair RM850x',
        case: 'Phanteks P500A'
      },
      price: 2499.99
    }
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Mon Panier</h1>
      
      {cartItems.length === 0 ? (
        <Card>
          <CardContent className="py-8">
            <p className="text-center text-muted-foreground">Votre panier est vide</p>
          </CardContent>
        </Card>
      ) : (
        <>
          {cartItems.map((item) => (
            <Card key={item.id} className="mb-6">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>{item.type}</CardTitle>
                <Button variant="destructive" size="icon">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Composant</TableHead>
                      <TableHead>Modèle</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(item.components).map(([key, value]) => (
                      <TableRow key={key}>
                        <TableCell className="font-medium capitalize">{key}</TableCell>
                        <TableCell>{value}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="mt-4 text-right">
                  <p className="text-lg font-semibold">
                    Prix: {item.price.toLocaleString('fr-FR')}€
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="mt-8">
            <CardContent className="py-6">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">Total</p>
                <p className="text-2xl font-bold">{total.toLocaleString('fr-FR')}€</p>
              </div>
              <Button className="w-full mt-4" size="lg">
                Procéder au paiement
              </Button>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}

export default Cart