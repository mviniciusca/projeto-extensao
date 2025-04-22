import { Card, CardContent } from "@/components/ui/card"
import { SectionTitle } from "@/components/section-title"
import { Video as VideoIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Video = {
  id: string
  title: string
  channel: string
  channelLink: string
  thumbnail: string
  duration: string
}

const videos: Video[] = [
  {
    id: "1",
    title: "Como fazer projeto de extensão 2025",
    channel: "É Hora de Aprender",
    channelLink: "https://www.youtube.com/watch?v=3Hn56VzkdrU",
    thumbnail: "/video_1.png",
    duration: "22:21"
  },
  {
    id: "2",
    title: "Como fazer projeto de extensão - Rápido e fácil",
    channel: "É Hora de Aprender",
    channelLink: "https://www.youtube.com/watch?v=BHf_74pMQZs",
    thumbnail: "/videoframe_1789.png",
    duration: "13:34"
  },
  {
    id: "3",
    title: "Projeto de Extensão Análise e Desenvolvimento de Sistemas - Como Fazer Unopar e Anhanguera",
    channel: "ADS Code",
    channelLink: "https://www.youtube.com/watch?v=ESzedQzEvIk",
    thumbnail: "/videoframe_4236.png",
    duration: "15:20"
  },
    {
    id: "4",
    title: "Projeto de Extensão Análise e Desenvolvimento de Sistemas - Como Fazer Unopar e Anhanguera",
    channel: "ADS Code",
    channelLink: "https://www.youtube.com/watch?v=ESzedQzEvIk",
    thumbnail: "/videoframe_4236.png",
    duration: "15:20"
  }

]

export function Videos() {
  return (
    <section className="mb-12">
      <SectionTitle 
        id="videos"
        title="Vídeos para Aprender Mais"
        icon={<VideoIcon className="h-6 w-6" />}
      />
      
      <div className="relative">
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full"
        >
          <CarouselContent>
            {videos.map((video) => (
              <CarouselItem key={video.id} className="md:basis-1/2 lg:basis-1/3">
                <Link href={video.channelLink} target="_blank">
                  <Card className="overflow-hidden hover:bg-accent transition-colors">
                    <CardContent className="p-0">
                      <div className="relative">
                        <div className="aspect-video relative">
                          <Image
                            src={video.thumbnail}
                            alt={video.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/80 text-white px-1 rounded text-sm">
                          {video.duration}
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold line-clamp-2 mb-1">{video.title}</h3>
                        <span className="text-sm text-muted-foreground">
                          {video.channel}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}