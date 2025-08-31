import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';

import { useEffect, useRef, useState } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Hero = ({heroData}) => {
    console.log(heroData);
    
    const videoRef = useRef([]);
    const videoSpanRef = useRef([]);
    const videoDivRef = useRef([]);
    const mediaCarouselRef = useRef(null);
    const mediaSliderRef = useRef(null);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [carouselGap, setCarouselGap] = useState(0);
    const [carousePaddingLeft, setCarousePaddingLeft] = useState(0);
    const [carousePaddingRight, setcarousePaddingRight] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const lastVideoIndex = heroData.length - 1;

    // video and indicator state
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        mediaId: 0,
        isLastMedia: false,
        isPlaying: false,
    });

    const [loadedData, setLoadedData] = useState([]);
    const { isEnd, isLastMedia, startPlay, mediaId, isPlaying } = video;


    let first_percentage = 0;
    const last_percentage = (mediaId - ((carouselWidth - (sliderWidth + ((mediaId) * carouselGap) + (carousePaddingRight) + (carousePaddingLeft))) / (sliderWidth + carousePaddingLeft + carouselGap))) * -100;

    if (mediaId === 0) {
        first_percentage = 0;
    }
    switch (mediaId) {
        case 0:
            first_percentage = 0;
            break

        case 1:
            first_percentage = (mediaId * -100) + ((carousePaddingRight / sliderWidth) * -100);
            break

        default:
            first_percentage = (mediaId * -100) + ((carousePaddingRight / sliderWidth) * -100) + (((mediaId - 1) * carouselGap / sliderWidth) * -100);
    }

    useEffect(() => {
        // Get the width of the element when the component mounts
        if (mediaCarouselRef.current) {
            setCarouselWidth(mediaCarouselRef.current.offsetWidth);
            setSliderWidth(mediaSliderRef.current.offsetWidth)
            const computedStyle = window.getComputedStyle(mediaCarouselRef.current);
            setCarouselGap(parseFloat(computedStyle.gap));
            setCarousePaddingLeft(parseFloat(computedStyle.paddingLeft));
            setcarousePaddingRight(parseFloat(computedStyle.paddingRight));
        }

        // Optionally, update the width on window resize
        const handleResize = () => {
            if (mediaCarouselRef.current) {
                setCarouselWidth(mediaCarouselRef.current.offsetWidth);
                setSliderWidth(mediaSliderRef.current.offsetWidth)
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    useGSAP(() => {
        const currentSlide = heroData[mediaId];

        const videoDurationTime = 5000; // Adjust this duration based on actual video length

        if (!currentSlide) return; // Check if currentSlide exists


        const videoDurationTime1 = currentSlide.videoDuration;


        // Move the slider to the next position
        gsap.to('#slider', {
            xPercent: mediaId < heroData.length - 1 ? first_percentage : last_percentage,
            duration: 2,
            ease: 'power2.inOut',
        });

        if (currentSlide.type === 'video') {
            // If it's a video, trigger animation and play video
            gsap.to(videoRef.current[mediaId], {
                scrollTrigger: {
                    trigger: videoRef.current[mediaId],
                    toggleActions: 'restart none none none',
                },
                onComplete: () => {
                    setVideo((prev) => ({
                        ...prev,
                        startPlay: true,
                        isPlaying: true,
                    }));
                },
            });
        } else {
            // If it's an image, wait for videoDurationTime before moving to the next slide
            gsap.delayedCall(videoDurationTime / 1000, () => {
                setVideo((prev) => ({
                    ...prev,
                    mediaId: prev.mediaId < heroData.length - 1 ? prev.mediaId : 0,
                }));
            });
        }
    }, [isEnd, mediaId]);

    useEffect(() => {
        let currentProgress = 0; // Declare currentProgress
        let span = videoSpanRef.current; // Declare span
        let anim; // Declare anim
        const currentSlide = heroData[mediaId];
        const isVideo = currentSlide && currentSlide.type === 'video'; // Check if currentSlide exists

        // Make sure we're considering all slides (video or image)
        if (span[mediaId]) {
            const duration = isVideo ? currentSlide.videoDuration : 5; // Declare duration and assign value

            anim = gsap.to(span[mediaId], {
                duration,
                ease: 'none',
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100);
                    if (progress !== currentProgress) {
                        currentProgress = progress;

                        gsap.to(videoDivRef.current[mediaId], {
                            width:
                                window.innerWidth < 760
                                    ? '10vw'
                                    : window.innerWidth < 1200
                                        ? '10vw'
                                        : '4vw',
                        });

                        gsap.to(span[mediaId], {
                            width: `${currentProgress}%`,
                        });
                    }
                },
                onComplete: () => {
                    gsap.to(videoDivRef.current[mediaId], {
                        width: '20px',
                    });
                    gsap.to(span[mediaId], {
                        backgroundColor: '#38b6ff',
                    });

                    if (mediaId === heroData.length - 1) {
                        handleProcess('video-last'); // Handle last video transition logic here
                    }

                    if (!isVideo) {
                        setVideo((prev) => ({
                            ...prev,
                            mediaId: prev.mediaId < heroData.length - 1 ? prev.mediaId + 1 : 0,
                        }));
                    }
                },
            });

            // Sync video progress if it's a video
            if (isVideo) {
                const animUpdate = () => {
                    const video = videoRef.current[mediaId];
                    if (video && video.currentTime !== undefined) {
                        anim.progress(video.currentTime / heroData[mediaId].videoDuration);
                    }
                };

                if (isPlaying) {
                    gsap.ticker.add(animUpdate);
                } else {
                    gsap.ticker.remove(animUpdate);
                }
            }
        }

        return () => {
            if (anim) anim.kill(); // Cleanup GSAP animation on unmount
        };
    }, [mediaId, startPlay]); // Ensure to trigger on mediaId or startPlay change


    useEffect(() => {
        if (loadedData.length > 0) {
            const currentVideo = videoRef.current[mediaId];
            if (currentVideo) {
                if (!isPlaying) {
                    currentVideo.pause();
                } else if (startPlay) {
                    currentVideo.play();
                }
            }
        }
    }, [startPlay, mediaId, isPlaying, loadedData]);


    // Handle video state changes
    const handleProcess = (type, i) => {
        switch (type) {
            case 'video-end':
                setVideo((pre) => ({ ...pre, isEnd: true, mediaId: i + 1 }));
                break;

            case 'video-last':
                setVideo((pre) => ({ ...pre, isLastMedia: true }));
                break;

            case 'video-reset':
                setVideo((pre) => ({ ...pre, mediaId: 0, isLastMedia: false }));
                break;

            case 'pause':
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                break;

            case 'play':
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                break;

            default:
                return video;
        }
    };

    const handleLoadedMetaData = (i, e) => {
        if (heroData[i]) {
            setLoadedData((pre) => [...pre, e]);
        } else {
            console.error(`Invalid index: ${i}, data not found for this slide`);
        }
    };

    return (
        <>
            <div className='w-full h-auto items-center justify-start flex gap-[5px] lg:gap-[10px] xl:gap-[15px] px-[5px] lg:px-[10px] xl:px-[15px] overflow-hidden' ref={mediaCarouselRef}>
                {
                    heroData.map((list, i) => (
                        <div ref={mediaSliderRef} key={list.id} id="slider" className='min-w-[90%] lg:min-w-[85%] xxxl:min-w-[80%] 4xl:min-w-[max(80%,1380px)] aspect-[16/13] lg:aspect-[16/12] xl:aspect-[16/7] items-center justify-center  flex overflow-hidden bg-slate-400 rounded-[15px] lg:rounded-[18px] border-[1px] border-gray-400'>
                            {
                                list.type === 'video' ? (
                                    <video
                                        id="video"
                                        playsInline={true}
                                        className='w-full h-[100%] object-cover'
                                        preload="auto"
                                        muted
                                        ref={(el) => (videoRef.current[i] = el)}
                                        onEnded={() =>
                                            i !== lastVideoIndex ? handleProcess('video-end', i) : handleProcess('video-last')
                                        }
                                        onPlay={() =>
                                            setVideo((pre) => ({ ...pre, isPlaying: true }))
                                        }
                                        onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}

                                    >
                                        <source src={list.mediaUrl} type="video/mp4" />
                                    </video>

                                ) : (
                                    <img
                                        src={list.mediaUrl}
                                        alt={`Slide ${list.id}`}
                                        className='w-full  h-[100%] object-cover'
                                    />

                                )
                            }
                            {isLastMedia && handleProcess('video-reset')}
                        </div>
                    ))
                }
            </div>

            {/* Down Button */}
            {/* Down Button */}
            {/* Down Button */}

            <div className='w-auto h-[40px] mt-[5px] items-center justify-center flex gap-[5px]' >
                {
                    heroData.map((_, i) => (
                        <span
                            key={i}
                            className='w-[10px] lg:w-[15px] xl:w-[25px] h-[4px] mx-[1px] lg:mx-[3px] xl:mx-[5px] bg-gray-300 relative rounded-lg'
                            ref={(el) => (videoDivRef.current[i] = el)}
                        >
                            <span
                                className='absolute w-[100%] h-[100%] bg-primary'
                                ref={(el) => (videoSpanRef.current[i] = el)}
                            >
                            </span>
                        </span>

                    ))
                }

            </div>

        </>
    )
}

export default Hero