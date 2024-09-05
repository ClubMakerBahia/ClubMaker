'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

const proyectos = [
  {
    titulo: "Brazo Robótico",
    descripcion: "Brazo robótico controlado por Arduino para tareas de precisión.",
    descripcionDetallada: "Este brazo robótico utiliza servomotores controlados por Arduino para realizar movimientos precisos en tres dimensiones. Puede ser programado para realizar tareas repetitivas o controlado en tiempo real mediante una interfaz de usuario.",
    imagen: "/placeholder.svg?height=200&width=300",
    galeria: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    galardones: [
      { puesto: "1er lugar", competicion: "Feria de Ciencias Regional", año: 2023 }
    ],
    creadores: ["Ana García", "Carlos Rodríguez"],
    añoCreacion: 2023
  },
  {
    titulo: "Invernadero Inteligente",
    descripcion: "Sistema automatizado para controlar la temperatura y humedad de un invernadero.",
    descripcionDetallada: "Este invernadero inteligente utiliza sensores de temperatura, humedad y luz para mantener las condiciones óptimas para el crecimiento de las plantas. Un sistema de riego automatizado y ventilación controlada por Arduino asegura un ambiente ideal en todo momento.",
    imagen: "/placeholder.svg?height=200&width=300",
    galeria: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    galardones: [
      { puesto: "2do lugar", competicion: "Hackathon de Sostenibilidad", año: 2022 }
    ],
    creadores: ["Laura Martínez", "David Sánchez"],
    añoCreacion: 2022
  },
  {
    titulo: "Robot Seguidor de Línea",
    descripcion: "Un robot autónomo que sigue una línea negra sobre fondo blanco.",
    descripcionDetallada: "Este robot utiliza sensores infrarrojos para detectar y seguir una línea negra sobre un fondo blanco. Está equipado con un microcontrolador Arduino que procesa las señales de los sensores y controla los motores para mantener el robot en la trayectoria correcta.",
    imagen: "/placeholder.svg?height=200&width=300",
    galeria: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
    galardones: [
      { puesto: "3er lugar", competicion: "Olimpiada de Robótica", año: 2021 }
    ],
    creadores: ["Miguel Fernández", "Elena Torres"],
    añoCreacion: 2021
  }
]

export default function Proyectos() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [selectedImage, setSelectedImage] = useState(0)
  
    return (
      <div className="container mx-auto px-4 py-8">
      <Link href="https://clubmakerbahia.vercel.app">
        <Button className="mb-8" variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" /> Volver atrás
        </Button>
      </Link>
      
      <h1 className="text-4xl font-bold mb-8 text-center text-gradient">Proyectos del Club Maker</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="border border-accent-light rounded-lg overflow-hidden shadow-lg bg-accent bg-opacity-10">
            <Image 
              src={proyecto.imagen} 
              alt={proyecto.titulo} 
              width={300} 
              height={200} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-white">{proyecto.titulo}</h2>
              <p className="text-accent-light mb-4">{proyecto.descripcion}</p>
              <Button onClick={() => setSelectedProject(proyecto)} variant="outline">Ver más</Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-accent bg-opacity-10 text-white max-w-[calc(100vw-40px)] max-h-[calc(100vh-40px)] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">{selectedProject?.titulo}</DialogTitle>
            <Button 
              className="absolute right-4 top-4 bg-accent hover:bg-accent-light text-white" 
              onClick={() => setSelectedProject(null)}
            >
              <X className="h-6 w-6" />
            </Button>
          </DialogHeader>
          <DialogDescription>
            <p className="text-accent-light mb-4">{selectedProject?.descripcionDetallada}</p>
            <div className="mb-4">
              <Image 
                src={selectedProject?.galeria[selectedImage]} 
                alt={`Imagen ${selectedImage + 1}`} 
                width={600} 
                height={400} 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="flex justify-center space-x-2 mb-4">
              {selectedProject?.galeria.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-16 h-16 rounded-md overflow-hidden ${index === selectedImage ? 'ring-2 ring-accent' : ''}`}
                >
                  <Image src={img} alt={`Miniatura ${index + 1}`} width={64} height={64} className="object-cover" />
                </button>
              ))}
            </div>
            {/* ... (el resto del contenido del modal se mantiene igual) */}
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  )
}