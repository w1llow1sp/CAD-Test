'use client'
import {motion} from "framer-motion";
import {YouTubeEmbed} from "@/entities/youtube-video/ui/YouTubeEmbed";

export default function HeroSection() {
    return (
        <section className="bg-blue-100 py-12 md:py-20 shadow-lg w-full">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Текстовая часть */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4 max-w-prose flex-1 md:mr-10 md:pr-0"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            Most important title on the page
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
                            ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante
                        </p>
                    </motion.div>

                    {/* YouTube-видео */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative w-full max-w-lg md:max-w-none md:w-1/2"
                    >
                        <YouTubeEmbed videoId={'dQw4w9WgXcQ'} title={'Test Task Video'} />
                    </motion.div>
                </div>
            </div>
        </section>

    )
}