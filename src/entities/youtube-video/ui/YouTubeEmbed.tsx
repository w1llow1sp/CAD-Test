'use client';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

interface YouTubeEmbedProps {
    videoId: string;
    title: string;
}

//
export function YouTubeEmbed({ videoId, title }: YouTubeEmbedProps) {
    return (
        <LiteYouTubeEmbed
            id={videoId}
            title={title}
            wrapperClass="yt-lite rounded-lg overflow-hidden"
        />
    );
}