import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center justify-center md:flex-row">
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={175}>
                            <div className="flex flex-col">
                                <img
                                    className="mx-auto h-22 w-fit"
                                    src="./fire.png"
                                    alt="mage-class"
                                />
                                <p className='text-xl font-semibold mt-3'>MAGE CLASS</p>
                            </div>

                            <div className="flex flex-col">
                                <img
                                    className="mx-auto h-22 w-fit"
                                    src="./paladin.png"
                                    alt="paladin-class"
                                />
                                <p className='text-xl font-semibold mt-3'>PALADIN CLASS</p>
                            </div>
                            <div className="flex flex-col">
                                <img
                                    className="mx-auto h-22 w-fit"
                                    src="./archer.png"
                                    alt="archer-class"
                                />
                                <p className='text-xl font-semibold mt-3'>RANGER CLASS</p>
                            </div>
                            <div className="flex flex-col">
                                <img
                                    className="mx-auto h-22 w-fit"
                                    src="./spider.png"
                                    alt="spider-class"
                                />
                                <p className='text-xl font-semibold mt-3'>SPIDER CLASS</p>
                            </div>
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
