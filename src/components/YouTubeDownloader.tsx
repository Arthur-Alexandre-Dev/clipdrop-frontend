import React, { useState } from "react";
import YouTube from "react-youtube";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Download } from "lucide-react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FlipWords } from "../../components/ui/flip-words";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

interface VideoInfo {
  title: string;
  thumbnail: string;
  id: string;
}

export function YouTubeDownloader() {
  const [url, setUrl] = useState("");
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null);
  const [format, setFormat] = useState("mp4");
  const [quality, setQuality] = useState("1080p");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Get YouTube video ID from URL
  const extractVideoId = (url: string) => {
    const regExp =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[7].length === 11 ? match[7] : null;
  };

  const handleSearch = async () => {
    setError("");
    setIsLoading(true);

    const videoId = extractVideoId(url);

    if (!videoId) {
      setError("URL inválida. Por favor, forneça uma URL válida do YouTube.");
      setIsLoading(false);
      return;
    }

    // In a real application, you would fetch video info from backend
    // Simulating API call for demo purposes
    setTimeout(() => {
      setVideoInfo({
        title: "Video Title", // This would come from the API
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        id: videoId,
      });
      setIsLoading(false);
    }, 1000);
  };

  const handleDownload = () => {
    // In a real application, this would trigger the download process
    // For this demo, we'll just simulate it
    alert(
      `Iniciando download: ${videoInfo?.title} em ${format} com qualidade ${quality}`
    );
  };

  return (
    <BackgroundBeamsWithCollision>
      <div className="z-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full"
        >
          <h1 className="text-4xl font-bold text-center mt-8 mb-2 handwriting text-white">
            ClipDrop
          </h1>
          <div className="flex items-center justify-center text-gray-300 mb-6 max-w-lg mx-auto text-lg">
            <span className="mr-[1px]">Baixe</span>
            <FlipWords
              words={[
                "vídeos",
                "músicas",
                "documentários",
                "conteúdo",
                "tutoriais",
                "podcasts",
              ]}
              className="text-white font-bold mx-[1px] text-lg"
              duration={2000}
            />
            <span className="ml-[1px]">do YouTube em alta qualidade</span>
          </div>

          <Card className="w-full bg-background/20 backdrop-blur-sm border border-gray-700">
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-4">
                <div className="flex w-full space-x-2">
                  <Input
                    className="bg-background/70 border border-gray-700 focus-visible:ring-gray-500"
                    placeholder="Cole aqui o link do seu vídeo"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                  <Button
                    onClick={handleSearch}
                    disabled={isLoading || !url}
                    className="whitespace-nowrap bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                  >
                    Procurar
                  </Button>
                </div>

                {!url && !videoInfo && (
                  <div className="py-8 text-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="relative flex items-center justify-center"
                    >
                      <div className="absolute w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                      <p className="text-gray-400 text-sm mb-2 relative">
                        ✨ Comece colando um link do YouTube acima ✨
                      </p>
                    </motion.div>
                    <p className="text-gray-500 text-xs">
                      Suportamos links do YouTube, YouTube Music e YouTube
                      Shorts
                    </p>
                  </div>
                )}

                {error && <p className="text-red-500 text-sm">{error}</p>}

                {isLoading && (
                  <div className="w-full flex justify-center py-8">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full blur-md bg-white/10"></div>
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white relative"></div>
                    </div>
                  </div>
                )}

                {videoInfo && !isLoading && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="space-y-4"
                  >
                    <div className="w-full aspect-video bg-black rounded-md overflow-hidden border border-gray-800">
                      <YouTube
                        videoId={videoInfo.id}
                        className="w-full h-full"
                        opts={{
                          width: "100%",
                          height: "100%",
                          playerVars: {
                            autoplay: 0,
                          },
                        }}
                      />
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-800 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.05),transparent)] animate-[shimmer_2s_infinite]"></div>
                      <p className="text-center text-lg font-medium relative">
                        Vídeo encontrado! Selecione suas preferências abaixo.
                      </p>
                    </motion.div>

                    <div className="flex space-x-2">
                      <div className="w-1/2">
                        <p className="text-sm mb-1">Formato:</p>
                        <Select value={format} onValueChange={setFormat}>
                          <SelectTrigger className="bg-[#1f1f1f] border border-gray-700 text-white">
                            <SelectValue placeholder="Formato" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1f1f1f] border border-gray-700 text-white">
                            <SelectItem
                              value="mp4"
                              className="text-white hover:bg-slate-700 hover:text-white"
                            >
                              mp4
                            </SelectItem>
                            <SelectItem
                              value="mp3"
                              className="text-white hover:bg-slate-700 hover:text-white"
                            >
                              mp3
                            </SelectItem>
                            <SelectItem
                              value="avi"
                              className="text-white hover:bg-slate-700 hover:text-white"
                            >
                              avi
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="w-1/2">
                        <p className="text-sm mb-1">Qualidade:</p>
                        <Select value={quality} onValueChange={setQuality}>
                          <SelectTrigger className="bg-[#1f1f1f] border border-gray-700 text-white">
                            <SelectValue placeholder="Qualidade" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#1f1f1f] border border-gray-700 text-white">
                            <SelectItem
                              value="1080p"
                              className="text-white hover:bg-slate-700 hover:text-white"
                            >
                              1080p
                            </SelectItem>
                            <SelectItem
                              value="720p"
                              className="text-white hover:bg-slate-700 hover:text-white"
                            >
                              720p
                            </SelectItem>
                            <SelectItem
                              value="480p"
                              className="text-white hover:bg-slate-700 hover:text-white"
                            >
                              480p
                            </SelectItem>
                            <SelectItem
                              value="360p"
                              className="text-white hover:bg-slate-700 hover:text-white"
                            >
                              360p
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="w-full isolate">
                      <button
                        onClick={handleDownload}
                        className="w-full group/download relative overflow-hidden h-12 bg-white text-black font-medium rounded-md flex items-center justify-center transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] border border-gray-300"
                      >
                        <span className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 opacity-0 group-hover/download:opacity-90"></span>
                        <span className="absolute inset-0 w-full h-full bg-[linear-gradient(110deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.5)_50%,rgba(255,255,255,0.3)_75%,rgba(255,255,255,0)_100%)] opacity-0 group-hover/download:opacity-100 transition-all duration-700 ease-in-out group-hover/download:translate-x-[400px] group-hover/download:transition-transform group-hover/download:duration-2000 group-hover/download:ease-in-out"></span>
                        <span className="relative flex items-center justify-center gap-2 z-10 transition-colors duration-700 ease-in-out group-hover/download:text-white">
                          Baixar Agora
                          <Download
                            className="group-hover/download:animate-bounce transition-transform duration-700"
                            size={20}
                          />
                        </span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
